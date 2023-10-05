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

    // Intro
    let intro1: string = "I like to make cool stuff";
    let intro2: string = "as a ";
    let introState1: string = "";
    let introState2: string = "";
    let lineOneFinished: boolean = false;

    async function animateIntro(interval: number) {
        for (let i = 0; i < intro1.length; i++) {
            introState1 += intro1[i];
            await sleep(interval);
        }

        lineOneFinished = true;

        for (let j = 0; j < intro2.length; j++) {
            introState2 += intro2[j];
            await sleep(interval);
        }
    }

    // Roles
    let roles: string[] = [
        "developer",
        "streamer",
        "content creator",
        "student",
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
        await animateIntro(50);
        animateRoles();
    });
</script>

<div
    id="intro"
    class="w-full h-[105vh]
        text-white
        flex justify-center items-end"
>
    <div
        id="intro-content"
        class="
        flex flex-row justify-between items-center
        w-4/5 h-4/5
        p-20 mt-24
        border-[#404040] border-2 border-solid
        rounded-3xl"
    >
        <div class="w-1/2">
            <h1 class="text-4xl mt-10">Good {greeting}, I'm</h1>
            <h2
                id="name"
                class="animate-gradient text-5xl text-center py-2 font-bold w-fit"
            >
                RythonDev
            </h2>
            <p class="text-2xl mt-5 leading-7">
                {introState1}<span
                    class:animate-pulse={!lineOneFinished}
                    class:opacity-0={lineOneFinished}>|</span
                >
                <br />{introState2}
                {roleState}<span
                    class="opacity-0"
                    class:animate-pulse={lineOneFinished}
                    class:opacity-1={lineOneFinished}>|</span
                >
            </p>
            <div class="mt-10">
                <p class="text-lg leading-6">
                    A computer science undergraduate student, passionate in
                    frontend web development and content creation.
                </p>
            </div>
            <div class="mt-10"></div>
        </div>
    </div>
</div>

<style>
    #intro {
        background: rgba(30, 32, 34, 1);
        background: linear-gradient(
            180deg,
            rgba(30, 32, 34, 1) 0%,
            rgba(30, 32, 34, 1) 95%,
            rgba(20, 22, 24, 0) 100%
        );
    }

    #intro-content {
        background: rgb(29, 32, 35);
        background: linear-gradient(
            90deg,
            rgba(29, 32, 35, 1) 0%,
            rgba(29, 32, 35, 1) 70%,
            rgba(50, 53, 58, 1) 100%
        );
    }

    #name {
        background: linear-gradient(
            90deg,
            #ff7dac 0%,
            #33d2ff 55%,
            #9845e8 100%
        );

        background-size: 300%;

        background-clip: text;
        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;
    }
</style>
