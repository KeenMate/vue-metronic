<template>
	<span :class="componentStyle"> {{text}} </span>
</template>

<script>
import MetronicMixin from "../mixins/metronic-component"

export default {
	mixins: [
		MetronicMixin
	],
	props: {
		text: {
			type: String,
			default: null
		},
		level: {
			type: String,
			default: "default",
			options: ["success", "danger", "warning", "primary", "info", "default"]
		},
		roundless: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		componentStyle: function () {
			var style = {
				"label": true
			}
			if (this.level)
				style["label-" + this.level] = true

			return this.combineCss(style)
		}
	}
}
</script>

<style>

</style>
