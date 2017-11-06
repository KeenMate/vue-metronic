<template>
	<div :class="toolbarStyle">
			<slot></slot>
	</div>
</template>

<script>
import MetronicComponent from "../mixins/metronic-component"

export default {
	mixins: [MetronicComponent],
	computed: {
		toolbarStyle: function () {
			var style = {
				btnToolbar: true
			}

			this.combineCss(style)
			return style
		}
	}
}
</script>

<style>

</style>
