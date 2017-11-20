<template>
	<option :value="value">
		{{title}}
	</option>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		}
	}
}
</script>

<style>

</style>
