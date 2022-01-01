<script lang="ts">
	import type { DataWrapper } from '../../ts/interfaces/DataWrapper'

	let searchInput = ''

	const submitSearch = async () => {
		const data = await fetch(
			`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f8b45118fb91a4431c36fd0e9d9768e6&hash=3b378346d138a923d09319e7ca3f1d83&nameStartsWith=${searchInput}`
		)
        const res = await data.json() as DataWrapper
	}
</script>

<main>
	<form on:submit|preventDefault={submitSearch}>
		<input
			bind:value={searchInput}
			type="search"
			placeholder="Search a character"
			name="searchbox"
		/>
		<button> Find </button>
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
	button {
		margin-top: 10px;
		width: 100px;
		border-radius: 5px;
		border: 1px solid #ccc;
		padding: 10px;
		background-color: rgb(235, 84, 84);
		color: #fff;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		cursor: pointer;
		border: none;
		outline: none;
	}
</style>
