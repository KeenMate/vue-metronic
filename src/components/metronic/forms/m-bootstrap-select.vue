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
	
	:help-msg="helpMsg"
	:help-msg-display="helpMsgDisplay"
	:group-column="formGroupColumn">
		<select :multiple="allowMultiple" :value="value" :disabled="disabled"
				:readonly="readonly" 
				:class="selectClasses"
        @input="onInput"
				@change="onChange">
			<slot></slot>
		</select>
	</m-form-group>
</template>

<script>
import mFormGroup from "../forms/m-form-group.vue"
import formInputMixin from "../mixins/form-input"

export default {
	components: {
		mFormGroup
	},
	mixins: [formInputMixin],
	props: {
		label: {
			type: String,
			default: ""
		},
		allowMultiple: {
			type: Boolean,
			default: false
		},
		selectSize: {
			type: String,
			default: "default",
			options: ["small", "default", "large"]
		},
		formGroupColumn: {
			type: String,
			default: "",
			example: "col-md-3"
		}
	},
	computed: {
		selectClasses: function () {
			var style = {
				"form-control": true
			}

			switch (this.selectSize) {
			case "small":
				style["input-sm"] = true
				break
			case "large":
				style["input-lg"] = true
				break
			}

			return style
		}
	},
	methods: {
		onInput: function (event) {
			this.$emit("input", event.target.value)
		},
		onChange: function (event) {
			this.$emit("input", event.target.value)
		}
	}
}
</script>

<style>

</style>
