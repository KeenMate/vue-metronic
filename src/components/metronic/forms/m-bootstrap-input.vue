<template>
	<div class="form-group">
		<label :for="elemId">{{label}}</label>
		<div class="input-group" v-if="leftIcon && leftIconType === 'addon'">
			<span :class="{ 'input-group-addon': true, 'input-circle-left': rounded }">
				<m-icon :color="leftIconColor" :name="leftIcon + leftIconSpinnable ? ' fa-spin' : ''" />
			</span>
			<input
				:type="type"
				:class="{ 'form-control': true, 'input-circle-right': rounded, 'input-sm': inputSize === 'small', 'input-lg': inpuntSize === 'large' }"
				:id="elemId"
				:placeholder="placeholder">
		</div>
		<div class="input-group" v-if="rightIcon && iconType === 'addon'">
			<input
				:type="type"
				:class="{'form-control': true, 'input-circle-left': rounded, 'input-sm': inputSize === 'small', 'input-lg': inpuntSize === 'large' }"
				:id="elemId"
				:placeholder="placeholder">
			<span :class="{ 'input-group-addon': true, 'input-circle-right': rounded }">
				<m-icon :color="rightIconColor" :name="rightIcon + rightIconSpinnable ? ' fa-spin' : ''" />
			</span>
		</div>
		<div class="input-icon" v-else-if="leftIcon && leftIconType === 'icon'">
			<m-icon :color="leftIconColor" :name="leftIcon + leftIconSpinnable ? ' fa-spin' : ''" />
			<input
				:type="type"
				:class="{ 'form-control': true, 'input-circle': rounded, 'input-sm': inputSize === 'small', 'input-lg': inpuntSize === 'large' }"
				:placeholder="placeholder">
		</div>
		<div class="input-icon right" v-else-if="rightIcon && rightIconType === 'icon'">
			<m-icon :color="rightIconColor" :name="rightIcon + rightIconSpinnable ? ' fa-spin' : ''" />
			<input
				:type="type"
				:class="{ 'form-control': true, 'input-circle': rounded, 'input-sm': inputSize === 'small', 'input-lg': inpuntSize === 'large' }"
				:placeholder="placeholder">
		</div>
	</div>
</template>

<script>
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
			default: ""
		},
		leftIconType: {
			type: String,
			default: "",
			options: ["icon", "addon"]
		},
		leftIconColor: {
			type: String,
			default: ""
		},
		leftIconSpinnable: {
			type: Boolean,
			default: false
		},
		rightIcon: {
			type: String,
			default: ""
		},
		rightIconType: {
			type: String,
			default: "",
			options: ["icon", "addon"]
		},
		rightIconColor: {
			type: String,
			default: ""
		},
		rightIconSpinnable: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		elemId: function () {
			if (this.inputId)
				return this.inputId
			else
				return "input-id-" + Number(new Date())
		}
	}
}
</script>

<style>

</style>
