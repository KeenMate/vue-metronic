<template>
	<m-wrapper
	:help-msg="helpMsg"
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
	:help-msg-display="helpMsgDisplay">
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
			options: ["small", "medium", "large"]
		}
	},
	computed: {
		elemId: function () {
			return this.inputId || ("input-id-" + Number(new Date()))
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
			}

			switch (this.inputWidthSize) {
			case "small":
				style["input-small"] = true
				break
			case "medium":
				style["input-medium"] = true
				break
			case "large":
				style["input-large"] = true
				break
			}

			if (this.inputDisplay === "inline")
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

			return style
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
