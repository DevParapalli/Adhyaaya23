<script>
	import { enhance } from '$app/forms';
	let submit = false;
</script>

<div class="md:h-full flex flex-col md:flex-row justify-center items-center m-auto pt-12 2xl:pt-24 text-white">
	<div
		class="section md:w-1/3 w-5/6 h-5/6 md:bg-black/20 py-3 md:py-0 rounded-lg md:rounded-r-none md:border border-white"
	>
		<form
			on:submit={() => {
				submit = true;
				alert('Thank you for contacting us! We will get back to you soon.');
			}}
			class="p-2 md:p-10 h-full w-full flex flex-col items-center justify-evenly"
			method="POST"
			use:enhance
			action="/forms/contact_us"
		>
			<div class="relative z-0 mb-3 w-full group">
				<input
					type="text"
					name="name"
					id="name"
					class="nunu block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2  appearance-none  border-gray-400  focus:outline-none focus:ring-0  peer"
					placeholder=" "
					required
				/>
				<label
					for="name"
					class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Name</label
				>
			</div>
			<div class="relative z-0 mb-3 w-full group">
				<input
					type="email"
					name="email"
					id="email"
					class="nunu block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2  appearance-none  border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="email"
					class="peer-focus:font-medium absolute text-sm  text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Email</label
				>
			</div>
			<div class="relative z-0 mb-2 w-full group pb-10">
				<textarea
					name="message"
					id="message"
					class="nunu block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2  appearance-none  border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="message"
					class="peer-focus:font-medium absolute text-sm  text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Message</label
				>
			</div>
			<button
				disabled={submit}
				class="btn btn-outline btn-block bg-white/25 hover:bg-white/50 hover:scale-105 active:opacity-90 active:scale-95 "
				type="submit">Submit</button
			>
			<div
				class="info-container w-full flex-col items-center justify-center px-4 xl:px-10 hidden lg:flex pt-4"
			>
				<div class="card card-compact mx-auto bg-white/20 shadow-xl container">
					<div class="card-body">
						<h2 class="card-title nunu">For Technical Queries,</h2>
						<p class="nunu">Devansh Parapalli</p>
						<a
							href="https://api.whatsapp.com/send?phone=+918793150182&text=[AdhyaayaWebsite]%20Hello!"
							class="nunu inline-flex items-center gap-2"
							><iconify-icon icon="mdi:whatsapp" /> 8793150182</a
						>
						<a
							href="mailto:parapallidev@gmail.com"
							class="nunu inline-flex items-center gap-2 overflow-clip text-ellipsis"
							><iconify-icon icon="mdi:email-outline" />parapallidev@gmail.com</a
						>
					</div>
				</div>
			</div>
		</form>
	</div>
	<div
		id="center-console"
		class="section md:w-1/3 w-5/6 h-1/2 md:h-5/6 flex flex-col items-center justify-between py-3 md:py-0 rounded-lg rounded-l-none md:border-l-0 md:border md:border-white md:bg-black/20"
	>
		<h3 class="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-0 md:pt-10">Contact Us</h3>
		<div class="contact-info px-4 md:px-10 pt-4 flex flex-col gap-4 md:gap-8 items-start">
			<div class="card card-compact mx-auto bg-white/20 shadow-xl w-full">
				<div class="card-body ">
					<h2 class="card-title nunu">For Event-Related Queries,</h2>
					<p class="nunu">Malhar Paradkar</p>
					<a href="tel:+919096831236" class="inline-flex items-center gap-2 nunu"
						><iconify-icon icon="mdi:phone-outline" /> 9096831236</a
					>
					<a href="mailto:mcparadkar2003@gmail.com" class="inline-flex items-center gap-2 nunu"
						><iconify-icon icon="mdi:email-outline" />mcparadkar2003@gmail.com</a
					>
				</div>
			</div>
			<!-- <div class="text-6xl mx-auto">OR</div> -->
			<div class="card card-compact mx-auto bg-white/20 shadow-xl">
				<div class="card-body nunu">
					<h2 class="card-title nunu">For Other/General Queries,</h2>
					<p class="nunu">Shlok Suraj Tajne</p>
					<a href="tel:+918237050035" class="inline-flex items-center gap-2 nunu"
						><iconify-icon icon="mdi:phone-outline" /> 8237050035</a
					>
					<a href="mailto:shloktajne944@gmail.com" class="inline-flex items-center gap-2 nunu"
						><iconify-icon icon="mdi:email-outline" />shloktajne944@gmail.com</a
					>
				</div>
			</div>
		</div>
		<div class="contact-links" />
	</div>
</div>

<!-- <div class="section md:w-1/3 w-5/6 h-5/6 bg-black/20 py-8 md:py-0 rounded-lg border border-white">
	<iframe title="Google Map for GCOEN" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.525563997084!2d79.05785451517583!3d21.051661192371412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1674120640996!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="h-full w-full z-[220]"></iframe>
</div> -->
<style lang="postcss">
	.section {
		backdrop-filter: blur(2px);
	}

	.card-title {
		@apply line-clamp-1;
	}
</style>
