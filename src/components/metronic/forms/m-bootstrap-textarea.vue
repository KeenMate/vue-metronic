<template>
	<m-form-group 
	:horizontal="horizontal"
	:input-column="inputColumn"
	:input-size="inputSize"
	:label="label"
	:label-column="labelColumn"
	:label-control="labelControl"
	:rounded="rounded"
	:left-icon="leftIcon"
	:left-icon-type="leftIconType"
	:left-icon-color="leftIconColor"
	:left-icon-spinnable="leftIconSpinnable"
	:left-addon-text="leftAddonText"
	:right-icon="rightIcon"
	:right-icon-type="rightIconType"
	:right-icon-color="rightIconColor"
	:right-icon-spinnable="rightIconSpinnable"
	:right-addon-text="rightAddonText"
	:tooltip-content="tooltipContent"
	:tooltip-placement="tooltipPlacement"
	:input-spinner="inputSpinner"
	:static-type="staticType"
	:static-content="staticContent"
	:disabled="disabled"
	:readonly="readonly"
	:value="value"
	:help-msg="helpMsg"
	:help-msg-display="helpMsgDisplay"
	:group-column="formGroupColumn">
		<textarea
			:style="customCss"
			:rows="rows"
			:id="inputId"
			:placeholder="placeholder"
			:class="inputStyle"
			:disabled="disabled"
			:readonly="readonly"
			:value="value"
			:minlength="minLength"
			:maxlength="maxLength"
			@focus="onFocusHandler"
			@click="onClickHandler"
			@blur="onBlurHandler"
			@change="onChangeHandler"
			@input="onInputHandler"
		></textarea>

	</m-form-group>
</template>

<script>
import formInputMixin from "../mixins/form-input"
import metronicComponent from "../mixins/metronic-component"

import mFormGroup from "./m-form-group"

export default {
	mixins: [
		formInputMixin,
		metronicComponent
	],
	components: {
		mFormGroup
	},
	props: {
		label: {
			type: String,
			default: ""
		},
		rows: {
			type: Number,
			default: null
		},
		inputSize: {
			type: String,
			default: ""
		},
		minLength: {
			type: Number,
			default: 0
		},
		maxLength: {
			type: Number
		},
		inputDisplay: {
			type: String,
			default: "block",
			options: ["block", "inline"]
		},
		inputWidthSize: {
			type: String,
			default: "",
			options: ["small", "medium", "large"]
		},
		inputId: {
			type: String,
			default: ""
		},
		inputSpinner: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ""
		},
		formGroupColumn: {
			type: String,
			default: "",
			example: "col-md-1"
		},
		resizeable: {
			type: Boolean,
			default: false
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

			style["spinner"] = this.inputSpinner

			if (this.rounded) {
				if (this.leftIconType === "icon" || this.rightIconType === "icon")
					style["input-circle"] = true
				else if (this.leftIconType === "addon")
					style["input-circle-right"] = true
				else if (this.rightIconType === "addon")
					style["input-circle-left"] = true
			}

			if (!this.resizeable)
				style["textarea-no-resize"] = true

			this.combineCss(style)

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

<style scoped>
	.textarea-no-resize {
		resize: none;
	}
</style>
