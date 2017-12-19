<template>
	<li>
		<a :href="'#' + id" data-toggle="tab" aria-expanded="true"> {{ title }} </a>
	</li>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ""
		},
		id: {
			type: String,
			default: ""
		}
	}
}
</script>

<style>

</style>
