<script lang="ts">
	import type { Character } from '../../ts/interfaces/Character'
	import type { DataWrapper } from '../../ts/interfaces/DataWrapper'
	import CharacterItem from '../Character/CharacterItem.svelte'
	import { afterUpdate } from 'svelte'

	let searchInput = ''
	let results = [] as Character[]

	afterUpdate(() => {
		if (!searchInput) {
			results = []
		}
	})

	const submitSearch = async () => {
		if (!searchInput) {
			return
		}
		const data = await fetch(
			`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
				import.meta.env.VITE_API_KEY
			}&hash=${import.meta.env.VITE_HASH}&nameStartsWith=${searchInput}`
		)
		const res = (await data.json()) as DataWrapper
		results = res.data.results
	}
</script>

<main>
	<form on:keyup={submitSearch}>
		<input
			bind:value={searchInput}
			type="search"
			placeholder="Search a character"
			name="searchbox"
		/>
		{#if searchInput.length > 0}
			<div class="results">
				{#each results as character}
					<CharacterItem
						id={character.id}
						imageUrl={character.thumbnail.path}
						name={character.name}
					/>
				{/each}
			</div>
		{/if}
	</form>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;

		.results {
			position: absolute;
			width: 50%;
			background-color: white;
			top: 60px;
			border-radius: 5px;
			/* min-height: 50px; */
			max-height: 200px;
			height: max-content;
			overflow-y: scroll;

			&::-webkit-scrollbar {
				width: 2px;
				height: 2px;
			}
			&::-webkit-scrollbar-button {
				width: 0px;
				height: 0px;
			}
			&::-webkit-scrollbar-thumb {
				background: #f50000;
				border: 0px none #ffffff;
				border-radius: 50px;
			}
			&::-webkit-scrollbar-thumb:hover {
				background: #ffffff;
			}
			&::-webkit-scrollbar-thumb:active {
				background: #000000;
			}
			&::-webkit-scrollbar-track {
				background: #666666;
				border: 0px none #ffffff;
				border-radius: 50px;
			}
			::-webkit-scrollbar-track:hover {
				background: #666666;
			}
			::-webkit-scrollbar-track:active {
				background: #333333;
			}
			::-webkit-scrollbar-corner {
				background: transparent;
			}
			@media screen and (min-width: 300px) and (max-width: 500px) {
				width: 90%;
			}
			@media screen and (min-width: 501px) and (max-width: 900px) {
				width: 70%;
			}
		}
	}
	input {
		width: 50%;
		height: 50px;
		border-radius: 5px;
		border: 1px solid #ccc;
		outline: none;
		padding: 0 1rem;

		&::placeholder {
			font-weight: 700;
		}

		&:focus {
			border: solid 1px rgb(235, 84, 84);
		}

		@media screen and (min-width: 300px) and (max-width: 500px) {
			width: 90%;
		}
		@media screen and (min-width: 501px) and (max-width: 900px) {
			width: 70%;
		}
	}
</style>
