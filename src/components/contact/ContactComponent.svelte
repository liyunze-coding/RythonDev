<script lang="ts">
    import Socials from "../socials/Socials.svelte";
</script>

<div class="relative flex h-fit w-full flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center">
        <div
            id="title"
            class="animate-gradient mb-3 text-center text-3xl font-bold"
        >
            Get in Touch with me!
        </div>
        <div class="mb-10 px-5 text-center text-lg">
            I'm always open to new opportunities and collaborations!
        </div>

        <a
            class="flex flex-row items-center justify-center rounded-xl border-2 border-blue-300 px-5 py-5 text-center text-blue-300 transition-colors duration-300 ease-in-out hover:bg-blue-300 hover:text-black"
            href="mailto:rythondev@gmail.com"
            ><span class="mr-2 text-3xl">&#9993;</span> Send me an email</a
        >

        <div class="flex flex-row py-10 text-white">
            <Socials />
        </div>
    </div>
</div>

<style>
    #title {
        background: linear-gradient(
            90deg,
            #85e6c5 0%,
            #a084e8 45%,
            #33bbc5 100%
        );

        background-size: 300%;

        background-clip: text;
        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;
    }
</style>
