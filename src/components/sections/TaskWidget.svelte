<script lang="ts">
    const streamers = [
        {
            streamer: "4l1c3_0",
            task: "mental breakdance",
        },
        {
            streamer: "arcanexviii",
            task: "babysit",
        },
        {
            streamer: "brisim_claimhte",
            task: "rewrite history thesis",
        },
        {
            streamer: "Bubxmicn",
            task: "drive a truck",
        },
        {
            streamer: "charliosaurus",
            task: "praise the lord",
        },
        {
            streamer: "clari_miu",
            task: "be sweaty",
        },
        {
            streamer: "cloudydayzzz",
            task: "stay up at night",
        },
        {
            streamer: "creativepepper",
            task: "develop mobile app",
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
            streamer: "HarryIsTrying",
            task: "be a strategy consultant",
        },
        {
            streamer: "itsbrandonut",
            task: "cowork then league",
        },
        {
            streamer: "lala_xitlali",
            task: "design fashionable clothes",
        },
        {
            streamer: "lyricalclove",
            task: "teach English",
        },
        {
            streamer: "nachoburrit0",
            task: "update spreadsheets",
        },
        {
            streamer: "nihn_",
            task: "Release new Lo-fi music",
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
            streamer: "lilylikesrocks",
            task: "learn about rocks",
        },
        {
            streamer: "snowxcone",
            task: "do more leetcode",
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
            streamer: "xeno_hiraeth",
            task: "anki flashcards",
        },
    ];
</script>

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
            <div class="scroll-element primary px-1 absolute w-full">
                {#each streamers as { streamer, task }}
                    <div
                        class="w-full px-5 py-1 bg-[#404040] text-white my-2 rounded-md
                                    whitespace-nowrap overflow-hidden overflow-ellipsis"
                    >
                        O {streamer} : {task}
                    </div>
                {/each}
            </div>
            <div class="scroll-element secondary px-1 absolute w-full">
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
            <div class="scroll-element primary px-1 absolute w-full">
                {#each streamers as { streamer, task }}
                    <div
                        class="w-full px-5 py-1 bg-[#404040] text-white my-2 rounded-md
                                    whitespace-nowrap overflow-hidden overflow-ellipsis"
                    >
                        O {streamer} : {task}
                    </div>
                {/each}
            </div>
            <div class="scroll-element secondary px-1 absolute w-full">
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
                        hover:bg-white hover:text-blue-500">View repository</a
        >
    </div>
</div>

<style>
    .image-container .task-widget {
        transition: transform 0.5s ease-in-out;
    }
    @media (min-width: 1025px) {
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
        animation: primary 20s linear infinite;
    }

    .secondary {
        animation: secondary 20s linear infinite;
    }

    @keyframes primary {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-1175px);
        }
    }

    @keyframes secondary {
        from {
            transform: translateY(1175px);
        }
        to {
            transform: translateY(0);
        }
    }
</style>
