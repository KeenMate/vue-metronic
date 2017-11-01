<template>
	<i v-if="name" :class="iconStyle"></i>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: null
		},
		color: {
			type: String,
			default: ""
		}
	},
	computed: {
		iconStyle: function () {
			var style = {}
			style[this.name] = true
			if (this.color.length > 0) 
				style["font-" + this.color] = true
			return style
		}
	}
}
</script>

<style>

</style>
