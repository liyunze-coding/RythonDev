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
            streamer: "lanezzz_",
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
            streamer: "xeno_hiraeth",
            task: "anki flashcards",
        },
    ];
</script>

<div
    class="image-container relative mb-3 ml-0 mr-0 aspect-video [perspective:200px] md:mr-5 lg:mb-0 lg:ml-1 lg:mr-0 lg:w-1/2"
>
    <!-- task bot -->
    <div
        class="task-widget absolute left-1/2 top-1/2 flex
                            h-[99%] w-full
                            flex-col opacity-30 [transform:translateX(-50%)_translateY(-49%)_translateZ(-50px)_rotateY(-3deg)]"
    >
        <div
            class="flex w-full flex-row items-center justify-between
                            rounded-lg
                            border-2 border-solid
                            border-white bg-black
                            px-5 py-2 font-['Fredoka',_sans-serif] text-xl
                            text-white"
        >
            <span>Hover here!</span>
            <span>0/100+</span>
        </div>
        <div
            class="scroll-parent relative h-full overflow-hidden font-['Fredoka',_sans-serif]"
        >
            <div class="scroll-element primary absolute w-full px-1">
                {#each streamers as { streamer, task }}
                    <div
                        class="my-2 w-full overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-[#404040]
                                    px-5 py-1 text-white"
                    >
                        O {streamer} : {task}
                    </div>
                {/each}
            </div>
            <div class="scroll-element secondary absolute w-full px-1">
                {#each streamers as { streamer, task }}
                    <div
                        class="my-2 w-full overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-[#404040]
                                    px-5 py-1 text-white"
                    >
                        O {streamer} : {task}
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div
        class="task-widget absolute left-1/2 top-1/2
                            flex h-[99%]
                            w-full flex-col [transform:translateX(-51%)_translateY(-50%)_translateZ(-50px)_rotateY(-3deg)]"
    >
        <div
            class="flex w-full flex-row items-center justify-between
                            rounded-lg
                            border-2 border-solid
                            border-white bg-black
                            px-5 py-2 font-['Fredoka',_sans-serif] text-xl
                            text-white"
        >
            <span>Hover here!</span>
            <span>0/100+</span>
        </div>
        <div
            class="scroll-parent relative h-full overflow-hidden font-['Fredoka',_sans-serif]"
        >
            <div class="scroll-element primary absolute w-full px-1">
                {#each streamers as { streamer, task }}
                    <div
                        class="my-2 w-full overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-[#404040]
                                    px-5 py-1 text-white"
                    >
                        O {streamer} : {task}
                    </div>
                {/each}
            </div>
            <div class="scroll-element secondary absolute w-full px-1">
                {#each streamers as { streamer, task }}
                    <div
                        class="my-2 w-full overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md bg-[#404040]
                                    px-5 py-1 text-white"
                    >
                        O {streamer} : {task}
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div
        class="visit-div absolute left-1/2 top-1/2 h-full w-full
                    overflow-hidden
                    rounded-md border-2 border-solid
                    border-white bg-[rgba(0,0,0,0.5)] opacity-0
                    [transform:translateX(-50%)_translateY(-50%)]"
    >
        <a
            href="https://github.com/liyunze-coding/chat-task-tic-overlay-infinity"
            target="_blank"
            class="opacity-1 absolute left-1/2 top-1/2
                        hidden rounded-xl bg-blue-500 px-5 py-3
                        font-bold
                        transition-colors duration-300
                        [transform:translateX(-50%)_translateY(-50%)] hover:bg-white
                        hover:text-blue-500 lg:block">View repository</a
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
