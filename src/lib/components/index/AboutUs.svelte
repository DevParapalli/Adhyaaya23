<script>
    import logo from '$lib/assets/logo/solid-resize.webp';
    import gcoen from '$lib/assets/logo/gcoen-knockout-resize.webp';
</script>

<div class="about-us-container md:w-5/6 flex flex-col items-center justify-evenly md:py-10 mx-auto px-2">
    <div class="title h-1/6 pb-10"><span class="text-4xl lg:text-6xl">About Us</span></div>
    <div class="content flex flex-row w-full h-4/6">
    <div class="our-college w-1/2 hidden xl:flex flex-col items-center justify-evenly h-auto text-justify bg-white/20 backdrop-blur-sm rounded-lg border border-white lg:border-r-0 lg:rounded-r-none p-4 gap-2">
        <img loading="lazy" src="{gcoen}" class="h-28" height="112" width="355" alt="">
        <p class="max-w-lg text-lg nunu">Government College of Engineering, Nagpur is a premier engineering institute established in 2016, affiliated to Rashtrasant Tukadoji Maharaj Nagpur University and mentored by Visvesvaraya National Institute of Technology. The campus is situated at New Khapri, Nagpur, providing a top-notch engineering education to its students.</p>
        <a data-sveltekit-reload href="https://gcoen.ac.in/" target="_blank" rel="noreferrer" class="college-button relative bg-gradient-to-bl from-sky-400 via-rose-400 to-lime-400 text-white text-lg py-3 px-5 rounded-lg inline-flex items-center uppercase font-medium gap-2 hover:scale-110 active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-4">Our College <iconify-icon icon="mdi:arrow-right"></iconify-icon></a>
    </div>
    <div class="us w-full xl:w-1/2 flex flex-col items-center justify-evenly h-auto text-justify bg-black/40 backdrop-blur-sm rounded-lg border border-white lg:rounded-l-none p-6 gap-2">
        <img loading="lazy" src="{logo}" class="h-28" height="112" width="202" alt="">
        <p class="max-w-lg md:text-lg nunu">Adhyaaya is a premier technical festival, hosting a variety of events for students and professionals to showcase their talents in technology and the sciences. The annual symposium, organized by the Government College of Engineering in Nagpur, features lectures from renowned experts and attracts participants from across the region. Join us at Adhyaaya for a journey of innovation and creativity.</p>
        <a data-sveltekit-reload href="/team" class="team-button relative px-5 py-3 text-xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-8">Meet The Team <iconify-icon icon="mdi:arrow-right"></a>
    </div>
    </div>
    <div class="gallery-button flex flex-col items-center justify-evenly text-justify pt-8">
        <a data-sveltekit-reload href="/gallery" class="gallery-button uppercase relative bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500 text-white text-xl py-5 px-8 rounded-lg inline-flex items-center gap-2 hover:scale-110 active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out">
            View our past <iconify-icon icon="mdi:arrow-right"></iconify-icon>
        </a>
    </div>
</div>


<style>
    .team-button::before {
        content: '';
        z-index: -1;
        @apply absolute h-full w-full rounded-lg blur-lg opacity-50 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 -translate-x-[7.5%]
    }

    
    
</style>