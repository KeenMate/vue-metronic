<template>
	<div :class="alertStyle">
		<button v-if="this.dismissable" class="close" aria-hidden="true" type="button" data-dismiss="alert"></button>
		<slot></slot>
</div>
</template>

<script>
import MetronicComponent from "../mixins/metronic-component"

export default {
	mixins: [MetronicComponent],
	props: {
		dismissable: {
			type: Boolean,
			default: true
		},
		level: {
			type: String,
			default: "info",
			options: ["success", "info", "warning", "danger"]
		}
	},
	computed: {
		alertStyle: function () {
			// alert alert-success alert-dismissable
			var style = {
				alert: true
			}

			style["alert-" + this.level] = true

			if (this.dismissable)
				style["alert-dismissable"] = true

			return this.combineCss(style)
		}
	}
}
</script>

<style>

</style>
