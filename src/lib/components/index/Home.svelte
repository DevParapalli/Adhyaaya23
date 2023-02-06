<script>
    // import {hasScrolled} from '$lib/stores/UI';
	import { fade } from 'svelte/transition';

    export let scrollPos = 0;
</script> 
<div class="wrapper w-full h-full flex items-center text-left relative">
    <div class="main w-full ml-[8.33333333333333334%] md:ml-[16.66666666667%]">
        <div class="big-text w-5/6 md:w-7/12 text-4xl xl:text-5xl 2xl:text-7xl bg-clip-text text-transparent above tracking-tighter">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br /> sed do eiusmod tempor</div>
    </div>
    {#if scrollPos < 35}
    <div transition:fade class="scroll-text absolute left-[8.33333333333333334%] md:left-[16.66666666667%] bottom-0 text-sm">
        SCROLL TO EXPLORE
        <div class="scroll-line mt-6 md:mt-10 h-20  w-1 bg-red-500"></div>
    </div>
    {/if}
</div>

<!-- {@debug hasScrolled, $hasScrolled} -->

<style>

    .big-text {
    background-size: 200% 200%;
    background-position: 100% 100%;
    /* background-color: #FA8BFF; */
    /* background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%); */
    /* background-image: linear-gradient(45deg, #FA8BFF 0%, #ffffff 52%, #2BFF88 90%); */

    /* background-color: #74EBD5;
    background-image: linear-gradient(45deg, #74EBD5 0%, #9FACE6 100%); */

    /* background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 40%, #FFCC70 100%); */

background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);





    @apply transition-all duration-300 ease-in-out;
}

    .big-text:hover {
        background-position: 0% 0%;
    }

</style>