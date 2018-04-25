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
			>
		<textarea ref="editorPlaceholder" :minlength="minLength" :maxlength="maxLength" name="content" data-provide="markdown" rows="10"></textarea>
		<!-- <input
					:id="elemId"
					:type="inputType"
					:placeholder="placeholder ? placeholder : null"
					:class="inputStyle"
					:disabled="disabled"
					:readonly="readonly"
					:value="value"
					@focus="onFocusHandler"
					@click="onClickHandler"
					@blur="onBlurHandler"
					@change="onChangeHandler"
					@input="onInputHandler"
				> -->

	</m-form-group>
</template>

<script>

import formInputMixin from "../mixins/form-input"
import mIcon from "../graphic/m-icon.vue"
import mFormGroup from "./m-form-group"
import $ from "jQuery"

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
		horizontal: {
			type: Boolean,
			default: false
		},
		inputColumn: {
			type: String,
			default: "",
			example: "col-md-3"
		},
		inputSize: {
			type: String,
			default: ""
		},
		inputDisplay: {
			type: String,
			default: "block",
			options: ["block", "inline"]
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
			default: "",
			options: ["small", "medium", "large"]
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
		labelColumn: {
			type: String,
			default: "",
			example: "col-md-3"
		},
		labelControl: {
			type: Boolean,
			default: false,
			description: "if its set to `true`, label will have `label-control` class in addition"
		},
		rounded: {
			type: Boolean,
			default: false
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
		leftAddonText: {
			type: String,
			default: ""
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
		rightAddonText: {
			type: String,
			default: ""
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
		},
		helpMsgDisplay: {
			type: String,
			default: "block",
			options: ["block", "inline"]
		}
	},
	data: function () {
		return {
			mdEl: {}
		}
	},
	watch: {
		value: function (newValue) {
			this.mdEl.setContent(newValue)
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
	},
	mounted: function () {
		var self = this

		$(this.$refs.editorPlaceholder).markdown({
			onChange: function (e) {
				self.value = e.getContent()
				self.onChangeHandler()
				self.onInputHandler(self.value)
			},
			onShow: function (e) {
				self.mdEl = e
				e.setContent(self.value)
			}
		})
	}
}
</script>

<style>

</style>
