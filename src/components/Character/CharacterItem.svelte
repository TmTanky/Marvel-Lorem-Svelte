<script lang="ts">
	import { navigate } from 'svelte-routing'

	export let name: string
	export let imageUrl: string
	export let id: number
</script>

<div on:click={() => navigate(`/character/${id}`)} class="item">
	<img src={`${imageUrl}/standard_small.jpg`} alt="" />
	<p class="character-name">{name}</p>
</div>

<style lang="scss">
	.item {
		background-color: white;
		display: flex;
		align-items: center;
		padding: 0.5rem;
		cursor: pointer;

		.character-name {
			font-size: 13px;
			font-weight: 700;
			margin-left: 8px;
		}

		&:hover {
			background-color: #e9e9e9;
		}
	}
</style>
