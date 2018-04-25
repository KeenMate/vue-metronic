<template>
	<input
	:id="inputId"
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
</template>

<script>
import formInputMixin from "../mixins/form-input"

import mIcon from "../graphic/m-icon.vue"
import mFormGroup from "./m-form-group"

export default {
	mixins: [formInputMixin],
	components: {
		mFormGroup,
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
		}
	},
	computed: {
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
