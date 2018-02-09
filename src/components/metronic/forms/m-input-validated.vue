<template>
	<!-- <div :class="formGroupStyle">
		<div class="input-icon">
			<input :name="name" ref="inp" class="form-control" :id="inputId" v-model="inputValue" @input="validate">
			<i v-if="isValidating" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		</div>
	</div> -->
	<m-input
	v-model="inputValue"
	:has-error="modified && !isValid"
	:help-msg="helpMsg"
	:input-custom-css="inputCustomCss"
	:placeholder="placeholder"
	:input-group-custom-css="inputGroupCustomCss"
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
	:custom-css="inputGroupCustomCss">
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
		props: {
			conditionFunction: {
				type: Function
			},
			required: {
				type: Boolean,
				default: false
			},
			regex: {
				type: RegExp,
				default: () => new RegExp()
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
		data () {
			return {
				inputValue: "",
				pattern: "",
				isValidating: false,
				isValid: false,
				modified: false,
				changeTimer: null,
				inputChangeDelay: 450,
				defaultErrorMessage: "",
				modificationUUID: ""
			}
		},
		watch: {
			inputValue (newVal, oldVal) {
				clearTimeout(this.changeTimer)

				this.modificationUUID = this.uuidv4()

				this.modified = true

				if (this.required && this.inputValue.length <= 0) {
					this.helpMsg = this.defaultErrorMessage

					this.modificationUUID = this.uuidv4()

					this.setValidity(false)
					return
				}
				if (this.regex) {
					var regex = new RegExp(this.regex)
					var isValid = regex.test(this.inputValue)

					this.modificationUUID = this.uuidv4()

					if (!isValid) return

					this.helpMsg = this.defaultErrorMessage
					this.setValidity(false)
				}

				if (!this.conditionFunction)
					return

				// var self = this
				this.changeTimer = setTimeout((modificationUUID) => {
					this.validationSequence(modificationUUID)
				}, this.inputChangeDelay, this.modificationUUID)
			}
		},
		methods: {
			validationSequence (modificationUUID) {
				var self = this
				// var oldValidationNumber = this.validationCycle
				self.isValidating = true

				var validationResult = self.conditionFunction(self.inputValue)

				if (validationResult.promise) {
					// deferred
					validationResult.done((oldValidationCycle) => {
						if (self.modificationUUID !== modificationUUID) return

						self.setValidity(true)
					}).fail((data) => {
						if (self.modificationUUID !== modificationUUID) return

						self.helpMsg = data.message || self.defaultErrorMessage
						self.setValidity(false)
					}).always(() => {
						self.isValidating = false
					})
				} else if (validationResult instanceof Promise) {
					validationResult.then((oldValidationCycle) => {
						if (self.modificationUUID !== modificationUUID) return

						self.setValidity(true)
					}).catch((data) => {
						if (self.modificationUUID !== modificationUUID) return

						self.helpMsg = data.message || self.defaultErrorMessage
						self.setValidity(false)
					}).finally(() => {
						self.isValidating = false
					})
				} else if (typeof (validationResult) === "boolean") {
					if (self.modificationUUID !== modificationUUID) return

					this.setValidity(validationResult)
				} else
					console.warn(
						`result of validation function:
						${this.conditionFunction} cannot be handled
						In validation functions return either Deferred, Promise or Boolean value`
					)
			},
			setValidity (valid) {
				console.log(`is valid: ${valid}`)

				this.isValid = valid

				this.$emit("validityChanged", valid)

				// this.$emit("isValid", valid)
				// this.$emit("input", this.inputValue)

				// this.$refs.inp.setCustomValidity(valid ? "" : this.helpMsg) // Changes HTML5 validity
				// this.$refs.inp.reportValidity()
			}
		},
		mounted () {
			this.defaultErrorMessage = this.helpMsg
		}
	}
</script>

<style scoped>
	/* input:invalid {
		background-color: red !important;
	} */
</style>
