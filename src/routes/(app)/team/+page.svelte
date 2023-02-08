<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import type Sketch from '$lib/components/DNA/Sketch';
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';

	let sketch: Sketch;
	let scrollY: number, headingHeight: number, containerHeight: number, scrollHeight: number;

	let container: HTMLDivElement, heading: HTMLDivElement;
	function scrollMapping(percentScroll: number) {
		const positionRange = 8 - -1;
		return percentScroll * positionRange + -1;
	}
	$: {
		if (sketch) {
			scrollHeight = containerHeight * 18 + headingHeight * 10;
			sketch.camera.position.set(0, scrollMapping(scrollY / scrollHeight), 5);
			sketch.duration += 0.17;
		}
	}
	onMount(async () => {
		const bg = await import('$lib/components/DNA/Sketch');
		const canvas = document.getElementById('dna-bg') ?? document.createElement('canvas');
		sketch = new bg.default(canvas);
		sketch.camera.position.set(-2, -1, 5);
		sketch.loadObjects();
		// duration.set(2.5);
		// setTimeout(() => {
		// 	duration.set(0);
		// }, 2000);
		// function animate() {
		// 	if (sketch) {
		// 		sketch.duration += $duration;
		// 	}
		// 	requestAnimationFrame(animate);
		// }
		// animate();
		// calculate scroll height :
		containerHeight = container.scrollHeight;
		headingHeight = heading.scrollHeight;
	});


	// Image Imports
	import nikhil_deshpande_photo from '$lib/assets/team/advisors/nikhil-deshpande-compressed.webp'; 
	import ujjwal_gupta_photo from '$lib/assets/team/advisors/ujjwal-gupta-compressed.webp';
	import laksh_bahl_photo from '$lib/assets/team/advisors/laksh-bahl-compressed.webp';
	import yash_bhagat_photo from '$lib/assets/team/advisors/yash-bhagat-compressed.webp';
	import arya_mahashabde_photo from '$lib/assets/team/advisors/arya-mahashabde-compressed.webp';
	import shlok_tajne_photo from '$lib/assets/team/coordinators/shlok-tajne-compressed.webp';
	import swarali_prayagi_photo from '$lib/assets/team/coordinators/swarali-prayagi-compressed.webp';
	import mayank_masram_photo from '$lib/assets/team/coordinators/mayank-masram-compressed.webp';
	import aditya_tete_photo from '$lib/assets/team/coordinators/aditya-tete-compressed.webp';
	import malhar_paradkar_photo from '$lib/assets/team/coordinators/malhar-paradkar-compressed.webp';
	import dev_parapalli_photo from '$lib/assets/team/technical/dev-parapalli-compressed.webp';
	import dovesh_aglawe_photo from '$lib/assets/team/technical/dovesh-aglawe-compressed.webp';
	import aditya_deshmukh_photo from '$lib/assets/team/technical/aditya-deshmukh-compressed.webp';
	import shiwang_pandey_photo from '$lib/assets/team/technical/shiwang-pandey-compressed.webp';
	import tushar_meshram_photo from '$lib/assets/team/technical/tushar-meshram-compressed.webp';
	import harsh_bangre_photo from '$lib/assets/team/technical/harsh-bangre-compressed.webp';
	import kaustubh_warade_photo from '$lib/assets/team/technical/kaustubh-warade-compressed.webp';
	import sahil_brahme_photo from '$lib/assets/team/organisation/sahil-brahme-compressed.webp';
	import parth_trimare_photo from '$lib/assets/team/organisation/parth-trimare-compressed.webp'; 
	import shubhlak_kanpate_photo from '$lib/assets/team/organisation/shubhlak-kanpate-compressed.webp';
	import yash_raut_photo from '$lib/assets/team/organisation/yash-raut-compressed.webp';
	import nandini_thaware_photo from '$lib/assets/team/organisation/nandini-thaware-compressed.webp';
	import aastha_dongare_photo from '$lib/assets/team/organisation/aastha-dongare-compressed.webp';
	import urvashi_gour_photo from '$lib/assets/team/organisation/urvashi-gour-compressed.webp';
	import nihal_gaikwad_photo from '$lib/assets/team/sponsorship/nihal-gaikwad-compressed.webp';
	import atharva_mande_photo from '$lib/assets/team/sponsorship/atharva-mande-compressed.webp';
	import divija_pawar_photo from '$lib/assets/team/sponsorship/divija-pawar-compressed.webp';
	import anish_behere_photo from '$lib/assets/team/sponsorship/anish-behere-compressed.webp';
	import yash_khandelwal_photo from '$lib/assets/team/sponsorship/yash-khandelwal-compressed.webp';
	import pranav_patle_photo from '$lib/assets/team/publicity/pranav-patle-compressed.webp';
	import pranav_supare_photo from '$lib/assets/team/publicity/pranav-supare-compressed.webp';
	import vedant_gotmare_photo from '$lib/assets/team/publicity/vedant-gotmare-compressed.webp';
	import vedant_nimgade_photo from '$lib/assets/team/publicity/vedant-nimgade-compressed.webp';
	import rugved_yadalwar_photo from '$lib/assets/team/publicity/rugved-yadalwar-compressed.webp';
	import aadil_burani_photo from '$lib/assets/team/publicity/aadil-burani-compressed.webp';
	import priya_nandanwar_photo from '$lib/assets/team/accounting/priya-nandanwar-compressed.webp';
	import ninad_burande_photo from '$lib/assets/team/accounting/ninad-burande-compressed.webp';
	import kashish_budhwani_photo from '$lib/assets/team/accounting/kashish-budhwani-compressed.webp';
	import vidhan_rajput_photo from '$lib/assets/team/accounting/vidhan-rajput-compressed.webp';
	import rushikesh_potpite_photo from '$lib/assets/team/accounting/rushikesh-potpite-compressed.webp';
	import aishwarya_dongare_photo from '$lib/assets/team/accounting/aishwarya-dongare-compressed.webp';
	import vikas_yadav_photo from '$lib/assets/team/accounting/vikas-yadav-compressed.webp';
	import kashish_budwani_photo from '$lib/assets/team/content-writing/kashish-budwani-compressed.webp';
	import akanksh_bodakhe_photo from '$lib/assets/team/creativity-and-decoration/akanksh-bodakhe-compressed.webp';
	import bhumika_hedaoo_photo from '$lib/assets/team/creativity-and-decoration/bhumika-hedaoo-compressed.webp';
	import ketaki_mahalle_photo from '$lib/assets/team/creativity-and-decoration/ketaki-mahalle-compressed.webp';
	import siddhi_barde_photo from '$lib/assets/team/creativity-and-decoration/siddhi-barde-compressed.webp';
	import pratik_bagdi_photo from '$lib/assets/team/creativity-and-decoration/pratik-bagdi-compressed.webp';
	import jay_bele_photo from '$lib/assets/team/creativity-and-decoration/jay-bele-compressed.webp';
	import aditya_bangar_photo from '$lib/assets/team/creativity-and-decoration/aditya-bangar-compressed.webp';
	import sai_deodhe_photo from '$lib/assets/team/hospitality-and-discipline/sai-deodhe-compressed.webp';
	import chetna_salve_photo from '$lib/assets/team/hospitality-and-discipline/chetna-salve-compressed.webp';
	import sakshi_nimje_photo from '$lib/assets/team/hospitality-and-discipline/sakshi-nimje-compressed.webp';
	import manjeet_naik_photo from '$lib/assets/team/hospitality-and-discipline/manjeet-naik-compressed.webp';
	import sahil_marbate_photo from '$lib/assets/team/hospitality-and-discipline/sahil-marbate-compressed.webp';
	import shardul_rathod_photo from '$lib/assets/team/hospitality-and-discipline/shardul-rathod-compressed.webp';
	import mukti_purohit_photo from '$lib/assets/team/hospitality-and-discipline/mukti-purohit-compressed.webp';
	import lokesh_shelke_photo from '$lib/assets/team/hospitality-and-discipline/lokesh-shelke-compressed.webp';

