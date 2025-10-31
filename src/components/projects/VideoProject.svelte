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
			class="background-img absolute
                    top-1/2
                    left-1/2 max-w-full rounded-xl border-2
                    border-solid border-white
                    opacity-40
                    {positionLeft ? 'left' : 'right'}"
			width="700"
		/>

		<!-- svelte-ignore a11y_media_has_caption -->
		<video
			width="700"
			class="playable frontfacing-vid absolute
					top-1/2 left-1/2 max-w-full rounded-xl
                    border-2
                    border-solid border-white
                    opacity-100
                    {positionLeft ? 'left' : 'right'}"
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
					class="bg-secondary my-1 mr-1
                        w-fit rounded-full px-3
                        py-1 text-white transition-colors duration-300"
				>
					{tag.text}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.background-img.left {
		transform: translateX(calc(-50% + 25px)) translateY(calc(-50% + 5px))
			translateZ(-50px) rotateY(5deg);
	}

	.background-img.right {
		transform: translateX(calc(-50%)) translateY(calc(-50% + 5px))
			translateZ(-50px) rotateY(-3deg);
	}

	.frontfacing-vid.left {
		transform: translateX(calc(-50% + 35px)) translateY(calc(-50%))
			translateZ(-50px) rotateY(5deg);
	}

	.frontfacing-vid.right {
		transform: translateX(calc(-50% - 10px)) translateY(-50%)
			translateZ(-50px) rotateY(-3deg);
	}

	.image-container:hover .frontfacing-vid,
	.image-container:hover .background-img {
		transform: translate(-50%, -50%);
	}
</style>
