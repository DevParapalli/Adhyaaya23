<script lang="ts">
	let team_members = [1, 2, 3, 4, 5];
</script>

<form class="registration-form container max-w-3xl mx-auto px-6 mt-10">
	<div class="grid md:grid-cols-2 md:gap-6">
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="first_name"
				id="first_name"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="first_name"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>First name</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="last_name"
				id="last_name"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="last_name"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Last name</label
			>
		</div>
	</div>
	<div class="grid md:grid-cols-2 md:gap-6">
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="tel"
				minlength="10"
				maxlength="10"
				name="phone"
				id="phone"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="phone"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Phone number (10-digits)</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="email"
				name="email"
				id="email"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="email"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Email address</label
			>
		</div>
	</div>
	<div class="grid md:grid-cols-3 md:gap-4">
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="institute"
				id="institute"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="institute"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>College/School</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="email"
				name="email"
				id="email"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="email"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Year/Grade</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="email"
				name="email"
				id="email"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
			/>
			<label
				for="email"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Branch / Specialization</label
			>
		</div>
	</div>

	<h3 class="mb-6 text-base font-medium text-gray-900 dark:text-gray-400">How many additional members are in your team? (ie. excluding you)</h3>
	<ul class="flex flex-row justify-between gap-6 w-full mb-6 flex-wrap">
		{#if team_members.includes(1)}
		<li class="w-full max-w-[5rem]">
			<input type="radio" id="additional-1" name="members" value="additional-1" class="hidden peer" required>
			<label for="additional-1" class="inline-flex justify-center items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
				<div class="block">
					<div class="w-full text-sm font-bold">1</div>
				</div>
			</label>
		</li>
		{/if}
		{#if team_members.includes(2)}
		<li class="w-full  max-w-[5rem]">
			<input type="radio" id="additional-2" name="members" value="additional-2" class="hidden peer" required>
			<label for="additional-2" class="inline-flex justify-center items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
				<div class="block">
					<div class="w-full text-sm font-bold">2</div>
				</div>
			</label>
		</li>
		{/if}
		{#if team_members.includes(3)}
		<li class="w-full max-w-[5rem]">
			<input type="radio" id="additional-3" name="members" value="additional-3" class="hidden peer" required>
			<label for="additional-3" class="inline-flex justify-center items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
				<div class="block">
					<div class="w-full text-sm font-bold">3</div>
				</div>
			</label>
		</li>
		{/if}
		{#if team_members.includes(4)}
		<li class="w-full max-w-[5rem]">
			<input type="radio" id="additional-4" name="members" value="additional-4" class="hidden peer" required>
			<label for="additional-4" class="inline-flex justify-center items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
				<div class="block">
					<div class="w-full text-sm font-bold">4</div>
				</div>
			</label>
		</li>
		{/if}
		{#if team_members.includes(5)}
		<li class="w-full max-w-[5rem]">
			<input type="radio" id="additional-5" name="members" value="additional-5" class="hidden peer" required>
			<label for="additional-5" class="inline-flex justify-center items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
				<div class="block">
					<div class="w-full text-sm font-bold">5</div>
				</div>
			</label>
		</li>
		{/if}
	</ul>
	<h4 class="mb-2 text-base font-medium text-gray-900 dark:text-gray-400">Please enter their details below.</h4>
	{#each Array.from(Array(team_members[3]).keys(), (_, index) => index+1) as item}
	<div class="grid md:grid-cols-3 md:gap-4">
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="institute"
				id="institute"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="institute"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Member {item} Name</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="email"
				name="email"
				id="email"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="email"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Member {item} Email</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="email"
				name="email"
				id="email"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
			/>
			<label
				for="email"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Member {item} Phone</label
			>
		</div>
	</div>
	{/each}

	<button
		type="submit"
		class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Submit</button
	>
</form>
