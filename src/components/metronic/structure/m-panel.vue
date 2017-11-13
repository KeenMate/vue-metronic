<template>
	<div :class="componentStyle">
		<div class="panel-heading">
			<slot name="heading"></slot>
		</div>
		<div class="panel-body">
			<slot></slot>
		</div>
		<slot name="table"></slot>
		<slot name="list-group"></slot>
		<div class="panel-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		titledHeading: {
			type: Boolean,
			default: false
		},
		level: {
			type: String,
			default: "default",
			options: ["default", "primary", "success", "info", "warning", "danger"]
		}
	},
	computed: {
		componentStyle: function () {
			var style = {
				panel: true
			}
			if (this.level)
				style["panel-" + this.level] = true

			return style
		}
	}
}
</script>

<style>

</style>
