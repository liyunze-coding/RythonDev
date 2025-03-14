<script lang="ts">
    import { onMount } from "svelte";
    import Socials from "../elements/Socials.svelte";

    // Roles
    let roles: string[] = [
        "Developer",
        "Streamer",
        "Content creator",
        "Student",
    ];
    let roleState: string = $state("");
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

    let greetingState: string = $state("");
    let greetingPulse: HTMLElement;

    async function animateGreeting(greeting: string) {
        for (let i = 0; i < greeting.length; i++) {
            greetingState = addCharacter(greetingState, greeting);

            if (i === greeting.length - 1) {
                greetingPulse.classList.remove("animate-pulse");
                greetingPulse.classList.add("hidden");
            }

            await sleep(roleInterval);
        }
    }

    // after window finish loading, call animateRoles()
    onMount(async () => {
        await sleep(800);
        animateGreeting(greeting);
        await animateRoles();
    });
</script>

<div
    id="intro"
    class="h-fit
        text-white
        flex flex-col"
>
    <div class="px-5 lg:px-10 pt-10 pb-2 card-content w-full">
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
                <div id="name" class="text-2xl font-bold animate-gradient">
                    RythonDev
                </div>
                <div class="text-xl w-full">
                    {roleState}<span class="animate-pulse">|</span>
                </div>
            </div>
        </div>
        <div id="uwu" class="hidden justify-center items-center">
            <img
                src="/images/RythonDev-UwU-compressed.webp"
                alt="RythonDev"
                width="400"
                height="131.8"
            />
        </div>
        <div class="text-2xl font-bold mt-2">
            Good {greetingState}<span
                bind:this={greetingPulse}
                class="animate-pulse font-extralight">|</span
            >, <br class="sm:hidden" />I'm Ryan!
        </div>
        <p class="text-left">
            I was born and raised in Malaysia, currently studying my Bachelor's
            in Computer Science in Australia! I speak fluent in Mandarin Chinese
            and English.
            <br /><br />
            I'm passionate about developing open source projects that benefit others,
            and I have extensive experience in leadership roles.
            <br /><br />
            I'm also
            <b
                >well-connected with various Twitch streamers and content
                creators</b
            >, thanks to prominent projects that have had a positive impact on
            the streaming community. I'm strongly motivated in the fields of
            <b> web development</b>, <b>computer vision</b> and
            <b>data science</b>.
        </p>
        <div class="flex flex-row justify-center items-center mt-5">
            <Socials />
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
