<script lang="ts">
    const streamers = [
        {
            streamer: "4l1c3_0",
            task: "mental breakdance",
        },
        {
            streamer: "Acrone",
            task: "play Valorant with twin brother",
        },
        {
            streamer: "Ama_xinita",
            task: "estudiar leyes",
        },
        {
            streamer: "andolivconc",
            task: "estudar Direito",
        },
        {
            streamer: "arcanexviii",
            task: "babysit",
        },
        {
            streamer: "AuspexOneGaming",
            task: "teach computer science",
        },
        {
            streamer: "BintonDev",
            task: "rubber duck debugging",
        },
        {
            streamer: "brisim_claimhte",
            task: "rewrite history thesis",
        },
        {
            streamer: "brunixwho",
            task: "Ensinar ingl\u00eas",
        },
        {
            streamer: "Bubxmicn",
            task: "drive a truck",
        },
        {
            streamer: "charliosaurus",
            task: "release another song on YouTube",
        },
        {
            streamer: "cheshirepope",
            task: "write 1000 words",
        },
        {
            streamer: "chocomi_tv",
            task: "improve English",
        },
        {
            streamer: "Clarishy",
            task: "be sweaty",
        },
        {
            streamer: "cloudydayzzz",
            task: "interpret ASL",
        },
        {
            streamer: "creativepepper",
            task: "develop mobile app",
        },
        {
            streamer: "DarthTorLin",
            task: "watch Star Wars",
        },
        {
            streamer: "DATJI_",
            task: "IRL KBBQ stream",
        },
        {
            streamer: "EarliestTea",
            task: "chat about MBTI",
        },
        {
            streamer: "Ellyskey",
            task: "sell YOUthversity merch",
        },
        {
            streamer: "Emerald_Glowo",
            task: "drawing stream",
        },
        {
            streamer: "emzkx",
            task: "study public health, psychology and exercise science",
        },
        {
            streamer: "eri__berry",
            task: "play Palia",
        },
        {
            streamer: "HarryIsTrying",
            task: "be a strategy consultant",
        },
        {
            streamer: "Hawokai",
            task: "be a shark",
        },
        {
            streamer: "itsbrandonut",
            task: "stream music then play valorant",
        },
        {
            streamer: "j3dg",
            task: "spin class",
        },
        {
            streamer: "jerrrs",
            task: "play Animal Crossing",
        },
        {
            streamer: "lala_xitlali",
            task: "design fashionable clothes",
        },
        {
            streamer: "long1nteger",
            task: "AI project",
        },
        {
            streamer: "lyricalclove",
            task: "teach English",
        },
        {
            streamer: "msmushh",
            task: "vibe on stream",
        },
        {
            streamer: "nachoburrit0",
            task: "update spreadsheets",
        },
        {
            streamer: "nick_kendall",
            task: "Instagram post",
        },
        {
            streamer: "nihn_jnesyo",
            task: "Release new Lo-fi music",
        },
        {
            streamer: "novellaHT",
            task: "play Don't Starve Together",
        },
        {
            streamer: "pcc_lanezzz",
            task: "be a supermodel",
        },
        {
            streamer: "PineappleEffect",
            task: "edit video",
        },
        {
            streamer: "pinsaregood",
            task: "go on another hiatus",
        },
        {
            streamer: "procrastilate",
            task: "chaos",
        },
        {
            streamer: "samkitkat",
            task: "learn React",
        },
        {
            streamer: "studypaws",
            task: "be a vet",
        },
        {
            streamer: "sunfflawer",
            task: "be a sunflower",
        },
        {
            streamer: "Supernaturalwriter",
            task: "hit the gym",
        },
        {
            streamer: "TheCake404",
            task: "wear a demon costume",
        },
        {
            streamer: "ThePainfulPhD",
            task: "study about pain",
        },
        {
            streamer: "theyolotato",
            task: "be a potato",
        },
        {
            streamer: "valecey",
            task: "graduate from university",
        },
        {
            streamer: "wafflesdot025",
            task: "perform in another musical",
        },
        {
            streamer: "wasmishtaken_",
            task: "simp for levi ackerman",
        },
        {
            streamer: "xeno_hiraeth",
            task: "anki flashcards",
        },
    ];

    // let primaryDivHeight: string;

    // onMount(() => {
    //     const animatedElement = document.querySelector(".primary");
    //     if (animatedElement) {
    //         primaryDivHeight = `${animatedElement.clientHeight}px`;
    //     }
    //     console.log(streamers.length);
    //     console.log(primaryDivHeight);
    // });
