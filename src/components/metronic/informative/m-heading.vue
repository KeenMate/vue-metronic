<template>
	<div :class="headingStyle">
			<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		borderColor: {
			type: String,
			default: "green"
		},
		bordered: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		headingStyle: function () {
			var style = {
				"m-heading-1": true
			}

			if (this.bordered) {
				style["m-bordered"] = true

				if (this.color !== "") {
					style["border-" + this.borderColor] = true
				}
			}

			return style
		}
	}
}
</script>

<style>

</style>
