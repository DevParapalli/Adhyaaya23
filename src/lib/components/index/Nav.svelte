<script>
    export let isTransparent = false;
    import AdhyaayaLogoSolid from "$lib/assets/logo/solid.png"
</script>

<div class="fixed top-0 w-full min-h-16 bg-transparent z-10 pointer-events-none flex flex-row px-4 md:px-10 justify-between items-center pt-4  md:pt-10">
    <div on:click={() => {
        goto("/");
    }} class="logo bg-transparent w-20 md:w-36 pointer-events-auto py-1 px-2  rounded-lg transition-all duration-250 hover:scale-105 active:scale-95 cursor-pointer"><img src="{AdhyaayaLogoSolid}" alt=""></div>
    <div class="menu-icon bg-blue-500 h-8 w-8 pointer-events-auto "><div class="h-1 w-4 bg-white"></div><div class="h-1 w-4 bg-white"></div></div>
</div>