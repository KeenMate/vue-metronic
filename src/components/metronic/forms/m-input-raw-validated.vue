<template>
	<!-- <div :class="formGroupStyle">
		<div class="input-icon">
			<input :name="name" ref="inp" class="form-control" :id="inputId" v-model="inputValue" @input="validate">
			<i v-if="isValidating" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		</div>
	</div> -->
	<m-input :type="inputType" :value="value" @input="onInput">
		<!-- :input-width-size="inputWidthSize" -->
	</m-input>
</template>

<script>
	import inputMixin from "../mixins/form-input"

	import mInput from "../forms/m-bootstrap-input.vue"

	export default {
		name: "MetronicComponent",
		components: {
			mInput
		},
		mixins: [
			inputMixin
		],
		props: ["value", "inputType"],
		// data () {
		// 	return {
		// 		value2: ""
		// 	}
		// },
		methods: {
			onInput: function (text) {
				this.$emit("input", text)
			}
		}
	}
</script>

<style scoped>
	/* input:invalid {
		background-color: red !important;
	} */
</style>
