<template>
	<div class="btn-toolbar margin-bottom-10">
			<slot></slot>
	</div>
</template>

<script>
import MetronicComponent from "../mixins/metronic-component"
import mButtonGroup from './m-button-group.vue'

export default {
	mixins: [MetronicComponent],
	components: {
		mButtonGroup
	},
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
