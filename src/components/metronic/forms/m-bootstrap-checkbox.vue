<template>
	<label :class="labelStyle"> {{label}}
		<input type="checkbox" :value="value" :name="name" :disabled="disabled" :checked="checked" />
		<span></span>
	</label>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: ""
		},
		outlined: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		checked: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		labelStyle: function () {
			var style = {
				"mt-checkbox": true
			}

			if (this.outlined)
				style["mt-checkbox-outline"] = true

			return style
		}
	}
}
</script>

<style>

</style>