</script>

<svelte:window bind:scrollY />

<svelte:head>
    <title>Meet Our Team | Adhyaaya'23</title>
</svelte:head>

<!-- <Nav /> -->

<div id="dna-bg" class="fixed h-screen w-screen -z-50 bg-black opacity-75" />

<div bind:this={heading} class="flex_title !mt-0 pt-20">Advisors</div>
<div bind:this={container} class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${nikhil_deshpande_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Nikhil Deshpande<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${ujjwal_gupta_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Ujjwal Gupta<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${laksh_bahl_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Laksh Bahl<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${yash_bhagat_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Yash Bhagat<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:yashbhagat6601@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/_anthony_edward_stark_">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/yash-bhagat-195a45264">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${arya_mahashabde_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Arya Mahashabde<span class="flag" /></h2>
			<h3 class="date">Advisor</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:mahashabde.arya@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/arya1608">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/arya-mahashabde-582665228">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>

<div class="flex_title">Coordinators</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${shlok_tajne_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Shlok Tajne<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${swarali_prayagi_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Swarali Prayagi<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:swaraliprayagi1908@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/swaraliprayagi">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/swarali-prayagi-65b400229">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${mayank_masram_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Mayank Masram<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aditya_tete_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aditya Tete<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${malhar_paradkar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Malhar Paradkar<span class="flag" /></h2>
			<h3 class="date">Coordinator</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:mcparadkar2003@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/thelostmanintheworld">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/malhar-paradkar-97a88b230">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>

<div class="flex_title">Technical Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${dev_parapalli_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Dev Parapalli<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:parapallidev@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/dev_parapalli">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/devparapalli/">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${dovesh_aglawe_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Dovesh Aglawe<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:dveshaglawe27@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.instagram.com/dovesh.aglawe.2004">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aditya_deshmukh_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aditya Deshmukh<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:adityadeshmukh173@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/_wsup_shahu_">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/aditya-deshmukh-05204922a">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${shiwang_pandey_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Shiwang Pandey<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:shiwangpande1@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.instagram.com/__shiwang/">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/shiwang-pandey/">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${tushar_meshram_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Tushar Meshram<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:tusharmeshram608@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${harsh_bangre_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Harsh Bangre<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${kaustubh_warade_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Kaustubh Warade<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:kaustubhwarade73@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/kaustubh_in_space">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/kaustubh-warade-500010229">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="flex_title">Organisation Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${sahil_brahme_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Sahil Brahme<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:sahilbrahme@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${parth_trimare_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Parth Trimare<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${shubhlak_kanpate_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Shubhlak Kanpate<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${yash_raut_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Yash Raut<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:yraut2802@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.instagram.com/yashraut28">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/yash-raut-19bab7247">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${nandini_thaware_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Nandini Thaware<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:nandinithaware0@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/_nandini_thaware_">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/nandini-thaware-4b5b38230">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aastha_dongare_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aastha Dongare<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:aasthadongare05@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/aastha_1219">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/aastha-dongare-737304261">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${urvashi_gour_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Urvashi Gour<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="flex_title">Sponsorship Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${nihal_gaikwad_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Nihal Gaikwad<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:gaikwadnihal26@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/___.nihal.____">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/nihal-gaikwad-612902230">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${atharva_mande_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Atharva Mande<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:atharvamande@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/atharva_mande">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/atharva-mande-1a2693255">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${divija_pawar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Divija Pawar<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${anish_behere_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Anish Behere<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${yash_khandelwal_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Yash Khandelwal<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:ymkhandelwal8@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/yash_khandelwal08">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/yash-khandelwal-470907252">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="flex_title">Publicity Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${pranav_patle_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Pranav Patle<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:pranavpatle111@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/03_pranav_">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/pranav-patle-b8955122b">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${pranav_supare_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Pranav Supare<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${vedant_gotmare_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Vedant Gotmare<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${vedant_nimgade_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Vedant Nimgade<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${rugved_yadalwar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Rugved Yadalwar<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aadil_burani_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aadil Burani<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="flex_title">Accounting Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${priya_nandanwar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Priya Nandanwar<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:priyanandanwar81@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/priyaaa_013">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/priyanandanwar">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${ninad_burande_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Ninad Burande<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:burandenb9403@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/_https.n1nad">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/ninad-burande-137354230">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${kashish_budhwani_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Kashish Budhwani<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${vidhan_rajput_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Vidhan Rajput<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:vidhanrajput2@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/vidhanrajput2">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/vidhan-singh-rajput-b4169a229">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${rushikesh_potpite_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Rushikesh Potpite<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:rushikeshpotpite@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/rushikesh_potpite03">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/rushikesh-potpite-910a42229">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aishwarya_dongare_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aishwarya Dongare<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${vikas_yadav_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Vikas Yadav<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="flex_title">Content Writing Team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${kashish_budwani_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Kashish Budwani<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${vikas_yadav_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Vikas Yadav<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${divija_pawar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Divija Pawar<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${nandini_thaware_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Nandini Thaware<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:nandinithaware0@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/_nandini_thaware_">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/nandini-thaware-4b5b38230">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>

<div class="flex_title">Creativity and Decoration team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${akanksh_bodakhe_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Akanksh Bodakhe<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${bhumika_hedaoo_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Bhumika Hedaoo<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${ketaki_mahalle_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Ketaki Mahalle<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:ketakimahalle14@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/_.ketaki._14">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/ketaki-mahalle-116979257">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${siddhi_barde_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Siddhi Barde<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:siddhibarde26@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/siddhibarde_26">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/siddhi-barde-732348248">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${pratik_bagdi_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Pratik Bagdi<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:pratikbagdi21@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.instagram.com/impratikbagdi/">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/pratik-bagdi-b9915a229">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${jay_bele_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Jay Bele<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:belejay38@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.instagram.com/belejay38/">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/jay-bele-9793b4241">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${aditya_bangar_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Aditya Bangar<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:bangaraditya45@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/bangaraditya9545">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/aditya-bangar-84357b230">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>

<div class="flex_title">Hospitality And Discipline team</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${sai_deodhe_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Sai Deodhe<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${chetna_salve_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Chetna Salve<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:chetnasalve00@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/chetna__salve">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/chetna-salve-2951a8249">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${sakshi_nimje_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Sakshi Nimje<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:sakshinimje2003@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/warrior__princesss">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/sakshi-nimje-22a8a1250">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${manjeet_naik_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Manjeet Naik<span class="flag" /></h2>
			<h3 class="date">Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>
<div class="my-cont_flex">
	<article class="my-cont">
		<div style:--img={`url(${sahil_marbate_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Sahil Marbate<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:sahilmarbate7@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/_talkwithsahil_">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://www.linkedin.com/in/sahil-marbate-5b9248251">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${shardul_rathod_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Shardul Rathod<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${mukti_purohit_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Mukti Purohit<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
	<article class="my-cont">
		<div style:--img={`url(${lokesh_shelke_photo})`} class="thumb" />
		<div class="infos">
			<h2 class="title">Lokesh Shelke<span class="flag" /></h2>
			<h3 class="date">Co Head</h3>
			<h3 class="seats"><!--status--></h3>
			<p class="txt"><!-- data--></p>
			<div class="details">
				<a rel="external noopener noreferrer nofollow" target="_blank" href="mailto:lokeshshelke19@gmail.com">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#EA4335] bg-clip-text"
						icon="mdi:email-outline"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="https://instagram.com/lokesh_1908_?igshid=ZDdkNTZiNTM=">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#4c68d7] bg-clip-text"
						icon="mdi:instagram"
					/>
				</a>
				<a rel="external noopener noreferrer nofollow" target="_blank" href="">
					<iconify-icon
						class="text-3xl lg:text-5xl text-[#006192] bg-clip-text"
						icon="mdi:linkedin"
					/>
				</a>
			</div>
		</div>
	</article>
</div>

<style>
	/* @font-face {
		font-family: 'Grotesque';
		src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Regular.eot'),
			url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Regular.ttf'),
			url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Regular.woff');
		font-weight: normal;
	}
	@font-face {
		font-family: 'Grotesque Black';
		src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Black.eot'),
			url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Black.ttf'),
			url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Black.woff');
		font-weight: bold;
	}
	@font-face {
		font-family: 'title';
		src: url(Sofia\ Pro\ SemiBold.ttf);
	}
	* {
		box-sizing: border-box;
	}

	html,
	body {
		font-size: 100%;
	}

	body::-webkit-scrollbar {
		display: none;
	}

	body {
		padding: 0;
		margin: 0;
		background: #152536;
	} */

	.flex_title {
		font-family: title, sans-serif;
		font-size: 4rem;
		color: rgb(255, 255, 255);
		text-shadow: 4px 1px 10px #000e23ea;
		text-align: center;
		margin-bottom: 6vh;
	}
	.my-cont_flex {
		max-width: 80vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		@apply mx-auto 2xl:max-w-full ;
	}

	

	/* a[rel="external noopener noreferrer nofollow" target="_blank" href] {
		position: relative;
	}
	a[rel="external noopener noreferrer nofollow" target="_blank" href],
	a[rel="external noopener noreferrer nofollow" target="_blank" href]:link,
	a[rel="external noopener noreferrer nofollow" target="_blank" href]:visited,
	a[rel="external noopener noreferrer nofollow" target="_blank" href]:active {
		text-decoration: none;
		color: #d8276c;
		text-shadow: 2px 2px 2px #070c11;
		padding-bottom: 3px;
		font-weight: bold;
	}
	a[rel="external noopener noreferrer nofollow" target="_blank" href]::after {
		content: '';
		position: absolute;
		left: 0;
		left: 0;
		bottom: 0;
		background: #fff;
		width: 0;
		height: 1px;
		transition: 0.35s cubic-bezier(0.17, 0.67, 0.5, 1.03);
	}
	a[rel="external noopener noreferrer nofollow" target="_blank" href]:hover::after {
		width: 100%;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	}

	.note {
		margin-top: 30px;
		color: #fff;
		font-size: 1rem;
		font-family: 'Merriweather', sans-serif;
		line-height: 1.5;
		text-align: center;
	} */

	article.my-cont {
		margin-bottom: 4vw;
		margin-left: 0.8vw;
		margin-right: 0.8vw;
		width: 280px;
		height: 350px;
		border-radius: 3px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}
	article.my-cont:hover {
		box-shadow: 1px 1px 10px 5px rgba(177, 177, 177, 0.803);
		transition: all 0.5s;
	}

	article.my-cont .thumb {
		width: auto;
		height: 260px;
		background: var(--img, url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/new-york-city.png'))
			no-repeat ;
		background-size: cover;
		background-position-x: center;
		border-radius: 3px;
	}
	article.my-cont .infos {
		width: auto;
		height: 350px;
		position: relative;
		padding: 14px 24px;
		background: rgb(255, 255, 255);
		transition: all 0.5s;
	}
	article.my-cont .infos .title {
		position: relative;
		margin: 10px 0;
		letter-spacing: 1px;
		color: #152536;
		font-family: 'Grotesque Black', sans-serif;
		font-size: 1.2rem;
		text-transform: uppercase;
		text-shadow: 0 0 0px #2b2b2b8e;
	}
	article.my-cont .infos .flag {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		width: 35px;
		height: 23px;
		background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/flag.pngss') no-repeat top
			right;
		background-size: 100% auto;
		display: inline-block;
	}
	article.my-cont .infos .date,
	article.my-cont .infos .seats {
		margin-bottom: 10px;
		text-transform: uppercase;
		font-size: 0.85rem;
		color: rgba(21, 37, 54, 0.7);
		font-family: 'Grotesque', sans-serif;
	}

	article.my-cont .infos .seats {
		display: inline-block;
		margin-bottom: 24px;
		padding-bottom: 24px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		opacity: 0;
		transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
	}
	article.my-cont .infos .txt {
		font-family: 'Merriweather', sans-serif;
		line-height: 2;
		font-size: 0.95rem;
		color: rgba(21, 37, 54, 0.7);
		opacity: 0;
		transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
	}
	article.my-cont .infos i {
		cursor: pointer;
	}
	article.my-cont .infos .details {
		position: absolute;
		left: 0px;
		bottom: 20px;
		font-size: 2.5rem;

		opacity: 0;
		transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
		@apply flex flex-row items-center justify-evenly w-full;
	}
	article.my-cont:hover .infos {
		transform: translateY(-260px);
		/* background: linear-gradient(0deg,white 30%,rgba(255, 255, 255, 0) 100%); 
  glowing effect
  */
	}
	article.my-cont:hover .infos .seats,
	article.my-cont:hover .infos .txt,
	article.my-cont:hover .infos .details {
		opacity: 1;
	}
	@media only screen and (max-width: 1200px) {
		.flex_title {
			margin-top: 7vw;
			font-size: 12vw;
		}
		article.my-cont {
			width: 66vw;
			height: 70vw;
		}
		article.my-cont .infos .title {
			/* font-size: 3rem; */
			@apply text-lg m-0;
		}

		article.my-cont .thumb {
			height: 50vw;
		}
		article.my-cont .infos {
			width: 70vw;
			height: 70vw;
		}
		article.my-cont:hover .infos {
			transform: translateY(-50vw);
		}
		article.my-cont .infos .date {
			/* font-size: 1.25rem; */
			margin-top: 6px;
			@apply text-base;
		}
		i {
			/* font-size: 6rem !important; */
			/* margin-left: 9vw !important; */
			margin-bottom: 1rem;
		}
	}
</style>