</script>

<div
    id="projects"
    class="h-fit [perspective:1000px] flex flex-col items-center"
>
    <div class="w-full max-w-[1440px]">
        <div
            class="flex flex-col lg:flex-row justify-center h-fit w-full px-10 lg:px-20"
        >
            <div
                class="image-container flex w-full lg:ml-auto lg:w-1/2 mb-5 lg:mb-0 aspect-video [perspective:200px] relative lg:mr-5"
            >
                <img
                    src="/images/projects/coworking-guide.webp"
                    alt="coworking guide"
                    class="absolute max-w-full
                    top-1/2 left-1/2
                    [transform:rotateY(5deg)_rotateX(0deg)_translateZ(-50px)_translateX(-45%)_translateY(-50%)] opacity-40
                    border-2 border-solid border-white rounded-xl"
                    width="700"
                />
                <img
                    src="/images/projects/coworking-guide.webp"
                    alt="coworking guide"
                    width="700"
                    class="absolute max-w-full
                    top-1/2 left-1/2
                    [transform:rotateY(5deg)_rotateX(0deg)_translateZ(-50px)_translateX(-43%)_translateY(-52%)] opacity-1
                    border-2 border-solid border-white rounded-xl"
                />
                <div
                    class="visit-div absolute w-[700px] bg-[rgba(0,0,0,0.5)] opacity-0
                    aspect-video
                    rounded-xl
                    [transform:translateX(-50%)_translateY(-50%)] top-1/2 left-1/2
                    border-2 border-solid border-white
                    max-w-full"
                >
                    <a
                        href="https://coworking-guide.vercel.app/"
                        target="_blank"
                        class="absolute [transform:translateX(-50%)_translateY(-50%)] top-1/2 left-1/2
                        px-5 py-3 bg-blue-500 rounded-xl opacity-1
                        font-bold
                        transition-colors duration-300
                        hidden lg:block
                        hover:bg-white hover:text-blue-500
                        ">Visit site</a
                    >
                </div>
            </div>
            <div class="lg:hidden flex justify-center items-center mb-10">
                <a
                    href="https://coworking-guide.vercel.app/"
                    target="_blank"
                    class="
                        px-5 py-3 bg-blue-500 rounded-xl opacity-1
                        font-bold
                        transition-colors duration-300
                        hover:bg-white hover:text-blue-500
                        ">View repository</a
                >
            </div>
            <div
                class="w-full h-fit lg:w-1/2 lg:h-[340px] flex flex-col justify-center lg:px-10 items-center lg:items-start"
            >
                <h2 class="text-3xl font-bold mb-5 text-center lg:text-left">
                    Coworking Guide
                </h2>
                <p
                    class="text-xl text-center lg:text-left lg:max-w-none max-w-lg text-balance"
                >
                    A guide to coworking streams for streamers, covers wide
                    range of topics from tips on how to get started with setting
                    up stream to how to grow your audience!
                </p>
                <div
                    class="w-full flex flex-row flex-wrap justify-center lg:justify-start mt-5"
                >
                    <div
                        class="w-fit bg-white text-black
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        Astro
                    </div>
                    <div
                        class="w-fit bg-[#3178C6] text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        TypeScript
                    </div>
                    <div
                        class="w-fit bg-black text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        Markdown
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
                    Chat-Task-Tic Widget
                </h2>
                <p
                    class="text-xl lg:text-right text-center lg:max-w-none max-w-lg text-balance"
                >
                    Used by 100+ Twitch streamers, allow viewers and streamers
                    to add their own tasks to the widget for accountability!
                    Easy to setup and the customization possibilities are
                    endless!
                </p>
                <div
                    class="w-full flex flex-row flex-wrap justify-center lg:justify-end mt-5"
                >
                    <div
                        class="w-fit bg-[#E34F26] text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        HTML
                    </div>
                    <div
                        class="w-fit bg-blue-700 text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        CSS
                    </div>
                    <div
                        class="w-fit bg-yellow-400 text-black
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        Javascript
                    </div>
                </div>
            </div>
            <div class="lg:hidden flex justify-center items-center mb-10">
                <a
                    href="https://github.com/liyunze-coding/chat-task-tic-overlay-infinity"
                    target="_blank"
                    class="
                        px-5 py-3 bg-blue-500 rounded-xl opacity-1
                        font-bold
                        transition-colors duration-300
                        hover:bg-white hover:text-blue-500
                        ">View repository</a
                >
            </div>
            <div
                class="image-container lg:w-1/2 aspect-video [perspective:200px] relative mb-3 lg:mb-0 md:mr-5 mr-0 lg:mr-0 ml-0 lg:ml-1"
            >
                <!-- task bot -->
                <div
                    class="task-widget absolute flex flex-col opacity-30
                            w-full h-[99%]
                            top-1/2 left-1/2 [transform:translateX(-50%)_translateY(-49%)_translateZ(-50px)_rotateY(-3deg)]"
                >
                    <div
                        class="w-full bg-black border-solid border-2 border-white
                            rounded-lg
                            px-5 py-2
                            text-xl text-white
                            flex flex-row justify-between items-center
                            font-['Fredoka',_sans-serif]"
                    >
                        <span>Hover here!</span>
                        <span>0/100+</span>
                    </div>
                    <div
                        class="scroll-parent relative h-full overflow-hidden font-['Fredoka',_sans-serif]"
                    >
                        <div
                            class="scroll-element primary px-1 absolute w-full"
                        >
                            {#each streamers as { streamer, task }}
                                <div
                                    class="w-full px-5 py-1 bg-[#404040] text-white my-2 rounded-md
                                    whitespace-nowrap overflow-hidden overflow-ellipsis"
                                >
                                    O {streamer} : {task}
                                </div>
                            {/each}
                        </div>
                        <div
                            class="scroll-element secondary px-1 absolute w-full"
                        >
                            {#each streamers as { streamer, task }}
                                <div
                                    class="w-full px-5 py-1 bg-[#404040] text-white my-2 rounded-md
                                    whitespace-nowrap overflow-hidden overflow-ellipsis"
                                >
                                    O {streamer} : {task}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
                <div
                    class="task-widget absolute flex flex-col
                            w-full h-[99%]
                            top-1/2 left-1/2 [transform:translateX(-51%)_translateY(-50%)_translateZ(-50px)_rotateY(-3deg)]"
                >
                    <div
                        class="w-full bg-black border-solid border-2 border-white
                            rounded-lg
                            px-5 py-2
                            text-xl text-white
                            flex flex-row justify-between items-center
                            font-['Fredoka',_sans-serif]"
                    >
                        <span>Hover here!</span>
                        <span>0/100+</span>
                    </div>
                    <div
                        class="scroll-parent relative h-full overflow-hidden font-['Fredoka',_sans-serif]"
                    >
                        <div
                            class="scroll-element primary px-1 absolute w-full"
                        >
                            {#each streamers as { streamer, task }}
                                <div
                                    class="w-full px-5 py-1 bg-[#404040] text-white my-2 rounded-md
                                    whitespace-nowrap overflow-hidden overflow-ellipsis"
                                >
                                    O {streamer} : {task}
                                </div>
                            {/each}
                        </div>
                        <div
                            class="scroll-element secondary px-1 absolute w-full"
                        >
                            {#each streamers as { streamer, task }}
                                <div
                                    class="w-full px-5 py-1 bg-[#404040] text-white my-2 rounded-md
                                    whitespace-nowrap overflow-hidden overflow-ellipsis"
                                >
                                    O {streamer} : {task}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>

                <div
                    class="visit-div absolute w-full h-full bg-[rgba(0,0,0,0.5)] opacity-0
                    rounded-md
                    [transform:translateX(-50%)_translateY(-50%)] top-1/2 left-1/2
                    border-2 border-solid border-white
                    overflow-hidden"
                >
                    <a
                        href="https://github.com/liyunze-coding/chat-task-tic-overlay-infinity"
                        target="_blank"
                        class="absolute [transform:translateX(-50%)_translateY(-50%)] top-1/2 left-1/2
                        px-5 py-3 bg-blue-500 rounded-xl opacity-1
                        font-bold
                        hidden lg:block
                        transition-colors duration-300
                        hover:bg-white hover:text-blue-500
                        ">View repository</a
                    >
                </div>
            </div>
        </div>

        <div
            class="flex flex-col lg:flex-row justify-center h-fit w-full px-10 lg:px-20 mt-5 lg:mt-0"
        >
            <div
                class="image-container flex w-full lg:ml-auto lg:w-1/2 mb-5 lg:mb-0 aspect-video [perspective:200px] relative lg:mr-5"
            >
                <img
                    src="/images/projects/hexguess.webp"
                    alt="Hex Guess"
                    class="absolute max-w-full
                    top-1/2 left-1/2
                    [transform:rotateY(5deg)_rotateX(0deg)_translateZ(-50px)_translateX(-45%)_translateY(-50%)] opacity-40
                    border-2 border-solid border-white rounded-xl"
                    width="700"
                />
                <img
                    src="/images/projects/hexguess.webp"
                    alt="Hex Guess"
                    width="700"
                    class="absolute max-w-full
                    top-1/2 left-1/2
                    [transform:rotateY(5deg)_rotateX(0deg)_translateZ(-50px)_translateX(-43%)_translateY(-52%)] opacity-1
                    border-2 border-solid border-white rounded-xl"
                />
                <div
                    class="visit-div absolute w-[700px] bg-[rgba(0,0,0,0.5)] opacity-0
                    aspect-video
                    rounded-xl
                    [transform:translateX(-50%)_translateY(-50%)] top-1/2 left-1/2
                    border-2 border-solid border-white
                    max-w-full"
                >
                    <a
                        href="https://hex-guess.vercel.app/"
                        target="_blank"
                        class="absolute [transform:translateX(-50%)_translateY(-50%)] top-1/2 left-1/2
                        px-5 py-3 bg-blue-500 rounded-xl opacity-1
                        font-bold
                        hidden lg:block
                        transition-colors duration-300
                        hover:bg-white hover:text-blue-500
                        ">Visit site</a
                    >
                </div>
            </div>
            <div class="lg:hidden flex justify-center items-center mb-10">
                <a
                    href="https://hex-guess.vercel.app/"
                    target="_blank"
                    class="
                        px-5 py-3 bg-blue-500 rounded-xl opacity-1
                        font-bold
                        transition-colors duration-300
                        hover:bg-white hover:text-blue-500
                        ">View repository</a
                >
            </div>
            <div
                class="w-full h-fit lg:w-1/2 lg:h-[340px] flex flex-col justify-center lg:px-10 items-center lg:items-start"
            >
                <h2 class="text-3xl font-bold mb-5 text-center">HexGuess</h2>
                <p
                    class="text-xl text-center lg:text-left lg:max-w-none max-w-lg text-balance"
                >
                    Decode colours in 5 attempts. Guess the hexadecimal code and
                    receive instant feedback! Built with Next.JS, TailwindCSS
                    and TypeScript.
                </p>
                <div
                    class="w-full flex flex-row flex-wrap justify-center lg:justify-start mt-5"
                >
                    <div
                        class="w-fit bg-black text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        NextJS
                    </div>
                    <div
                        class="w-fit bg-[#3178C6] text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        Typescript
                    </div>
                    <div
                        class="w-fit bg-[#07B6D4] text-black
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        TailwindCSS
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
                    Twitch Plays X
                </h2>
                <p
                    class="text-xl text-center lg:text-right lg:max-w-none max-w-lg text-balance"
                >
                    Allow Twitch chatters play games such as Pokemon! Chatters
                    can enter messages such as "up up down down left right B A"
                    and the Python program will trigger the corresponding
                    keypresses.
                </p>
                <div
                    class="w-full flex flex-row flex-wrap justify-center lg:justify-end mt-5"
                >
                    <div
                        class="w-fit bg-[#3776AB] text-white
                                rounded-full px-3 py-1 mr-1 my-1
                                transition-colors duration-300"
                    >
                        Python
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
            <div class="lg:hidden flex justify-center items-center mb-10">
                <a
                    href="https://github.com/liyunze-coding/TwitchPlaysX"
                    target="_blank"
                    class="
                        px-5 py-3 bg-blue-500 rounded-xl opacity-1
                        font-bold
                        transition-colors duration-300
                        hover:bg-white hover:text-blue-500
                        ">View repository</a
                >
            </div>
            <div
                class="image-container flex w-full lg:ml-auto lg:w-1/2 mb-5 lg:mb-0 aspect-video [perspective:200px] relative lg:mr-5"
            >
                <img
                    src="/images/projects/twitchplays.webp"
                    alt="Hex Guess"
                    class="absolute max-w-full
                    top-1/2 left-1/2 [transform:translateX(-48%)_translateY(-48%)_translateZ(-50px)_rotateY(-3deg)] opacity-40
                    border-2 border-solid border-white rounded-xl"
                    width="700"
                />
                <img
                    src="/images/projects/twitchplays.webp"
                    alt="Hex Guess"
                    width="700"
                    class="absolute max-w-full
                    top-1/2 left-1/2
                    [transform:translateX(-50%)_translateY(-50%)_translateZ(-50px)_rotateY(-3deg)] opacity-1
                    border-2 border-solid border-white rounded-xl"
                />
                <div
                    class="visit-div absolute w-[700px] bg-[rgba(0,0,0,0.5)] opacity-0
                    aspect-video
                    rounded-xl
                    [transform:translateX(-50%)_translateY(-50%)] top-1/2 left-1/2
                    border-2 border-solid border-white
                    max-w-full"
                >
                    <a
                        href="https://github.com/liyunze-coding/TwitchPlaysX"
                        target="_blank"
                        class="absolute [transform:translateX(-50%)_translateY(-50%)] top-1/2 left-1/2
                        px-5 py-3 bg-blue-500 rounded-xl opacity-1
                        font-bold
                        hidden lg:block
                        transition-colors duration-300
                        hover:bg-white hover:text-blue-500
                        ">View repository</a
                    >
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .image-container img,
    .image-container .task-widget {
        transition: transform 0.5s ease-in-out;
    }
    @media (min-width: 1025px) {
        .image-container:hover > img,
        .image-container:hover > .task-widget {
            transform: rotateY(0deg) rotateX(0deg) translateZ(0px)
                translateX(-50%) translateY(-50%);
        }

        .image-container:hover > .visit-div {
            opacity: 100%;
            transition: opacity 0.3s ease-in-out;
            transition-delay: 0.3s;
        }
    }

    .primary {
        animation: primary 30s linear infinite;
    }

    .secondary {
        animation: secondary 30s linear infinite;
    }

    @keyframes primary {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-2175px);
        }
    }

    @keyframes secondary {
        from {
            transform: translateY(2175px);
        }
        to {
            transform: translateY(0);
        }
    }
</style>
