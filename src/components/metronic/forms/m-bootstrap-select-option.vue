<template>
	<option :value="value" :selected="selected" :disabled="disabled">
		{{title}}
	</option>
</template>

<script>
export default {
	props: {
		value: {
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		selected: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>

</style>
