<template>
	<ul v-if="!notUl" class="list-group">
		<slot></slot>
	</ul>
	<div v-else class="list-group">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		notUl: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		componentStyle: function () {
			var style = {
				"list-group-item": true
			}
			if (this.bgColor)
				style["bg-" + this.bgColor] = true
			if (this.fontColor)
				style["bg-font-" + this.fontColor] = true
		}
	}
}
</script>

<style>

</style>
