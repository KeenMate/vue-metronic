<template>
	<div>
		<p>
			Stránku "{{$route.path}}" se nepodařilo najít.
		</p>
		<router-link to="/">Úvodní stránka</router-link>
	</div>
</template>

<script>
export default {
	name: "error404Component"
}
</script>