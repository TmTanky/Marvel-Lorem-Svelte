<script lang="ts">
	export let imageUrl: string
	export let name: string
	export let description: string
</script>

<div>
	<img src={`${imageUrl}/portrait_xlarge.jpg`} alt={name} />
	<h1>{name}</h1>
	<p>{description ? description : 'No description'}</p>
</div>
