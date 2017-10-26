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
				"m-grid-row": true
			}

			this.combineCss(style)
			return style
		}
	}
}
</script>

<style>

</style>
