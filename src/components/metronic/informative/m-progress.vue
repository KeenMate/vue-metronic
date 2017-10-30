<template>
	<div :class="componentStyle">
			<m-progress-bar
				v-if="!$slots.progressBars"
				:current-value="currentValue"
				:min-value="minValue"
				:max-value="maxValue"
				:level="level"
			></m-progress-bar>
			<slot v-else name="progressBars"></slot>
	</div>
</template>

<script>
import mProgressBar from "./m-progress-bar.vue"

import MetronicComponent from "../mixins/metronic-component"

export default {
	mixins: [MetronicComponent],
	components: {
		mProgressBar
	},
	props: {
		minValue: {
			type: Number,
			default: 0
		},
		maxValue: {
			type: Number,
			default: 100
		},
		currentValue: {
			type: Number,
			default: 0
		},
		level: {
			type: String,
			options: ["success", "warning", "info", "danger"]
		},
		striped: {
			type: Boolean,
			default: false
		},
		animated: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		componentStyle: function () {
			var style = {
				progress: true
			}

			if (this.striped)
				style["progress-striped"] = true
			if (this.animated)
				style["active"] = true

			this.combineCss(style)
			return style
		}
	}
}
</script>

<style>

</style>
