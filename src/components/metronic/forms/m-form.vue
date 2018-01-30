<template>
	<form role="form" :class="formCss">
		<div v-if="this.formStyle === 'default'" class="form-body">
			<slot></slot>
		</div>
		<template v-else>
			<slot></slot>
		</template>
		<div v-if="$slots.actions" class="form-actions">
			<slot name="actions"></slot>
		</div>
	</form>
</template>

<script>
import MetronicComponent from "../mixins/metronic-component"

export default {
	mixins: [MetronicComponent],
	props: {
		formStyle: {
			type: String,
			default: "default",
			options: ["default", "inline", "horizontal"]
		},
		isRepeating: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		formCss: function () {
			var style = {}

			switch (this.formStyle.toLowerCase()) {
			case "inline": {
				style["form-inline"] = true
				break
			}
			case "horizontal": {
				style["form-horizontal"] = true
				if (this.isRepeating)
					style["mt-repeater"] = true
				break
			}
			}
			this.combineCss(style)

			return style
		}
	}
}
</script>

<style>

</style>
