<template>
	<span class="label label-success"> {{text}} </span>
</template>

<script>
export default {
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
				"badge": true
			}
			if (this.level)
				style["badge" + this.level] = true

			if (this.roundless)
				style["badge-roundless"] = true
		}
	}
}
</script>

<style>

</style>
