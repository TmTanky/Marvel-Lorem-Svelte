<script lang="ts">
	import { Router, Route } from 'svelte-routing'
  import Home from './routes/Home/Home.svelte'
  import Character from './routes/Character/Character.svelte'
  import About from './routes/About/About.svelte'
</script>

<Router url="">
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/character/:id" component={Character} />
</Router>

<style>
</style>
