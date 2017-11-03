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
		rounded: {
			type: Boolean,
			default: false
		},
		pullRight: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		componentStyle: function () {
			var style = {
				"badge": true
			}
			if (this.level)
				style["badge" + this.level] = true

			if (!this.rounded)
				style["badge-roundless"] = true

			if (this.pullRight)
				style["pull-right"] = true

			return this.combineCss(style)
		}
	}
}
</script>

<style>

</style>
