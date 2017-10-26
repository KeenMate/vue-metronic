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
		size: {
			type: Number,
			default: null
		},
		deviceSize: {
			type: String,
			default: "md",
			options: ["xs", "sm", "md", "lg"]
		},
		vAlignment: {
			type: String,
			default: "",
			options: ["top", "middle", "bottom"]
		},
		hAlignment: {
			type: String,
			default: "",
			options: ["left", "center", "right"]
		},
		order: {
			type: Number,
			default: null,
			minValue: 1,
			maxValue: 12
		},
		backgroundColor: {
			type: String,
			default: ""
		},
		fontColor: {
			type: String,
			default: ""
		}
	},
	computed: {
		gridStyle: function () {
			var style = {
				"m-grid-col": true
			}

			if (this.size)
				style["m-grid-col-" + this.deviceSize + "-" + this.size] = true
			if (this.vAlignment !== "")
				style["m-grid-col-" + this.vAlignment] = true
			if (this.hAlignment !== "")
				style["m-grid-col-" + this.hAlignment] = true
			if (this.order)
				style["m-grid-col-order-" + this.order] = true
			if (this.backgroundColor !== "")
				style["bg-" + this.backgroundColor] = true
			if (this.fontColor !== "")
				style["font-" + this.fontColor] = true

			return this.combineCss(style)
		}
	}
}
</script>

<style>

</style>
