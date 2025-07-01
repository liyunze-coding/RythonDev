<script lang="ts">
    import { onMount } from "svelte";

    interface Tag {
        text: string;
        textColor: string;
        bgColor: string;
    }

    interface Props {
        position?: "left" | "right";
        image_src: string;
        image_alt: string;
        video_src: string;
        title: string;
        description: string;
        tags?: Tag[];
    }

    let {
        position = "left",
        image_src,
        image_alt,
        video_src,
        title,
        description,
        tags = [],
    }: Props = $props();

    const positionLeft = position == "left";

    onMount(() => {
        const videos = document.querySelectorAll<HTMLVideoElement>(".playable");

        let userInteracted = false;

        const handleUserInteraction = () => {
            userInteracted = true;
            document.removeEventListener("click", handleUserInteraction);
            document.removeEventListener("keydown", handleUserInteraction);
        };

        document.addEventListener("click", handleUserInteraction);
        document.addEventListener("keydown", handleUserInteraction);

        videos.forEach((video) => {
            // Ensure the video element supports play and pause methods
            if (
                typeof video.play === "function" &&
                typeof video.pause === "function"
            ) {
                video.addEventListener("mouseenter", () => {
                    if (userInteracted) {
                        video.volume = 0.2;
                        video.muted = false;
                        video.play();
                    } else {
                        video.volume = 0;
                        video.muted = true;
                        video.play();
                    }
                });

                video.addEventListener("mouseleave", () => {
                    video.pause();
                    video.currentTime = 0;
                });

                // Check if the screen width is less than or equal to 768px (mobile screen size)
                if (window.innerWidth <= 768) {
                    video.muted = true;
                    video.autoplay = true;
                    video.loop = true;
                    video.play();
                }
            }
        });
    });
</script>

<div
    class="mb-10 flex h-fit w-full flex-col justify-center px-10 lg:flex-row lg:px-20"
    class:lg:flex-row={positionLeft}
    class:lg:flex-row-reverse={!positionLeft}
>
    <div
        class="image-container relative mb-5 flex aspect-video w-full [perspective:200px] lg:mr-5 lg:mb-0 lg:ml-auto lg:w-1/2"
    >
        <img
            src={image_src}
            alt={image_alt}
            class="absolute max-w-full
                    rounded-xl
                    border-2 border-solid border-white opacity-40
                    {positionLeft
                ? '[transform:rotateY(5deg)_translateX(50px)_translateY(5px)_translateZ(-50px)]'
                : '[transform:rotateY(-5deg)_translateX(-20px)_translateY(5px)_translateZ(-50px)]'}"
            width="700"
        />

        <!-- svelte-ignore a11y_media_has_caption -->
        <video
            width="700"
            class="playable absolute max-w-full
					rounded-xl border-2 border-solid border-white
                    opacity-100
                    {positionLeft
                ? '[transform:rotateY(5deg)_translateX(60px)_translateZ(-50px)]'
                : '[transform:rotateY(-5deg)_translateX(-30px)_translateZ(-50px)]'}"
        >
            <source src={video_src} type="video/webm" />
        </video>
    </div>
    <div
        class="flex h-fit w-full flex-col items-center justify-center lg:h-[340px] lg:w-1/2 lg:px-10
        {positionLeft ? 'lg:items-start' : 'lg:items-end'}"
    >
        <h2
            class="mb-5 text-center text-3xl font-bold
            {positionLeft ? 'lg:text-left' : 'lg:text-right'}"
        >
            {title}
        </h2>
        <p
            class="max-w-lg text-center text-xl text-balance lg:max-w-none
            {positionLeft ? 'lg:text-left' : 'lg:text-right'}"
        >
            {description}
        </p>
        <div
            class="mt-5 flex w-full flex-row flex-wrap justify-center
            {positionLeft ? 'lg:justify-start' : 'lg:justify-end'}"
        >
            {#each tags as tag}
                <div
                    class="my-1 mr-1 w-fit
                        rounded-full px-3 py-1
                        transition-colors duration-300"
                    style={`
							background-color: ${tag.bgColor || "black"};
							color: ${tag.textColor || "white"};
						`}
                >
                    {tag.text}
                </div>
            {/each}
        </div>
    </div>
</div>
