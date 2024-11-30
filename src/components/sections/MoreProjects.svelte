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

<div class="h-fit pt-20 [perspective:1000px] flex flex-col items-center">
    <div class="w-full max-w-[1440px]">
        <div
            class="flex flex-col lg:flex-row justify-center h-fit w-full px-10 lg:px-20"
        >
            <div
                class="image-container flex w-full lg:ml-auto lg:w-1/2 mb-5 lg:mb-0 aspect-video [perspective:200px] relative lg:mr-5"
            >
                <img
                    src="/images/projects/chess-opencv.webp"
                    alt="computer vision chess bot"
                    class="absolute max-w-full
                    top-1/2 left-1/2
                    [transform:rotateY(5deg)_rotateX(0deg)_translateZ(-50px)_translateX(-45%)_translateY(-50%)] opacity-40
                    border-2 border-solid border-white rounded-xl"
                    width="700"
                />

                <!-- svelte-ignore a11y-media-has-caption -->
                <video
                    width="700"
                    class="playable absolute max-w-full
							top-1/2 left-1/2
							[transform:rotateY(5deg)_rotateX(0deg)_translateZ(-50px)_translateX(-43%)_translateY(-52%)] opacity-1
							border-2 border-solid border-white rounded-xl"
                >
                    <source
                        src="/videos/chess_opencv_demo.webm"
                        type="video/webm"
                    />
                </video>
            </div>
            <div
                class="w-full h-fit lg:w-1/2 lg:h-[340px] flex flex-col justify-center lg:px-10 items-center lg:items-start"
            >
                <h2 class="text-3xl font-bold mb-5 text-center lg:text-left">
                    Computer Vision Chess bot
                </h2>
                <p
                    class="text-xl text-center lg:text-left lg:max-w-none max-w-lg text-balance"
                >
                    A script that plays against opponents on lichess. Uses
                    OpenCV to detect the board and pieces, and the Stockfish
                    chess engine to determine the best moves. Then uses
                    PyAutoGUI to play the moves on the browser.
                </p>
                <div
                    class="w-full flex flex-row flex-wrap lg:justify-start justify-center mt-5"
                >
                    <div
                        class="w-fit bg-[#3776AB] text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        Python
                    </div>
                    <div
                        class="w-fit bg-[#3178C6] text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        OpenCV
                    </div>
                    <div
                        class="w-fit bg-black text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        PyAutoGUI
                    </div>
                </div>
            </div>
        </div>
        <div
            class="flex flex-col-reverse lg:flex-row justify-center h-fit w-full px-10 lg:px-16 mt-10"
        >
            <div
                class="w-full h-fit lg:w-1/2 lg:h-[340px] flex flex-col justify-center lg:px-10 items-center lg:items-end"
            >
                <h2 class="text-3xl font-bold mb-5 lg:text-right text-center">
                    Computer Vision AimLab Bot
                </h2>
                <p
                    class="text-xl text-center lg:text-right lg:max-w-none max-w-lg text-balance"
                >
                    A script that plays AimLab, a game that helps improve your
                    aim in FPS games. Uses OpenCV to detect the targets and
                    win32API to move the mouse and click.
                </p>
                <div
                    class="w-full flex flex-row flex-wrap justify-center lg:justify-end mt-5 mb-10 lg:mb-0"
                >
                    <div
                        class="w-fit bg-[#3776AB] text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        Python
                    </div>
                    <div
                        class="w-fit bg-[#3178C6] text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        OpenCV
                    </div>
                    <div
                        class="w-fit bg-[#0078D4] text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        win32API
                    </div>
                </div>
            </div>
            <div
                class="image-container flex w-full lg:ml-auto lg:w-1/2 mb-5 lg:mb-0 aspect-video [perspective:200px] relative lg:mr-5"
            >
                <img
                    src="/images/projects/aim-lab.webp"
                    alt="aim lab"
                    class="absolute max-w-full
                    top-1/2 left-1/2 [transform:translateX(-48%)_translateY(-48%)_translateZ(-50px)_rotateY(-3deg)] opacity-40
                    border-2 border-solid border-white rounded-xl"
                    width="700"
                />

                <!-- svelte-ignore a11y-media-has-caption -->
                <video
                    width="700"
                    class="playable absolute max-w-full
                    top-1/2 left-1/2
                    [transform:translateX(-50%)_translateY(-50%)_translateZ(-50px)_rotateY(-3deg)] opacity-1
                    border-2 border-solid border-white rounded-xl"
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
