<template>
	<label :class="labelStyle"> {{label}}
		<input type="radio" :value="value" :name="name" :disabled="disabled" :id="id !== '' ? id : null" :checked="checked" />
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
		name: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: ""
		},
		outline: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		id: {
			type: String,
			default: ""
		},
		checked: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		labelStyle: function () {
			var style = {
				"mt-radio": true
			}

			if (this.outline)
				style["mt-radio-outline"] = true

			return style
		}
	}
}
</script>

<style>

</style>
