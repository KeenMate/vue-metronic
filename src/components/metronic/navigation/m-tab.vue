<template>
	<li v-if="visible">
		<a :href="'#' + ((disabled) ? '' : id)" data-toggle="tab" aria-expanded="true"> {{ title }} </a>
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
		},
		visible: {
			type: Boolean,
			default: true
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
