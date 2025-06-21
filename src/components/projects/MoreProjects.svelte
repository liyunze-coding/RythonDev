<script lang="ts">
    import VideoProject from "./VideoProject.svelte";
</script>

<div class="flex h-fit flex-col items-center pt-20 [perspective:1000px]">
    <div class="w-full max-w-[1440px]">
        <VideoProject
            image_src="/images/projects/chess-opencv.webp"
            image_alt="computer vision chess bot"
            position="left"
            video_src="/videos/chess_opencv_demo.webm"
            title="Computer Vision Chess Bot"
            description={`
                A script that plays against opponents on lichess. Uses
                OpenCV to detect the board and pieces, and the Stockfish
                chess engine to determine the best moves. Then uses
                PyAutoGUI to play the moves on the browser.
            `}
            tags={[
                {
                    text: "Python",
                    textColor: "white",
                    bgColor: "var(--color-python)",
                },
                {
                    text: "OpenCV",
                    textColor: "white",
                    bgColor: "var(--color-opencv)",
                },
                {
                    text: "PyAutoGUI",
                    textColor: "white",
                    bgColor: "black",
                },
            ]}
        ></VideoProject>
        <VideoProject
            image_src="/images/projects/aim-lab.webp"
            image_alt="Computer Vision AimLab Bot"
            position="right"
            video_src="/videos/aim_lab_demo.webm"
            title="Computer Vision AimLab Bot"
            description={`
                A script that plays AimLab, a game that helps improve your aim in FPS games. Uses OpenCV to detect the targets and win32API to move the mouse and click.
            `}
            tags={[
                {
                    text: "Python",
                    textColor: "white",
                    bgColor: "var(--color-python)",
                },
                {
                    text: "OpenCV",
                    textColor: "white",
                    bgColor: "var(--color-opencv)",
                },
                {
                    text: "win32API",
                    textColor: "white",
                    bgColor: "var(--color-win32api)",
                },
            ]}
        ></VideoProject>
    </div>
</div>
