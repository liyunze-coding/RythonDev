<script lang="ts">
    import { onMount } from "svelte";

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
                    } else {
                        video.muted = true;
                    }
                    video.play();
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

<div class="flex h-fit flex-col items-center pt-20 [perspective:1000px]">
    <div class="w-full max-w-[1440px]">
        <div
            class="flex h-fit w-full flex-col justify-center px-10 lg:flex-row lg:px-20"
        >
            <div
                class="image-container relative mb-5 flex aspect-video w-full [perspective:200px] lg:mb-0 lg:ml-auto lg:mr-5 lg:w-1/2"
            >
                <img
                    src="/images/projects/chess-opencv.webp"
                    alt="computer vision chess bot"
                    class="absolute left-1/2
                    top-1/2 max-w-full
                    rounded-xl border-2
                    border-solid border-white opacity-40 [transform:rotateY(5deg)_rotateX(0deg)_translateZ(-50px)_translateX(-45%)_translateY(-50%)]"
                    width="700"
                />

                <!-- svelte-ignore a11y-media-has-caption -->
                <video
                    width="700"
                    class="playable opacity-1 absolute
							left-1/2 top-1/2
							max-w-full rounded-xl
							border-2 border-solid border-white [transform:rotateY(5deg)_rotateX(0deg)_translateZ(-50px)_translateX(-43%)_translateY(-52%)]"
                >
                    <source
                        src="/videos/chess_opencv_demo.webm"
                        type="video/webm"
                    />
                </video>
            </div>
            <div
                class="flex h-fit w-full flex-col items-center justify-center lg:h-[340px] lg:w-1/2 lg:items-start lg:px-10"
            >
                <h2 class="mb-5 text-center text-3xl font-bold lg:text-left">
                    Computer Vision Chess bot
                </h2>
                <p
                    class="max-w-lg text-balance text-center text-xl lg:max-w-none lg:text-left"
                >
                    A script that plays against opponents on lichess. Uses
                    OpenCV to detect the board and pieces, and the Stockfish
                    chess engine to determine the best moves. Then uses
                    PyAutoGUI to play the moves on the browser.
                </p>
                <div
                    class="mt-5 flex w-full flex-row flex-wrap justify-center lg:justify-start"
                >
                    <div
                        class="my-1 mr-1 w-fit
                                rounded-full bg-[#3776AB] px-3 py-1 text-white
                                transition-colors duration-300"
                    >
                        Python
                    </div>
                    <div
                        class="my-1 mr-1 w-fit
                                rounded-full bg-[#3178C6] px-3 py-1 text-white
                                transition-colors duration-300"
                    >
                        OpenCV
                    </div>
                    <div
                        class="my-1 mr-1 w-fit
                                rounded-full bg-black px-3 py-1 text-white
                                transition-colors duration-300"
                    >
                        PyAutoGUI
                    </div>
                </div>
            </div>
        </div>
        <div
            class="mt-10 flex h-fit w-full flex-col-reverse justify-center px-10 lg:flex-row lg:px-16"
        >
            <div
                class="flex h-fit w-full flex-col items-center justify-center lg:h-[340px] lg:w-1/2 lg:items-end lg:px-10"
            >
                <h2 class="mb-5 text-center text-3xl font-bold lg:text-right">
                    Computer Vision AimLab Bot
                </h2>
                <p
                    class="max-w-lg text-balance text-center text-xl lg:max-w-none lg:text-right"
                >
                    A script that plays AimLab, a game that helps improve your
                    aim in FPS games. Uses OpenCV to detect the targets and
                    win32API to move the mouse and click.
                </p>
                <div
                    class="mb-10 mt-5 flex w-full flex-row flex-wrap justify-center lg:mb-0 lg:justify-end"
                >
                    <div
                        class="my-1 mr-1 w-fit
                                rounded-full bg-[#3776AB] px-3 py-1 text-white
                                transition-colors duration-300"
                    >
                        Python
                    </div>
                    <div
                        class="my-1 mr-1 w-fit
                                rounded-full bg-[#3178C6] px-3 py-1 text-white
                                transition-colors duration-300"
                    >
                        OpenCV
                    </div>
                    <div
                        class="my-1 mr-1 w-fit
                                rounded-full bg-[#0078D4] px-3 py-1 text-white
                                transition-colors duration-300"
                    >
                        win32API
                    </div>
                </div>
            </div>
            <div
                class="image-container relative mb-5 flex aspect-video w-full [perspective:200px] lg:mb-0 lg:ml-auto lg:mr-5 lg:w-1/2"
            >
                <img
                    src="/images/projects/aim-lab.webp"
                    alt="aim lab"
                    class="absolute left-1/2
                    top-1/2 max-w-full rounded-xl border-2
                    border-solid border-white opacity-40 [transform:translateX(-48%)_translateY(-48%)_translateZ(-50px)_rotateY(-3deg)]"
                    width="700"
                />

                <!-- svelte-ignore a11y-media-has-caption -->
                <video
                    width="700"
                    class="playable opacity-1 absolute
                    left-1/2 top-1/2
                    max-w-full rounded-xl
                    border-2 border-solid border-white [transform:translateX(-50%)_translateY(-50%)_translateZ(-50px)_rotateY(-3deg)]"
                    ><source src="/videos/aim_lab_demo.webm" /></video
                >
            </div>
        </div>
    </div>
</div>

<style>
    .image-container img,
    .image-container video {
        transition: transform 0.5s ease-in-out;
    }
    @media (min-width: 1025px) {
        .image-container:hover > img,
        .image-container:hover > video {
            transform: rotateY(0deg) rotateX(0deg) translateZ(0px)
                translateX(-50%) translateY(-50%);
        }
    }
</style>
