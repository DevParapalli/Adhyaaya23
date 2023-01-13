<script lang="ts">
	import {afterNavigate, goto as _goto} from '$app/navigation';
    import AdhyaayaLogoSolid from "$lib/assets/logo/solid.png"
	import { SOCIALS } from '$lib/data/socials';
    export let isMenuOpen = false;
    // export let isMenuOpen = true;
    export let nav_cb = () => {};
    afterNavigate(() => {
		// isMenuOpen=false;
	})
    function goto(path: string) {
        isMenuOpen = false;
        if (nav_cb) nav_cb();
        _goto(path);
    };
    let bgX = 0, bgY=0;
    function setBackgroundPosition(x=bgX, y=bgY) {
        bgX = x;
        bgY = y;
        console.log(bgX, bgY);
    }
</script>

<div class="fixed top-0 w-full min-h-16 bg-transparent z-[999] pointer-events-none flex flex-row px-4 md:px-10  items-center pt-[4vh]">
    <div on:click={() => {
        goto("/");
    }} class="logo bg-transparent w-20 md:w-36 pointer-events-auto py-1 px-2  rounded-lg transition-all duration-250 hover:scale-105 active:scale-95 cursor-pointer mr-auto"><img src="{AdhyaayaLogoSolid}" alt=""></div>
    
    <input id="menu-toggle" bind:checked={isMenuOpen} type="checkbox" class="hidden" >
    <label for="menu-toggle" class="menu-icon h-12 w-12 rounded-full pointer-events-auto relative transition-all duration-500 ease-in-out border  {isMenuOpen ? 'border-white':'border-white/60'}"><div class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500 " style="{isMenuOpen ? 'top: 50%;':'top: calc(50% - 4px);'} left: 50%; transform: translateX(-50%) translateY(-50%) {isMenuOpen ? 'rotate(-45deg)':'rotate(0deg)'} translateZ(0px);"></div><div class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500" style="{isMenuOpen ? 'top: 50%;':'top: calc(50% + 4px);'} left: 50%; transform: translateX(-50%) translateY(-50%) {isMenuOpen ? 'rotate(45deg)':'rotate(0deg)'} translateZ(0px);"></div></label>
</div>

<div class="menu-container {isMenuOpen} h-screen bg-[#190829] rounded-none  z-[120] absolute right-0 top-0 flex flex-col">
    {#if isMenuOpen}
    <div class="{isMenuOpen} header h-16 md:h-24 lg:h-36 w-full"></div>
    <div class=" {isMenuOpen} menu flex flex-col w-full h-full">
        <div class="menu-items w-fit flex flex-col justify-evenly h-full z-[150]">
            <div on:mouseover={()=>{setBackgroundPosition(bgX, 0)}} class="menu-item">Home</div>
            <div on:mouseover={()=>{setBackgroundPosition(bgX, -25)}} class="menu-item">Events</div>
            <div on:mouseover={()=>{setBackgroundPosition(bgX, -50)}} class="menu-item">Team</div>
            <div on:mouseover={()=>{setBackgroundPosition(bgX, -75)}} class="menu-item">Sponsors</div>
            <div on:mouseover={()=>{setBackgroundPosition(bgX, -100)}} class="menu-item">Gallery</div>
            <div on:mouseover={()=>{setBackgroundPosition(bgX, -125)}} class="menu-item-container flex flex-col md:flex-row gap-4 md:gap-16">
                <div on:mouseover={()=>{setBackgroundPosition(0, bgY)}} class="submenu-item text-base ">Privacy Policy</div>
                <div on:mouseover={()=>{setBackgroundPosition(-25, bgY)}} class="submenu-item text-base">Terms and Conditions</div>
                <div on:mouseover={()=>{setBackgroundPosition(-50, bgY)}} class="submenu-item text-base">Contact Info</div>
            </div>
        </div>
        <div style="--bgX: {bgX}%;--bgY: {bgY}%" class="menu-background-pattern mbp-0 z-[130]"></div>
        <div style="--bgX: {bgX}%;--bgY: {bgY}%" class="menu-background-pattern mbp-1 z-[131]"></div>
        <div style="--bgX: {bgX}%;--bgY: {bgY}%" class="menu-background-pattern mbp-2 z-[132]"></div>
    </div>
    <div class=" {isMenuOpen} social w-full flex items-center self-end justify-end py-6 pb-32 md:pb-6 mt-auto">
    {#each SOCIALS as social}
        <div class="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white mx-auto md:ml-0 md:mr-10 inline-flex items-center justify-center text-2xl md:text-3xl cursor-pointer {social.text} {social.bg} hover:scale-105 active:scale-95 active:opacity-90 transition-all duration-200 ease-in-out"><iconify-icon icon="{social.icon}" /></div>
    {/each}</div>
    {/if}
</div>



<style lang="postcss">
    .menu-container {
        @apply w-0 transition-all duration-500 ease-in-out
    }

    .menu-container.true {
        @apply w-screen
    }

    .false {
        @apply w-0;
    }
    * {
        @apply overflow-hidden;
    }

    .menu {
        @apply text-white;
    }
    
    .menu-items:hover > .menu-item {
        @apply hover:opacity-100 opacity-30;
    }

    .menu-item-container {
        @apply pl-[10vw] lg:pl-[15vw] opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap leading-4
    }

    .submenu-item {
        @apply transition-all duration-500 ease-in-out uppercase
    }

    .menu-items:hover > .menu-item-container > .submenu-item {
        @apply hover:opacity-100 opacity-30;
    }

    .menu-item {
        @apply text-5xl xl:text-7xl py-8 pl-[10vw] lg:pl-[15vw] opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap line-clamp-1 leading-4;
    }

    .menu-item:hover {
        @apply opacity-100;
    }

    .menu-background-pattern {
        height: 100vh;
        width: 100vw;

        background-image: radial-gradient(
            rgba(255, 255, 255, 0.1) 9%,
            transparent 9%
        );
        background-position: var(--bgX, 0%) var(--bgY, 0%);
        background-size: 12vmin 12vmin;
        position: absolute;
        top : 0;
        left : 0;
        @apply transition-all duration-1000 ease-in-out;
    }

    .menu-background-pattern.mbp-0 {
        background-image: radial-gradient(
            rgba(255, 0, 0, 0.25) 9%,
            transparent 9%
        );
        background-position: var(--bgX, 0%) calc(var(--bgY, 0%) + .1%);
    }

    .menu-background-pattern.mbp-1 {
        background-image: radial-gradient(
            rgba(0, 255, 0, 0.25) 9%,
            transparent 9%
        );
        background-position: var(--bgX, 0%) calc(var(--bgY, 0%) - .1%);
    }

    .menu-background-pattern.mbp-2 {
        background-image: radial-gradient(
            rgba(0, 0, 255, 0.25) 9%,
            transparent 9%
        );
        background-position: calc(var(--bgX, 0%) - .1%) var(--bgY, 0%);
    }

    .menu-items:hover ~ .menu-background-pattern {
        background-size: 11vmin 11vmin;
        opacity: 0.5;
    }
</style>