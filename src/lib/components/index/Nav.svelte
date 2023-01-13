<script>
    export let isTransparent = false;
    import AdhyaayaLogoSolid from "$lib/assets/logo/solid.png"
    let isMenuOpen = false;
</script>

<div class="fixed top-0 w-full min-h-16 bg-transparent z-10 pointer-events-none flex flex-row px-4 md:px-10 justify-between items-center pt-4  md:pt-10">
    <input id="menu-toggle" bind:checked={isMenuOpen} type="checkbox" class="hidden" >
    <div on:click={() => {
        goto("/");
    }} class="logo bg-transparent w-20 md:w-36 pointer-events-auto py-1 px-2  rounded-lg transition-all duration-250 hover:scale-105 active:scale-95 cursor-pointer "><img src="{AdhyaayaLogoSolid}" alt=""></div>
    <label for="menu-toggle" class="menu-icon bg-blue-500 h-12 w-12 rounded-full pointer-events-auto relative "><div class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500 " style="{isMenuOpen ? 'top: 50%;':'top: calc(50% - 4px);'} left: 50%; transform: translateX(-50%) translateY(-50%) {isMenuOpen ? 'rotate(45deg)':'rotate(0deg)'} translateZ(0px);"></div><div class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500" style="{isMenuOpen ? 'top: 50%;':'top: calc(50% + 4px);'} left: 50%; transform: translateX(-50%) translateY(-50%) {isMenuOpen ? 'rotate(-45deg)':'rotate(0deg)'} translateZ(0px);"></div></label>
</div>