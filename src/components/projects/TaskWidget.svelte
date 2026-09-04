<script lang="ts">
	type Task = {
		name: string;
		completed: boolean;
	};
	type UserListItem = {
		streamer: string;
		tasks: Array<Task>;
	};
	const streamers: Array<UserListItem> = [
		{
			streamer: "4l1c3_0",
			tasks: [{ name: "mental breakdance", completed: true }],
		},
		{
			streamer: "arcanexviii",
			tasks: [{ name: "babysit", completed: false }],
		},
		{
			streamer: "B1obaBoba",
			tasks: [{ name: "Move to Norway", completed: false }],
		},
		{
			streamer: "Bubxmicn",
			tasks: [
				{ name: "drive a truck", completed: false },
				{
					name: "get Masters in Public Health degree",
					completed: false,
				},
			],
		},
		{
			streamer: "bunnie_bytes",
			tasks: [{ name: "Work as a software developer", completed: true }],
		},
		{
			streamer: "charliosaurus",
			tasks: [
				{ name: "praise the lord", completed: true },
				{ name: "graduate from university", completed: true },
			],
		},
		{
			streamer: "clari_miu",
			tasks: [{ name: "be sweaty", completed: false }],
		},
		{
			streamer: "cloudydayzzz",
			tasks: [{ name: "stay up at night", completed: false }],
		},
		{
			streamer: "DATJI_",
			tasks: [{ name: "IRL KBBQ stream", completed: true }],
		},
		{
			streamer: "Ellyskey",
			tasks: [{ name: "sell YOUthversity merch", completed: false }],
		},
		{
			streamer: "HarryIsTrying",
			tasks: [{ name: "be a strategy consultant", completed: true }],
		},
		{
			streamer: "itsbrandonut",
			tasks: [{ name: "cowork then league", completed: false }],
		},
		{
			streamer: "lala_xitlali",
			tasks: [{ name: "design fashionable clothes", completed: false }],
		},
		{
			streamer: "lyricalclove",
			tasks: [{ name: "teach English", completed: false }],
		},
		{
			streamer: "nachoburrit0",
			tasks: [{ name: "update spreadsheets", completed: false }],
		},
		{
			streamer: "nihn_",
			tasks: [{ name: "Release new Lo-fi music", completed: false }],
		},
		{
			streamer: "lanezzz_",
			tasks: [{ name: "be a supermodel", completed: false }],
		},
		{
			streamer: "PineappleEffect",
			tasks: [{ name: "edit video", completed: false }],
		},
		{
			streamer: "pinsaregood",
			tasks: [{ name: "go on another hiatus", completed: false }],
		},
		{
			streamer: "potatoing_2d",
			tasks: [{ name: "be a potato", completed: false }],
		},
		{
			streamer: "lilylikesrocks",
			tasks: [{ name: "learn about rocks", completed: false }],
		},
		{
			streamer: "RythonDev",
			tasks: [
				{ name: "Graduate with Bachelors degree", completed: true },
				{ name: "Masters in Teaching (secondary)", completed: false },
			],
		},
		{
			streamer: "snowxcone",
			tasks: [{ name: "do more leetcode", completed: false }],
		},
		{
			streamer: "studypaws",
			tasks: [{ name: "be a vet", completed: false }],
		},
		{
			streamer: "sunfflawer",
			tasks: [{ name: "be a sunflower", completed: false }],
		},
		{
			streamer: "Supernaturalwriter",
			tasks: [{ name: "hit the gym", completed: false }],
		},
		{
			streamer: "ThePainfulPhD",
			tasks: [{ name: "get PhD", completed: true }],
		},
		{
			streamer: "xeno_hiraeth",
			tasks: [{ name: "finished med school", completed: true }],
		},
	];

	interface Props {
		position?: "left" | "right";
	}

	let { position = "right" }: Props = $props();
	const side = $derived(position === "left" ? "left" : "right");
</script>

{#snippet widgetLayer(layerClass: string, extraClass: string)}
	<div
		class={`widget absolute top-1/2 left-1/2 h-full w-full overflow-hidden [perspective:200px] ${layerClass} ${side} ${extraClass}`}
	>
		<div
			class="task-widget absolute flex h-full min-h-[50vh] w-full flex-col"
		>
			<div
				class="task-widget-header flex w-full flex-row items-center justify-between
                    rounded-md
                    border-3 border-solid
                    border-gray-600 bg-black
                    px-5 py-2 font-['Fredoka',_sans-serif] text-sm text-white
                    lg:text-xl"
			>
				<span>Hover here!</span>
				<span>0/100+</span>
			</div>
			<div
				class="scroll-parent relative h-[82%] overflow-hidden rounded-br-2xl rounded-bl-2xl font-['Fredoka',_sans-serif] lg:min-h-0"
			>
				<div class="scroll-element primary absolute w-full px-1">
					{#each streamers as { streamer, tasks }}
						<div
							class="task-widget-item my-2 w-full overflow-hidden rounded-md bg-[#404040] px-5 py-1
                                    text-sm overflow-ellipsis whitespace-nowrap text-white lg:text-base"
						>
							{streamer} :
							<ol class="list-inside list-decimal">
								{#each tasks as task}
									<li
										class={task.completed
											? "task-completed text-gray-400 line-through"
											: "task-incomplete text-white"}
									>
										{task.name}
									</li>
								{/each}
							</ol>
						</div>
					{/each}
				</div>
				<div class="scroll-element secondary absolute w-full px-1">
					{#each streamers as { streamer, tasks }}
						<div
							class="task-widget-item my-2 w-full overflow-hidden rounded-md bg-[#404040] px-5 py-1
                                    text-sm overflow-ellipsis whitespace-nowrap text-white lg:text-base"
						>
							{streamer} :
							<ol class="list-inside list-decimal">
								{#each tasks as task}
									<li
										class={task.completed
											? "task-completed line-through"
											: "task-incomplete"}
									>
										{task.name}
									</li>
								{/each}
							</ol>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/snippet}

{@render widgetLayer("background-widget", "opacity-40 brightness-75")}
{@render widgetLayer("frontfacing-widget", "opacity-100")}

<style>
	:global(html[data-theme="light"]) .task-widget-header {
		border-color: #cbd5e1;
		background-color: #f8fafc;
		color: #0f172a;
	}

	:global(html[data-theme="light"]) .task-widget-item {
		background-color: #e2e8f0;
		color: #0f172a;
	}

	:global(html[data-theme="light"]) .task-incomplete {
		color: #0f172a;
	}

	:global(html[data-theme="light"]) .task-completed {
		color: #64748b;
	}

	.background-widget.left {
		transform: translate(-50%, -50%);
	}

	.background-widget.right {
		transform: translate(-50%, -50%);
	}

	.frontfacing-widget.left {
		transform: translate(-50%, -50%);
	}

	.frontfacing-widget.right {
		transform: translate(-50%, -50%);
	}

	@media (min-width: 426px) {
		.background-widget.left {
			transform: translateX(calc(-50% + 25px))
				translateY(calc(-50% + 5px)) translateZ(-50px) rotateY(5deg);
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
			transform: translateY(-1890px);
		}
	}

	@keyframes secondary {
		from {
			transform: translateY(1890px);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
