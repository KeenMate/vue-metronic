<template>
	<div class="form-group form-md-line-input form-md-floating-label ">
		<div v-if="icon" class="input-icon">
			<input :type="inputType" :name="name" :class="{ 'form-control': true, 'edited': value}" :id="inputId" :value="value" @input="onInput($event.target.value)">
			<label v-if="inputLabel" :for="inputId">{{label}}</label>
			<span v-if="help" class="help-block">{{help}}</span>
			<i :class="icon"></i>
		</div>
		<template v-else>
			<input :type="inputType" :name="name" :class="{ 'form-control': true, 'edited': value}" :id="inputId" :value="value" @input="onInput($event.target.value)">
			<label v-if="inputLabel" :for="inputId">{{label}}</label>
			<span v-if="help" class="help-block">{{help}}</span>
		</template>
	</div>
</template>

<script>
export default {
	name: "MetronicComponent",
	props: [
		"label",
		"help",
		"value",
		"id",
		"name",
		"type",
		"icon"
	],
	computed: {
		inputId () {
			return this.id ? this.id : "_" + Math.random().toString(36).substring(2, 9)
		},
		inputLabel () {
			return this.label ? this.label : "Pass 'label' attribute to '" + this.name + "' component"
		},
		inputType () {
			return this.type ? this.type : "text"
		}
	},
	methods: {
		onInput (value) {
			this.$emit("input", value)
		}
	}
}
</script>
