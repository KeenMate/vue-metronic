<template>
	<div
		:class="componentStyle"
		role="progressbar" :aria-valuenow="currentValue"
		:aria-valuemin="minValue"
		:aria-valuemax="maxValue"
		:style="'width: ' + currentValue + '%'"
	>
		<span class="sr-only"> {{currentValue}} % </span>
	</div>
</template>

<script>
export default {
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
			default: "info",
			options: ["success", "warning", "info", "danger"]
		}
	},
	computed: {
		componentStyle: function () {
			var style = {
				"progress-bar": true
			}

			if (this.level)
				style["progress-bar-" + this.level] = true

			return style
		}
	}
}
</script>

<style>

</style>
