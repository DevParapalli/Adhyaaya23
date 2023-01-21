<script>
    import logo from '$lib/assets/logo/solid.png';
</script>

<div class="about-us-container h-full w-full flex flex-col items-center p-10">
    <div class="title h-1/6 pt-10"><span class="text-6xl">About Us</span></div>
    <div class="content flex flex-row w-full h-3/6">
    <div class="our-college w-1/2 hidden lg:flex flex-col items-center justify-evenly h-full text-justify">
        <img src="" alt="">
        <p class="max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus asperiores vitae nulla atque quasi ratione consectetur temporibus illum rerum, velit cum expedita quidem porro maxime sit, a debitis soluta.</p>
        <button>Our College</button>
    </div>
    <div class="us w-full lg:w-1/2 flex flex-col items-center justify-evenly h-full text-justify">
        <img src="{logo}" class="h-28" alt="">
        <p class="max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloribus unde libero accusantium blanditiis exercitationem molestiae explicabo nesciunt quod fuga. Provident eveniet beatae quibusdam repudiandae qui praesentium, nulla sed magni.</p>
        <a href="/team" class="team-button relative px-5 py-3 text-xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-lg inline-flex items-center uppercase gap-2">Meet The Team <iconify-icon icon="mdi:arrow-right"></a>
    </div>
    </div>
    <div class="gallery-button flex flex-col items-center justify-evenly text-justify pt-8">
        <a href="/gallery" class="gallery-button relative bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500 text-white text-lg py-3 px-5 rounded-lg inline-flex gap-2">
            <span>A short view back to the past...</span>
        </a>
    </div>
</div>


<style>
    .team-button::before {
        content: '';
        z-index: -1;
        @apply absolute h-full w-full rounded-lg blur-xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 
    }

    
</style>