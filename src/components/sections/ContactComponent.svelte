<script lang="ts">
    import Socials from "../elements/Socials.svelte";
</script>

<div class="w-full h-fit flex flex-col justify-center items-center relative">
    <div class="flex flex-col justify-center items-center">
        <div
            id="title"
            class="animate-gradient text-3xl text-center font-bold mb-3"
        >
            Get in Touch with me!
        </div>
        <div class="text-lg text-center mb-10 px-5">
            I'm always open to new opportunities and collaborations!
        </div>

        <a
            class="text-center flex flex-row justify-center items-center border-2 border-blue-300 text-blue-300 px-5 py-5 hover:bg-blue-300 hover:text-black transition-colors duration-300 ease-in-out rounded-xl"
            href="mailto:rythondev@gmail.com"
            ><span class="text-3xl mr-2">&#9993;</span> Send me an email</a
        >

        <div class="text-white flex flex-row py-10">
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
