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

    interface Props {
        classList: string;
    }

    let { classList }: Props = $props();
</script>

<div class={`${classList} overflow-hidden`}>
    <!-- task bot -->
    <div class="task-widget absolute flex h-[99%] w-full flex-col">
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
                        class="my-2 w-full overflow-hidden rounded-md bg-[#404040] px-5 py-1
                                    overflow-ellipsis whitespace-nowrap text-white"
                    >
                        O {streamer} : {task}
                    </div>
                {/each}
            </div>
            <div class="scroll-element secondary absolute w-full px-1">
                {#each streamers as { streamer, task }}
                    <div
                        class="my-2 w-full overflow-hidden rounded-md bg-[#404040] px-5 py-1
                                    overflow-ellipsis whitespace-nowrap text-white"
                    >
                        O {streamer} : {task}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .background-widget.left {
        transform: translateX(calc(-50% + 25px)) translateY(calc(-50% + 5px))
            translateZ(-50px) rotateY(5deg);
    }

    .background-widget.right {
        transform: translateX(calc(-50%)) translateY(calc(-50% + 5px))
            translateZ(-50px) rotateY(-3deg);
    }

    .frontfacing-widget.left {
        transform: translateX(calc(-50% + 35px)) translateY(calc(-50%))
            translateZ(-50px) rotateY(5deg);
    }

    .frontfacing-widget.right {
        transform: translateX(calc(-50% - 10px)) translateY(-50%)
            translateZ(-50px) rotateY(-3deg);
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
