<script lang="ts">
	import { Router, Route } from 'svelte-routing'
  import Character from './routes/Character/Character.svelte'
  import About from './routes/About/About.svelte'
</script>

<Router url="">
  <Route path="/about" component={About} />
  <Route path="/character/:id" component={Character} />
</Router>

<style>
</style>
