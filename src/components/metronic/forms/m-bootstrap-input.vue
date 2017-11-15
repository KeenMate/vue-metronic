<template>
	<div class="form-group">
		<label v-if="label" :for="elemId">{{label}}</label>
		<div :class="inputDivStyle">
			<span :class="leftIconSpanStyle" v-if="leftIcon && leftIconType === 'addon'">
				<m-icon
					:color="leftIconColor"
					:name="leftIcon !== null ? leftIcon + (leftIconSpinnable ? ' fa-spin' : '') : null"
				/>
			</span>
			<m-icon
				:color="iconStyle.iconColor"
				:name="iconStyle.iconName"
				:tooltip="tooltipContent ? tooltipContent : null"
				:tooltip-placement="tooltipPlacement ? tooltipPlacement : null"
			/>
			<input
				v-if="!staticType && !staticContent"
				:id="elemId"
				:type="inputType"
				:placeholder="placeholder ? placeholder : null"
				:class="inputStyle"
				:disabled="disabled"
				:readonly="readonly"
				@focus="onFocusHandler(e)"
				@click="onClickHandler(e)"
				@blur="onBlurHandler(e)"
				@change="onChangeHandler(e)"
				@input="onInputHandler(e)"
			>
			<p v-else-if="staticType && staticContent" class="form-control-static">{{staticContent}}</p>
			<p v-if="helpMsg" class="help-block">{{helpMsg}}</p>
			<span :class="leftIconSpanStyle" v-if="rightIcon && rightIconType === 'addon'">
				<m-icon
					:color="rightIconColor"
					:name="rightIcon ? rightIcon + (rightIconSpinnable ? ' fa-spin' : '') : null"
				/>
			</span>
		</div>
	</div>
</template>

<script>
/*
 
 This is awful old and threshy spaghetti code, luckily if woke up and realized how a big smelly sort of junk it is :)

<div class="input-group" v-if="leftIcon && leftIconType === 'addon'">
			<span :class="{ 'input-group-addon': true, 'input-circle-left': rounded }">
				<m-icon
					:color="leftIconColor"
					:name="leftIcon !== null ? leftIcon + (leftIconSpinnable ? ' fa-spin' : '') : null" />
			</span>
			<input
				:type="inputType"
				:class="{ 'form-control': true, 'input-circle-right': rounded, 'input-sm': inputSize === 'small', 'input-lg': inputSize === 'large' }"
				:id="elemId"
				:placeholder="placeholder">
		</div>
		<div class="input-group" v-if="rightIcon && rightIconType === 'addon'">
			<input
				:type="inputType"
				:class="{'form-control': true, 'input-circle-left': rounded, 'input-sm': inputSize === 'small', 'input-lg': inputSize === 'large' }"
				:id="elemId"
				:placeholder="placeholder">
			<span :class="{ 'input-group-addon': true, 'input-circle-right': rounded }">
				<m-icon
					:color="rightIconColor"
					:name="rightIcon ? rightIcon + (rightIconSpinnable ? ' fa-spin' : '') : null" />
			</span>
		</div>
		<div class="input-icon" v-else-if="leftIcon && leftIconType === 'icon'">
			<m-icon
				:color="leftIconColor"
				:name="leftIcon ? leftIcon + (leftIconSpinnable ? ' fa-spin' : '') : null" 
				:tooltip="tooltipContent ? tooltipContent : null"
				:tooltip-placement="tooltipPlacement ? tooltipPlacement : null" />
			<input
				:type="inputType"
				:class="{ 'form-control': true, 'input-circle': rounded, 'input-sm': inputSize === 'small', 'input-lg': inputSize === 'large' }"
				:placeholder="placeholder">
		</div>
		<div class="input-icon right" v-else-if="rightIcon && rightIconType === 'icon'">
			<m-icon
				:color="rightIconColor"
				:name="rightIcon ? rightIcon + (rightIconSpinnable ? ' fa-spin' : '') : null"
				:tooltip="tooltipContent ? tooltipContent : null"
				:tooltip-placement="tooltipPlacement ? tooltipPlacement : null" />
			<input
				:type="inputType"
				:class="{ 'form-control': true, 'input-circle': rounded, 'input-sm': inputSize === 'small', 'input-lg': inputSize === 'large' }"
				:placeholder="placeholder">
		</div>

*/

import mIcon from "../graphic/m-icon.vue"

export default {
	components: {
		mIcon
	},
	props: {
		inputType: {
			type: String,
			default: "text",
			options: ["text", "email", "number", "password", "date", "file", "And other Input types"]
		},
		inputId: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		rounded: {
			type: Boolean,
			default: false
		},
		inputSize: {
			type: String,
			default: ""
		},
		leftIcon: {
			type: String,
			default: null
		},
		leftIconType: {
			type: String,
			default: null,
			options: ["icon", "addon"]
		},
		leftIconColor: {
			type: String,
			default: null
		},
		leftIconSpinnable: {
			type: Boolean,
			default: false
		},
		rightIcon: {
			type: String,
			default: null
		},
		rightIconType: {
			type: String,
			default: null,
			options: ["icon", "addon"]
		},
		rightIconColor: {
			type: String,
			default: null
		},
		rightIconSpinnable: {
			type: Boolean,
			default: false
		},
		tooltipContent: {
			type: String,
			default: ""
		},
		tooltipPlacement: {
			type: String,
			default: "",
			options: ["top", "right", "bottom", "left"]
		},
		inputSpinner: {
			type: Boolean,
			default: false
		},
		staticType: {
			type: Boolean,
			default: false
		},
		staticContent: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		value: {
			type: String,
			default: ""
		},
		helpMsg: {
			type: String,
			default: ""
		}
	},
	computed: {
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
			if (this.rightIcon && this.rightIconType === "icon")
				style["right"] = true

			return style
		},
		inputStyle: function () {
			var style = {
				"form-control": true
			}

			switch (this.inputSize) {
			case "small":
				style["input-sm"] = true
				break
			case "large":
				style["input-lg"] = true
			}

			style["spinner"] = this.inputSpinner

			if (this.inputType === "file")
				style["form-control"] = false

			if (this.rounded) {
				if (this.leftIconType === "icon" || this.rightIconType === "icon")
					style["input-circle"] = true
				else if (this.leftIconType === "addon")
					style["input-circle-right"] = true
				else if (this.rightIconType === "addon")
					style["input-circle-left"] = true
			}

			return style
		},
		leftIconSpanStyle: function () {
			var style = {
				"input-group-addon": true
			}

			if (this.rounded)
				style["input-circle-left"] = true

			return style
		},
		rightIconSpanStyle: function () {
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

			console.log(objectStyle)
			return objectStyle
		}
	},
	methods: {
		onInputHandler: function (e) {
			this.$emit("input", e)
		},
		onChangeHandler: function (e) {
			this.$emit("change", e)
		},
		onFocusHandler: function (e) {
			this.$emit("focus", e)
		},
		onClickHandler: function (e) {
			this.$emit("click", e)
		},
		onBlurHandler: function (e) {
			this.$emit("blur", e)
		}
	}
}
</script>

<style>

</style>
