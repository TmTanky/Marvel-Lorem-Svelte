<script lang="ts">
	import { onMount } from 'svelte'
	import { navigate } from 'svelte-routing'
	import type { DataWrapper } from 'src/ts/interfaces/DataWrapper'
	import type { Character } from 'src/ts/interfaces/Character'
	import CharacterCard from '../../components/Character/CharacterCard.svelte'

	const path = window.location.pathname
	const id = path.substring(11, path.length)

	let character = {} as Character
	let loading = true

	onMount(async () => {
		const data = await fetch(
			`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${
				import.meta.env.VITE_API_KEY
			}&hash=${import.meta.env.VITE_HASH}`
		)
		const res = (await data.json()) as DataWrapper
		character = res.data.results[0]
		loading = false
	})
</script>

<main>
	{#if loading}
		<p>Loading...</p>
	{:else}
		<div class="back-container">
			<button on:click={() => navigate('/')}> Back </button>
		</div>
		<CharacterCard
			description={character.description}
			imageUrl={character.thumbnail.path}
			name={character.name}
		/>
	{/if}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;

		.back-container {
			button {
				border: none;
				outline: none;
				background-color: black;
				max-width: fit-content;
				height: 40px;
				padding: 0 40px;
				font-weight: 700;
				color: white;
				cursor: pointer;
			}
		}
	}
</style>
