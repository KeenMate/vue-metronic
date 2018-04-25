<template>
	<div class="form-group" :class="formGroupStyle">
		<label v-if="label" :for="elemId" :class="labelClass">{{label}}</label>
		<div :class="inputDivStyle">
			<span :class="leftAddonSpanStyle" v-if="(leftIcon && leftIconType === 'addon') || leftAddonText">
				<m-icon
					:color="leftIconColor"
					:name="leftIcon !== null ? leftIcon + (leftIconSpinnable ? ' fa-spin' : '') : null"
					v-if="!leftAddonText"
				/>
				<template v-else>{{leftAddonText}}</template>
			</span>
			<m-icon
				:color="iconStyle.iconColor"
				:name="iconStyle.iconName"
				:tooltip="tooltipContent ? tooltipContent : null"
				:tooltip-placement="tooltipPlacement ? tooltipPlacement : null"
			/>
			<slot v-if="!staticType && !staticContent"></slot>
			<p v-else-if="staticType && staticContent" class="form-control-static">{{staticContent}}</p>
			<span v-if="helpMsg" :class="helpMsgSpanClass">{{helpMsg}}</span>
			<span :class="rightAddonSpanStyle" v-if="(rightIcon && rightIconType === 'addon') || rightAddonText">
				<m-icon
					:color="rightIconColor"
					:name="rightIcon ? rightIcon + (rightIconSpinnable ? ' fa-spin' : '') : null"
					v-if="rightAddonText"
				/>
				<template v-else>{{rightAddonText}}</template>
			</span>
		</div>
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
		groupColumn: {
			type: String,
			default: "",
			example: "col-md-3"
		}
	},
	computed: {
		formGroupStyle: function () {
			var style = {}

			if (this.groupColumn)
				style[this.groupColumn] = true

			return style
		},
		elemId: function () {
			if (this.inputId)
				return this.inputId
			else
				return "input-id-" + Number(new Date())
		},
		inputDivStyle: function () {
			var style = {}

			if (this.leftIconType === "icon" || this.rightIconType === "icon")
				style["input-icon"] = true
			if (this.leftIconType === "addon" || this.rightIconType === "addon")
				style["input-group"] = true
			if (this.inputSize === "small")
				style["input-group-sm"] = true
			else if (this.inputSize === "large")
				style["input-group-lg"] = true
			if (this.inputColumn)
				style[this.inputColumn] = true
			if (this.rightIcon && this.rightIconType === "icon")
				style["right"] = true

			return style
		},
		leftAddonSpanStyle: function () {
			var style = {}

			if (this.leftIcon && this.leftIconType === "addon")
				style["input-group-addon"] = true

			if (this.rounded)
				style["input-circle-left"] = true

			return style
		},
		rightAddonSpanStyle: function () {
			var style = {
				"input-group-addon": true
			}

			if (this.rounded)
				style["input-circle-right"] = true

			return style
		},
		iconStyle: function () {
			var objectStyle = {
				iconColor: null,
				iconName: null
			}

			if (this.leftIconType === "icon" && this.leftIcon) {
				objectStyle.iconName = this.leftIcon
				objectStyle.iconColor = this.leftIconColor
			} else if (this.rightIconType === "icon" && this.rightIcon) {
				objectStyle.iconName = this.rightIcon
				objectStyle.iconColor = this.rightIconColor
			}

			if (this.leftIconSpinnable || this.rightIconSpinnable)
				objectStyle.iconName += " fa-spin"

			return objectStyle
		},
		labelClass: function () {
			var style = {}

			if (this.labelColumn)
				style[this.labelColumn] = true

			if (this.horizontal)
				style["control-label"] = true

			return style
		},
		helpMsgSpanClass: function () {
			var style = {}

			if (this.helpMsgDisplay === "inline")
				style["help-inline"] = true
			if (this.helpMsgDisplay === "block")
				style["help-block"] = true

			return style
		}
	}
}
</script>

<style>

</style>
