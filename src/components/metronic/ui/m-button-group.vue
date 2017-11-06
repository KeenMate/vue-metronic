<template>
	<div :class="{'btn-group': true, 'btn-group-solid': solid}">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		solid: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>

</style>
