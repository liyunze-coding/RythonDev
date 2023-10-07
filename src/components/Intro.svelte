<script lang="ts">
    import { onMount } from "svelte";

    // Greeting
    let date = new Date();
    let hour = date.getHours();

    let greeting: string = "";

    if (hour >= 0 && hour < 12) {
        greeting = "morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "afternoon";
    } else if (hour >= 18) {
        greeting = "evening";
    }

    // Roles
    let roles: string[] = [
        "Developer",
        "Streamer",
        "Content creator",
        "Student",
    ];
    let roleState: string = "";
    let role: string;
    let counter: number = 0;
    let roleEmpty: boolean = true;
    const roleInterval: number = 50;
    const roleUpdateDelay: number = 2000; // delay after updating
    const roleRemoveDelay: number = 500; // delay after removing

    // Intro animation
    function removeLastCharacter(str: string) {
        return str.slice(0, -1);
    }

    function addCharacter(str1: string, str2: string) {
        // str1: incomplete string, add a character after this
        // str2: complete string, add a character from this

        let str1Length = str1.length;
        let str2Length = str2.length;

        if (str1Length < str2Length) {
            return str1 + str2[str1Length];
        } else {
            return str1;
        }
    }

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function animateRoles() {
        role = roles[counter];

        if (roleEmpty) {
            for (let i = 0; i < role.length; i++) {
                roleState = addCharacter(roleState, role);
                await sleep(roleInterval);
            }
            await sleep(roleUpdateDelay);
            roleEmpty = false;

            animateRoles();
        } else {
            for (let i = 0; i < role.length; i++) {
                roleState = removeLastCharacter(roleState);
                await sleep(roleInterval);
            }
            await sleep(roleRemoveDelay);
            if (counter < roles.length - 1) {
                counter++;
            } else {
                counter = 0;
            }
            roleEmpty = true;
            animateRoles();
        }
    }

    // after window finish loading, call animateRoles()
    onMount(async () => {
        await sleep(800);
        animateRoles();
    });
</script>

<div
    id="intro"
    class="h-fit
        text-white
        flex flex-col"
>
    <div class="px-1 lg:px-10 pt-10 pb-2 card-content w-full">
        <div class="flex flex-row h-20">
            <div class="w-20 mr-1 flex justify-center items-center">
                <img
                    src="/images/pfp_transparent_square.webp"
                    alt="Ryan"
                    width="100"
                    height="100"
                    class="rounded-full max-w-full bg-[#505050]"
                />
            </div>
            <div class="flex flex-col justify-center items-start ml-2">
                <div id="name" class="text-2xl font-bold">RythonDev</div>
                <div class="text-xl w-full">
                    {roleState}<span class="animate-pulse">|</span>
                </div>
            </div>
        </div>
        <div class="text-2xl font-bold mt-10">
            Good {greeting}, I'm Ryan!
        </div>
        <p class="text-left lg:text-justify">
            I'm passionate in developing open source projects to benefit others,
            with vast experience in leadership roles.
            <br /><br />
            I'm also
            <b
                >well networked with various Twitch streamers and content
                creators</b
            >, with prominent projects that positively impacted the streaming
            community. I'm strongly motivated in the fields of
            <b> web development</b>, <b>computer vision</b> and
            <b>data science</b>.
        </p>
        <div class="flex flex-row justify-center items-center mt-5">
            <a href="https://github.com/liyunze-coding" target="_blank">
                <div
                    class="bg-gray-300 rounded-full w-7 h-7 flex justify-center items-center mr-3 hover:bg-gray-200"
                >
                    <img
                        src="/images/socials/github.svg"
                        alt="github"
                        class="aspect-square max-w-full"
                        width="20"
                    />
                </div>
            </a>
            <a href="https://codepen.io/liyunze-coding" target="_blank">
                <div
                    class="bg-gray-300 rounded-full w-7 h-7 flex justify-center items-center mr-3 hover:bg-gray-200 transition-colors duration-150"
                >
                    <img
                        src="/images/socials/codepen.svg"
                        alt="codepen"
                        class="w-5 h-5 aspect-square"
                    />
                </div>
            </a>
            <a href="https://youtube.com/@RythonDev" target="_blank">
                <div
                    class="bg-gray-300 rounded-full w-7 h-7 flex justify-center items-center mr-3 hover:bg-red-400 transition-colors duration-150"
                >
                    <img
                        src="/images/socials/youtube.svg"
                        alt="youtube"
                        class="w-5 h-5 aspect-square"
                    />
                </div>
            </a>
            <a href="https://twitch.tv/RythonDev" target="_blank">
                <div
                    class="bg-gray-300 rounded-full w-7 h-7 flex justify-center items-center mr-3 hover:bg-purple-400 transition-colors duration-150"
                >
                    <img
                        src="/images/socials/twitch.svg"
                        alt="twitch"
                        class="w-4 h-4 aspect-square"
                    />
                </div>
            </a>
        </div>
    </div>
</div>

<style>
    .card-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-image: radial-gradient(
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
        );
        background-position: 50% 50%;
        background-size: 1.1rem 1.1rem;
        border-radius: 1.25rem;
        overflow: hidden;
    }

    #name {
        background: linear-gradient(
            90deg,
            #16ff00 0%,
            #72ffff 45%,
            #0096ff 100%
        );

        background-size: 300%;

        background-clip: text;
        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;
    }
</style>
