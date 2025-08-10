<script lang="ts">
	import { onMount } from "svelte";
	import Socials from "../socials/Socials.svelte";

	// Roles
	const typingInterval: number = 50;

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

			if (i === greeting.length - 1 && greetingPulse) {
				greetingPulse.classList.remove("animate-pulse");
				greetingPulse.classList.add("hidden");
			}

			await sleep(typingInterval);
		}
	}

	// after window finish loading, call animateRoles()
	onMount(async () => {
		await sleep(500);
		animateGreeting(greeting);
	});
</script>

<span>
	Good {greetingState}<span
		bind:this={greetingPulse}
		class="animate-pulse font-extralight">|</span
	></span
>
