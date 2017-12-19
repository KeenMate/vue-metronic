<template>
	<div :class="contentStyle" :id="id">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		fade: {
			type: Boolean,
			default: false
		},
		id: {
			type: String,
			default: ""
		},
		active: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		contentStyle: function () {
			var style = {
				"tab-pane": true
			}

			if (this.fade)
				style["fade"] = true

			if (this.active) {
				style["in"] = true
				style["active"] = true
			}

			return style
		}
	}
}
</script>

<style>

</style>
