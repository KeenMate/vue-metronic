<template>
	<div :class="inputDivStyle">
		<span :class="leftAddonSpanStyle" v-if="(leftIcon && leftIconType === 'addon') || leftAddonText || leftIconType === 'btn'">
			<m-icon
			:color="leftIconColor"
			:name="leftIcon !== null ? leftIcon + (leftIconSpinnable ? ' fa-spin' : '') : null"
			v-if="!leftAddonText && leftIconType !== 'btn'" />
			<template v-else-if="leftAddonText">{{leftAddonText}}</template>
			<slot name="leftBtn" v-else></slot>
		</span>
		<m-icon
		:color="iconStyle.iconColor"
		:name="iconStyle.iconName"
		:tooltip="tooltipContent ? tooltipContent : null"
		:tooltip-placement="tooltipPlacement ? tooltipPlacement : null" />
		<slot></slot>
		<span v-if="helpMsg" :class="helpMsgSpanClass">{{helpMsg}}</span>
		<span :class="rightAddonSpanStyle" v-if="(rightIcon && rightIconType === 'addon') || rightAddonText || rightIconType === 'btn'">
			<m-icon
			:color="rightIconColor"
			:name="rightIcon ? rightIcon + (rightIconSpinnable ? ' fa-spin' : '') : null"
			v-if="!rightAddonText && rightIconType !== 'btn'" />
			<template v-else-if="rightAddonText">{{rightAddonText}}</template>
			<slot name="rightBtn" v-else></slot>
		</span>
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
	},
	computed: {
		inputDivStyle: function () {
			var style = {}

			if (this.leftIconType === "icon" || this.rightIconType === "icon")
				style["input-icon"] = true
			if (this.leftIconType === "addon" || this.rightIconType === "addon" || this.leftIconType === "btn" || this.rightIconType === "btn")
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

			if (this.leftIconType === "btn")
				style["input-group-btn"] = true
			else
				style["input-group-addon"] = true

			if (this.rounded)
				style["input-circle-left"] = true

			return style
		},
		rightAddonSpanStyle: function () {
			var style = {}

			if (this.rightIconType === "btn")
				style["input-group-btn"] = true
			else
				style["input-group-addon"] = true

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
