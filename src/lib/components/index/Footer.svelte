<script>
	import 'iconify-icon';
	import { onMount } from 'svelte';
	onMount(() => {
		import('lite-youtube-embed');
		import('lite-youtube-embed/src/lite-yt-embed.css');
	});
</script>

<div
	class="md:h-full pt-32
 w-11/12  m-auto flex flex-col gap-4 lg:flex-row items-stretch justify-evenly pb-4"
>
	<div class="h-full lg:w-1/3 bg-purple-900/50 order-2 lg:order-3 p-4 rounded-lg border border-white text-white">
		<!-- Links Here, 2 headings -->
		<div class="flex flex-col items-stretch justify-evenly p-4 pb-0">
			<div
				class="heading text-2xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white"
			>
				Sitemap
			</div>
			<a href="/" class="btn btn-ghost btn-sm text-lg hover:text-white">Home</a>
			<a href="/events" class="btn btn-sm  btn-ghost text-lg hover:text-white">Events</a>
			<a data-sveltekit-reload href="/team" class="btn btn-sm  btn-ghost text-lg hover:text-white">Team</a>
			<a href="/sponsors" class="btn btn-sm  btn-ghost text-lg hover:text-white">Sponsors</a>
			<a href="/gallery" data-sveltekit-reload class="btn btn-sm  btn-ghost text-lg hover:text-white"
				>Gallery</a
			>
			<a href="/register?select=true" class="btn btn-sm  btn-ghost text-lg hover:text-white">Register</a>
			<!-- <a href="/timeline" class="btn btn-sm  btn-ghost text-lg hover:text-white">Timeline</a> -->
			<!-- <a href="/guide" class="btn btn-sm  btn-ghost text-lg hover:text-white">Guidelines</a> -->
		</div>
		<div class="flex flex-col items-stretch justify-evenly p-4 pt-0">
			<div
				class="heading text-2xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white"
			>
				Legal
			</div>
			<a href="/legal/terms_and_conditions" class="btn btn-sm  btn-ghost text-lg hover:text-white"
				>T &amp; C</a
			>
			<a href="/legal/privacy_policy" class="btn btn-sm  btn-ghost text-lg hover:text-white"
				>Privacy Policy</a
			>
			<a href="/legal/contact_info" class="btn btn-sm  btn-ghost text-lg hover:text-white">Legal Contact</a>
		</div>
	</div>
	<div class="h-full lg:w-1/3  flex flex-col order-3 lg:order-2 rounded-lg border border-white">
		<div class="h-5/6 w-full bg-black/50">
			<iframe
				title="Google Map for GCOEN"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.525563997084!2d79.05785451517583!3d21.051661192371412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1674120640996!5m2!1sen!2sin"
				width="100%"
				height="100%"
				style="border:0;"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				class="h-full w-full z-[220] rounded-lg"
			/>
		</div>
		<div
			class="h-1/6 w-full bg-purple-900/50 flex flex-row items-center justify-evenly py-8 text-white"
		>
			<a
				href="mailto:adhyaaya.gcoen@gmail.com"
				class="email h-8 w-8 lg:h-12 lg:w-12 bg-sky-500 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
				><iconify-icon icon="mdi:email-outline" /></a
			>
			<a
				href="https://www.linkedin.com/company/adhyaaya/"
				class="linkedin h-8 w-8 lg:h-12 lg:w-12 bg-blue-500 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
				><iconify-icon icon="mdi:linkedin" /></a
			>
			<a
				href="https://instagram.com/adhyaaya.gcoen"
				class="instagram h-8 w-8 lg:h-12 lg:w-12 bg-purple-500 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
				><iconify-icon icon="mdi:instagram" /></a
			>
			<a
				href="https://www.youtube.com/@ADHYAAYAGCOEN"
				class="youtube h-8 w-8 lg:h-12 lg:w-12 bg-red-500 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
				><iconify-icon icon="mdi:youtube" /></a
			>
		</div>
	</div>
	<div class="h-full lg:w-1/3  order-1 lg:order-1 aspect-[16/9] rounded-lg border border-white">
		<!-- <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/YiVULH51pJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
		<lite-youtube videoid="YiVULH51pJA" playlabel="Adhyaaya'23 Coming Soon" class="h-full w-full rounded-lg" />
	</div>
</div>
