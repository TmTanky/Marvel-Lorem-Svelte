<script lang="ts">
	import { onMount } from 'svelte'
	import type { DataWrapper } from 'src/ts/interfaces/DataWrapper'
	import type { Character } from 'src/ts/interfaces/Character'

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
		<img src={`${character.thumbnail.path}/portrait_xlarge.jpg`} alt="asdasdasd" />
		<h1>{character.name}</h1>
		<p>{character.description}</p>
	{/if}
</main>
