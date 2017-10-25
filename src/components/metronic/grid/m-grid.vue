<template>
	<div :class="gridStyle">
		<slot></slot>
	</div>
</template>

<script>
import MetronicComponent from "../mixins/metronic-component"

export default {
	mixins: [MetronicComponent],
	computed: {
		gridStyle: function () {
			var style = {
				"m-grid": true
			}

			this.customCss.forEach(function (element) {
				style[element] = true
			}, this)

			return style
		}
	}
}
</script>

<style>

</style>
