<template>
	<div class="form-group">
		<label v-if="label">{{label}}</label>
		<select class="form-control">
			<slot></slot>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: ""
		},
		allowMultiple: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>

</style>
