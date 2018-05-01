<template>
  <m-row>
    <m-column :size="6">
			<m-portlet
			type="light"
			bordered
			caption="Caption 1"
			title="Title 1"
			title-color="red-sunglo"
			title-bold
			title-uppercased>
				<template slot="actions">
					<m-button post-icon="fa fa-upload" @click="submitForm1">Submit</m-button>
				</template>
				<m-form ref="form1">
					<m-input
					help-msg="Length of word must be longer than 5 and must start with space"
					:condition-function="(val) => val.length > 5"
					:regex="/^\s\w+$/"
					placeholder="Name"
					@validityChanged="valid => nameValid = valid"
					:input-group-custom-css="['margin-top-10']"></m-input>
					<m-input
					help-msg="Number must be in range 6-9"
					:condition-function="(val) => val > 5 && val < 10"
					placeholder="Age"
					@validityChanged="valid => ageValid = valid"
					:input-group-custom-css="['margin-top-10']"></m-input>
					<m-input
					help-msg="Username cannt be empty and must be unique"
					:condition-function="validateUsername"
					placeholder="Username"
					@validityChanged="valid => usernameValid = valid"
					:input-group-custom-css="['margin-top-10']"></m-input>
				</m-form>
			</m-portlet>
		</m-column>
		<m-column :size="6">
			<m-portlet
			type="light"
			bordered
			caption="Caption 2"
			title="Title 2"
			title-bold
			title-uppercased>
				<template slot="actions">
					<m-button post-icon="fa fa-upload" @click="submitForm2" :disabled="!form2Valid">Submit</m-button>
				</template>
				<m-form ref="form2">
					<m-input
					help-msg="Length of word must be longer than 5 and must start with space"
					:condition-function="(val) => val.length > 5"
					v-model="field1"
					:regex="/^\s\w+$/"
					placeholder="Name"
					@validityChanged="valid => nameValid = valid"
					:input-group-custom-css="['margin-top-10']"></m-input>
					<m-input
					help-msg="Number must be in range 6-9"
					:condition-function="(val) => val > 5 && val < 10"
					placeholder="Age"
					@validityChanged="valid => ageValid = valid"
					:input-group-custom-css="['margin-top-10']"></m-input>
					<m-input
					help-msg="Username cannt be empty and must be unique"
					:condition-function="validateUsername"
					placeholder="Username"
					@validityChanged="valid => usernameValid = valid"
					:input-group-custom-css="['margin-top-10']"></m-input>
				</m-form>
			</m-portlet>
		</m-column>
		<m-form>

		</m-form>
  </m-row>
</template>

<script>
import mRow from "../../components/metronic/structure/m-row.vue"
import mColumn from "../../components/metronic/structure/m-column.vue"

import mPortlet from "../../components/metronic/structure/m-portlet.vue"
import mPortletBlock from "../../components/metronic/structure/m-portlet-block.vue"

import mForm from "../../components/metronic/forms/m-form.vue"
// import mFormGroup from "../../components/metronic/forms/m-form-group.vue"
import mInputValidated from "../../components/metronic/forms/m-input-validated.vue"

import mButton from "../../components/metronic/ui/m-button.vue"

export default {
	components: {
		mRow,
		mColumn,
		mPortlet,
		mPortletBlock,
		mForm,
		// mFormGroup,
		"m-input": mInputValidated,
		mButton
	},
	data () {
		return {
			msg: "Welcome to Your Vue.js App",
			// form2Valid: false,
			field1: "",
			validationRules: {
				"field1": {
				}
			}
		}
	},
	computed: {
		form2Valid () {
		}
	},
	methods: {
		submitForm1 () {
			alert("submitted")
		},
		submitForm2 () {
			if (!this.form2Valid) return
			alert("submitted")
		},
		validateUsername (value, modificationUUID) {
			var fn = (resolve, reject, val, uuid) => {
				console.log(`custom valid called: ${val.toLowerCase() !== "Jonathan"}`)
				if (val.toLowerCase() !== "jonathan")
					resolve(uuid)
					/* eslint prefer-promise-reject-errors: 0 */
				else reject({
					message: "username already exists",
					modificationUUID: uuid
				})
			}
			var promise = new Promise((resolve, reject) => {
				setTimeout(fn, 1000, resolve, reject, value, modificationUUID)
			})

			return promise
		}
	},
	mounted () {
		this.$refs.form2.$children.forEach((input, index) => {
			input.$on("validityChanged", this.updateValidity)
		}, this)
	}
}
</script>
