<template>
	<m-wrapper
	:help-msg="helpMsg"
	:help-msg-display="helpMsgDisplay"
	:help-msg-size="helpMsgSize"
	:left-icon="leftIcon"
	:left-icon-type="leftIconType"
	:left-icon-color="leftIconColor"
	:left-icon-spinnable="leftIconSpinnable"
	:left-addon-text="leftAddonText"
	:tooltip-content="tooltipContent"
	:tooltip-placement="tooltipPlacement"
	:right-icon="rightIcon"
	:right-icon-type="rightIconType"
	:right-icon-color="rightIconColor"
	:right-icon-spinnable="rightIconSpinnable"
	:right-addon-text="rightAddonText"
	:horizontal="horizontal"
	:input-size="inputSize"
	:input-column="inputColumn"
	:rounded="rounded"
	:input-width-size="inputWidthSize"
	:custom-css="inputGroupCustomCss">
		<input
		:id="elemId"
		:type="inputType"
		:placeholder="placeholder ? placeholder : null"
		:class="inputStyle"
		:disabled="disabled"
		:readonly="readonly"
		:value="value"
		:min="minDate && inputType === 'date' ? minDate : ''"
		:max="maxDate && inputType === 'date' ? maxDate : ''"
		@focus="onFocusHandler"
		@click="onClickHandler"
		@blur="onBlurHandler"
		@change="onChangeHandler"
		@input="onInputHandler">

		<span v-if="helpMsg  && noAddons" :class="helpMsgSpanClass">{{helpMsg}}</span>

		<template slot="leftBtn">
			<slot name="leftBtn"></slot>
		</template>
		<template slot="rightBtn">
			<slot name="rightBtn"></slot>
		</template>

		<!-- <button slot="rightBtn" class="btn green">Clicky me</button> -->

		<!-- Separate into new Component for static content -->
		<!-- <p v-else-if="staticType && staticContent" class="form-control-static">{{staticContent}}</p> -->
	</m-wrapper>
</template>

<script>
import formInputMixin from "../mixins/form-input"
// import metronicMixin from "../mixins/metronic-component"

import mFormControlWrapper from "./m-form-control-wrapper.vue"

import mIcon from "../graphic/m-icon.vue"

export default {
	mixins: [formInputMixin],
	components: {
		"m-wrapper": mFormControlWrapper,
		mIcon
	},
	props: {
		inputType: {
			type: String,
			default: "text",
			options: ["text", "email", "number", "password", "date", "file", "And other Input types"]
		},
		minDate: {
			type: String,
			default: "",
			description: "Used with input type date, to determinate minimal possible date value"
		},
		maxDate: {
			type: String,
			default: "",
			description: "Used with input type date, to determinate maximal possible date value"
		},
		minLength: {
			type: Number,
			default: 0
		},
		maxLength: {
			type: Number
		},
		inputWidthSize: {
			type: String,
			default: undefined,
			options: ["small", "medium", "large", "xlarge"]
		},
		inputCustomCss: {
			type: Array,
			default: () => [],
			description: "Add your custom css classes for input"
		},
		inputGroupCustomCss: {
			type: Array,
			default: () => [],
			description: "Add your custom css classes for input's parent div"
		}
	},
	computed: {
		elemId: function () {
			return this.inputId || ("input-id-" + Number(new Date()))
		},
		noAddons: function () {
			return (this.leftIconType !== "addon" && this.rightIconType !== "addon")
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
		inputStyle: function () {
			var style = {
				"form-control": true
			}

			style["spinner"] = this.inputSpinner

			switch (this.inputSize) {
			case "small":
				style["input-sm"] = true
				break
			case "large":
				style["input-lg"] = true
				break
			case "xlarge":
				style["input-xlarge"] = true
				break
			}

			if (this.displayInline)
				style["input-inline"] = true

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

			return Object.assign(style, this.inputCustomCss || [])
		}
	},
	methods: {
		onInputHandler: function (e) {
			this.$emit("input", e.target.value)
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
