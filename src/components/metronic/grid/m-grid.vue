<template>
	<div :class="gridStyle">
		<slot></slot>
	</div>
</template>

<script>
import MetronicComponent from "../mixins/metronic-component"

export default {
	mixins: [MetronicComponent],
	props: {
		deviceSize: {
			type: String,
			default: "",
			options: ["xs", "sm", "md", "lg"]
		},
		responsive: {
			type: Boolean,
			default: false
		},
		flex: {
			type: Boolean,
			default: false
		},
		isFullHeight: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		gridStyle: function () {
			var style = {
				"m-grid": true
			}

			if (this.responsive)
				style["m-grid-responsive-" + this.deviceSize] = true
			if (this.flex)
				style["m-grid-flex"] = true
			if (this.isFullHeight)
				style["m-grid-full-height"] = true
				
			this.combineCss(style)
			return style
		}
	}
}
</script>

<style>

</style>
