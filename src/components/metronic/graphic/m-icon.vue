<template>
	<i v-if="name" :class="iconStyle" :data-original-title="tooltip" :data-placement="tooltipPlacement"></i>
</template>

<script>
import TooltipMixin from "../mixins/tooltip.js"

export default {
	mixins: [
		TooltipMixin
	],
	props: {
		name: {
			type: String,
			default: ""
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
			if (this.color)
				style["font-" + this.color] = true
			if (this.tooltip)
				style["tooltips"] = true
			return style
		}
	}
}
</script>

<style>

</style>
