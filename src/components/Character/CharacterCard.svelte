<script lang="ts">
	export let imageUrl: string
	export let name: string
	export let description: string
</script>

<div class="card">
	<img src={`${imageUrl}/landscape_amazing.jpg`} alt={name} />
	<h1>{name}</h1>
	<p>{description ? description : 'No description'}</p>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		border: solid 1px black;
		border-radius: 5px;
		max-width: 500px;
		margin: 8px;
		text-align: center;

		h1 {
			margin: 10px 0;
		}
	}
</style>
