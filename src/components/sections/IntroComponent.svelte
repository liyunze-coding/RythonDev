<script lang="ts">
    import { onMount } from "svelte";
    // import Socials from "../elements/Socials.svelte";

    // Roles
    let roles = $state(["Developer", "Streamer", "Content creator", "Student"]);
    let roleState: string = $state("");
    let role: string;
    let counter: number = $state(0);
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
    class="flex
        h-fit
        flex-col text-white"
>
    <div class="card-content w-full px-5 pb-2 pt-10 lg:px-10">
        <div class="flex h-20 flex-row">
            <div class="mr-1 flex w-20 items-center justify-center">
                <img
                    src="/images/pfp_new.webp"
                    alt="Ryan"
                    width="80"
                    height="80"
                    class="max-w-full rounded-full bg-[#505050]"
                />
            </div>
            <div class="ml-2 flex flex-col items-start justify-center">
                <div id="name" class="animate-gradient text-2xl font-bold">
                    RythonDev
                </div>
                <div class="w-full text-xl">
                    {roleState}<span class="animate-pulse">|</span>
                </div>
            </div>
        </div>
        <div id="uwu" class="hidden items-center justify-center">
            <img
                src="/images/RythonDev-UwU-compressed.webp"
                alt="RythonDev"
                width="400"
                height="131.8"
            />
        </div>
        <div class="mt-2 text-2xl font-bold">
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
        <div class="mt-5 flex flex-row items-center justify-center">
            <!-- <Socials /> -->
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
