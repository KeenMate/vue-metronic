<template>
	<m-column v-if="isInlineWrapperNecesary" :size="inputColumn">
		<div :class="inlineWrapperStyle">
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
				<span :class="rightAddonSpanStyle" v-if="(rightIcon && rightIconType === 'addon') || rightAddonText || rightIconType === 'btn'">
					<m-icon
					:color="rightIconColor"
					:name="rightIcon ? rightIcon + (rightIconSpinnable ? ' fa-spin' : '') : null"
					v-if="!rightAddonText && rightIconType !== 'btn'" />
					<template v-else-if="rightAddonText">{{rightAddonText}}</template>
					<slot name="rightBtn" v-else></slot>
				</span>
			</div>
		</div>
		<!-- <span v-if="helpMsg" :class="helpMsgSpanClass">{{helpMsg}}</span> -->
	</m-column>
	<div v-else :class="inputDivStyle">
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
		<span :class="rightAddonSpanStyle" v-if="(rightIcon && rightIconType === 'addon') || rightAddonText || rightIconType === 'btn'">
			<m-icon
			:color="rightIconColor"
			:name="rightIcon ? rightIcon + (rightIconSpinnable ? ' fa-spin' : '') : null"
			v-if="!rightAddonText && rightIconType !== 'btn'" />
			<template v-else-if="rightAddonText">{{rightAddonText}}</template>
			<slot name="rightBtn" v-else></slot>
		</span>
		<!-- <span v-if="helpMsg" :class="helpMsgSpanClass">{{helpMsg}}</span> -->
	</div>
</template>

<script>
import formInputMixin from "../mixins/form-input"
import metronicMixin from "../mixins/metronic-component"

import mColumn from "../structure/m-column.vue"

import mIcon from "../graphic/m-icon.vue"

export default {
	mixins: [formInputMixin, metronicMixin],
	components: {
		mColumn,
		mIcon
	},
	props: {
		inputWidthSize: {
			type: String,
			default: undefined,
			options: ["small", "medium", "large", "xlarge"]
		},
		inputColumn: {
			type: String,
			default: undefined
		}
	},
	computed: {
		isInlineWrapperNecesary: function () {
			console.log(`
				helpMsg: ${this.helpMsg}
				leftIconType: ${this.leftIconType}
				rightIconType: ${this.rightIconType}
				--------------------------------------
			`)
			return (this.helpMsg && (this.leftIconType === "addon" || this.rightIconType === "addon"))
		},
		inlineWrapperStyle: function () {
			var style = {}

			// if (this.helpMsgDisplay === "inline")
			style["input-inline"] = true

			switch (this.helpMsgSize) {
			case "small":
				style["input-large"] = true
				break
			case "medium":
				style["input-medium"] = true
				break
			case "large":
				style["input-small"] = true
				break
			}

			style["has-error"] = this.hasError || undefined
			style["has-success"] = !this.hasError || undefined

			return style
		},
		helpMsgSpanClass: function () {
			var style = {}

			switch (this.helpMsgDisplay) {
			case "inline":
				style["help-inline"] = true
				break
			case "block":
				style["help-block"] = true
				break
			}

			return style
		},
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
			if (this.inputColumn && !this.isInlineWrapperNecesary)
				style[this.inputColumn] = true
			if (this.rightIcon && this.rightIconType === "icon")
				style["right"] = true

			style["has-error"] = this.hasError || undefined

			switch (this.inputWidthSize) {
			case "xsmall":
				style["input-xsmall"] = true
				break
			case "small":
				style["input-small"] = true
				break
			case "medium":
				style["input-medium"] = true
				break
			case "large":
				style["input-large"] = true
				break
			case "xlarge":
				style["input-xlarge"] = true
			}

			// return Object.assign(style, this.customCss || [])
			return this.combineCss(style)
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
		}
	}
}
</script>

<style>

</style>
