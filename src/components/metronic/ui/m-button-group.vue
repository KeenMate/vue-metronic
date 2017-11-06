<template>
	<div :class="groupStyle">
		<slot></slot>
	</div>
</template>

<script>
import MetronicComponentMixin from "../mixins/metronic-component"

export default {
	mixins: [MetronicComponentMixin],
	props: {
		solid: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: "default",
			options: ["large", "default", "small", "extra-small"]
		}
	},
	computed: {
		groupStyle: function () {
			var style = {
				"btn-group": true
			}
			
			if (this.size.toLowerCase() !== "default") {
				switch (this.size.toLowerCase()) {
					case "large": {
						style["btn-group-lg"] = true
						break
					}
					case "small": {
						style["btn-group-sm"] = true
						break
					}
					case "extra-small": {
						style["btn-group-xs"] = true
						break
					}
				}
			}

			if (this.solid)
				style["btn-group-solid"] = true

			this.combineCss(style)

			return style
		}
	}
}
</script>

<style>

</style>
