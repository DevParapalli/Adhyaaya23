<script lang="ts">
	import { goto, preloadCode } from "$app/navigation";
	import type { AdhyaayaEvent } from "$lib/data/events";
	import { clickOutside } from "$lib/util";


    export let event: AdhyaayaEvent;
    export let isOpen: boolean;

    import {closeModal as _closeModal, closeAllModals} from 'svelte-modals';
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

    export let date_options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let display_date: string;
    if (event.end_date.toLocaleDateString('en-IN', date_options) === event.start_date.toLocaleDateString('en-IN', date_options)) {
        date_options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }
        display_date = event.start_date.toLocaleDateString('en-IN', date_options);
    }
    else {
        display_date = event.start_date.toLocaleDateString('en-IN', date_options) + ' to ' + event.end_date.toLocaleDateString('en-IN', date_options);
    }

    let members_selected: boolean | number = false;

    function getMemberText(i: number) {
        switch (i) {
            case 1:
                return 'Solo';
            case 2:
                return 'Duo';
            case 3:
                return 'Trio';
            case 4:
                return 'Quartet';
            case 5:
                return 'Quintet';
            case 6:
                return 'Squad';
            default:
                return 'Team';
        }
    }

    let scrollPos: number;
    function closeModal() {
        window.scrollTo({ top: scrollPos, behavior: 'smooth'});
        _closeModal();
        closeAllModals();
    }
    onMount(() => {
        preloadCode('/register');
        scrollPos = window.scrollY;
        window.scrollTo({ top: 0, behavior: 'auto'});
    })
</script>

<style>
    .modal-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
    }
</style>

{#if isOpen}

<div class="modal-wrapper relative h-full w-full z-[210] bg-black/50">
    <button class="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white right-10 top-8 absolute transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 z-50 mix-blend-difference">
        <div
        class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500"
        style="top: 50%; top: calc(50%); left: 50%; transform: translateX(-50%) translateY(-50%) rotate(-45deg) translateZ(0px);"
    />
    <div
        class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500 "
        style="top: 50%; top: calc(50%); left: 50%; transform: translateX(-50%) translateY(-50%) rotate(45deg) translateZ(0px);"
    />
    </button>
    <div use:clickOutside on:click_outside={closeModal} class="modal-container container flex justify-between flex-col lg:flex-row rounded-lg">
        <div class="image-container">
            <img src="{event.poster}" alt="{event.name} poster" class="rounded-lg lg:rounded-r-none">
        </div>
        <div class="content-container flex flex-col items-baseline lg:w-2/3 px-6 pt-6 bg-purple-900">
            <h2 class="event-name text-4xl">{event.name}</h2>
            <p class="date py-2">{display_date}</p>
            <p class="event-description py-2">{event.description}</p>
            <p class="ec-contact py-2">
                For Queries Contact:<br />
                {#each event.contact as ec}
                    <span class="font-bold">{ec.name}</span> - {ec.phone}<br />
                {/each}
            </p>
            <div class="player-indicator flex flex-row flex-wrap justify-evenly items-center mt-auto w-full gap-4">
                {#if event.team_members.filter(i => i != 0).length > 1 }
                    <span class="w-full">You can play as:</span>
                {/if}
                {#each Array(6) as _, i}
                {#if event.team_members.includes(i+1)}
                <button on:click={() => {members_selected = i+1}} class="rounded-lg p-2 lg:p-4 lg:text-lg border border-white {members_selected == i+1 ? 'border-green-500 text-green-500':''} mx-2 hover:scale-110 active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out">{getMemberText(i+1)} ({i+1})</button>
                {/if}
                {/each}
                <!-- {#if event.team_members.includes(1)}
                     <button on:click={() => {members_selected = 1}} class="badge {members_selected == 1 ? 'border-green-500 text-green-500':''} badge-outline md:badge-lg hover:scale-110 active:scale-90 active:opacity-90">Solo (1)</button>
                {/if}
                {#if event.team_members.includes(2)}
                     <button on:click={() => {members_selected = 2}} class="badge {members_selected == 2 ? 'border-green-500 text-green-500':''} badge-outline md:badge-lg hover:scale-110 active:scale-90 active:opacity-90">Duo (2)</button>
                {/if}
                {#if event.team_members.includes(3)}
                     <button on:click={() => {members_selected = 3}} class="badge {members_selected == 3 ? 'border-green-500 text-green-500':''} badge-outline md:badge-lg hover:scale-110 active:scale-90 active:opacity-90">Trio (3)</button>
                {/if}
                {#if event.team_members.includes(4)}
                     <button on:click={() => {members_selected = 4}} class="badge {members_selected == 4 ? 'border-green-500 text-green-500':''} badge-outline md:badge-lg hover:scale-110 active:scale-90 active:opacity-90">Squad (4)</button>
                {/if}
                {#if event.team_members.includes(5)}
                     <button on:click={() => {members_selected = 5}} class="badge {members_selected == 5 ? 'border-green-500 text-green-500':''} badge-outline md:badge-lg hover:scale-110 active:scale-90 active:opacity-90">Team of 5</button>
                {/if}
                {#if event.team_members.includes(6)}
                     <button on:click={() => {members_selected = 6}} class="badge {members_selected == 6 ? 'border-green-500 text-green-500':''} badge-outline md:badge-lg hover:scale-110 active:scale-90 active:opacity-90">Team of 6</button>
                {/if} -->
            </div>
            <div class="button-container flex lg:flex-row flex-col justify-around gap-4 w-full mt-4 mb-4">
                <button on:click={async () => {
                    closeModal();
                    closeAllModals();
                    if (members_selected) {
                        await goto(`/register?event=${event.id}&members=${members_selected}`);
                    }
                    else {
                        await goto(`/register?event=${event.id}`);
                    }
                }} class="register-btn w-full lg:w-1/2 bg-green-500 rounded-lg p-2 hover:scale-105 active:scale-95 active:opacity-90 transition-all duration-300 ease-in-out uppercase">Register</button>
                <button class="learn-more-btn w-full lg:w-1/2 bg-blue-500 rounded-lg p-2 hover:scale-105 active:scale-95 active:opacity-90 transition-all duration-300 ease-in-out uppercase">Learn More</button>
            </div>
        </div>
    </div>
</div>
{/if}