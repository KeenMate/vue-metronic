<template>
	<div :class="alertStyle">
		<button v-if="this.dismissable || this.closeButton" class="close" aria-hidden="true" type="button" data-dismiss="alert"></button>
		<h4 v-if="this.heading.length > 0" class="alert-heading">{{heading}}</h4>
		<slot></slot>
</div>
</template>

<script>
import MetronicComponent from "../mixins/metronic-component"

export default {
	mixins: [MetronicComponent],
	props: {
		heading: {
			type: String,
			default: ""
		},
		dismissable: {
			type: Boolean,
			default: false
		},
		closeButton: {
			type: Boolean,
			default: false
		},
		level: {
			type: String,
			default: "info",
			options: ["success", "info", "warning", "danger"]
		},
		fadeIn: {
			type: Boolean,
			default: false
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

			if (this.fadeIn) {
				style["fade"] = true
				style["in"] = true
			}

			return this.combineCss(style)
		}
	}
}
</script>

<style>

</style>
