<template>
	<div :class="formGroupStyle">
		<label :for="elemId" :class="labelStyle">{{label}}</label>
		<slot></slot>
	</div>
</template>

<script>
import formInputMixin from "../mixins/form-input"

import mIcon from "../graphic/m-icon.vue"

export default {
	mixins: [formInputMixin],
	components: {
		mIcon
	},
	props: {
		// horizontal: {
		// 	type: Boolean,
		// 	default: false
		// },
		// label: {
		// 	type: String,
		// 	default: ""
		// },
		// labelColumn: {
		// 	type: String,
		// 	default: "",
		// 	example: "col-md-3"
		// },
		// labelControl: {
		// 	type: Boolean,
		// 	default: false,
		// 	description: "if its set to `true`, label will have `label-control` class in addition"
		// },
		// inputColumn: {
		// 	type: String,
		// 	default: "",
		// 	example: "col-md-3"
		// },
		// inputSize: {
		// 	type: String,
		// 	default: ""
		// },
		// leftIcon: {
		// 	type: String,
		// 	default: null
		// },
		// leftIconType: {
		// 	type: String,
		// 	default: null,
		// 	options: ["icon", "addon"]
		// },
		// leftIconColor: {
		// 	type: String,
		// 	default: null
		// },
		// leftIconSpinnable: {
		// 	type: Boolean,
		// 	default: false
		// },
		// leftAddonText: {
		// 	type: String,
		// 	default: ""
		// },
		// rightIcon: {
		// 	type: String,
		// 	default: null
		// },
		// rightIconType: {
		// 	type: String,
		// 	default: null,
		// 	options: ["icon", "addon"]
		// },
		// rightIconColor: {
		// 	type: String,
		// 	default: null
		// },
		// rightIconSpinnable: {
		// 	type: Boolean,
		// 	default: false
		// },
		// rightAddonText: {
		// 	type: String,
		// 	default: ""
		// },
		// tooltipContent: {
		// 	type: String,
		// 	default: ""
		// },
		// tooltipPlacement: {
		// 	type: String,
		// 	default: "",
		// 	options: ["top", "right", "bottom", "left"]
		// },
		// inputSpinner: {
		// 	type: Boolean,
		// 	default: false
		// },
		// staticType: {
		// 	type: Boolean,
		// 	default: false
		// },
		// staticContent: {
		// 	type: String,
		// 	default: ""
		// },
		// disabled: {
		// 	type: Boolean,
		// 	default: false
		// },
		// readonly: {
		// 	type: Boolean,
		// 	default: false
		// },
		// value: {
		// 	type: String,
		// 	default: ""
		// },
		// helpMsg: {
		// 	type: String,
		// 	default: ""
		// },
		// helpMsgDisplay: {
		// 	type: String,
		// 	default: "block",
		// 	options: ["block", "inline"]
		// },
		// groupColumn: {
		// 	type: String,
		// 	default: "",
		// 	example: "col-md-3"
		// }
	},
	computed: {
		elemId: function () {
			return this.inputId || ("input-id-" + Number(new Date()))
		},
		formGroupStyle: function () {
			var style = {
				"form-group": true
			}

			if (this.groupColumn)
				style[this.groupColumn] = true

			return style
		},
		labelStyle: function () {
			var style = {}

			if (this.labelColumn)
				style[this.labelColumn] = true

			if (this.horizontal)
				style["control-label"] = true

			return style
		}
	}
}
</script>

<style>

</style>
