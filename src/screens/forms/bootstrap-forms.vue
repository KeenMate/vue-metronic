<template>
	<m-portlet title="Default Form"
		bordered 
		title-uppercased 
		title-bold 
		title-color="red-sunglo"
		icon="icon-settings"
		icon-color="red-sunglo">
	<m-portlet-block>
		<h2>Default inputs</h2>

		<m-bootstrap-input title="Email Address"
			icon="fa-envelope"
			placeholder="A field for you email address"
			icon-on-right
		></m-bootstrap-input>

		</m-portlet-block>
	</m-portlet>
</template>

<script>
import mPortlet from "../../components/metronic/structure/m-portlet.vue"
import mPortletBlock from "../../components/metronic/structure/m-portlet-block.vue"

import mBootstrapInput from "../../components/metronic/forms/m-bootstrap-input.vue"

export default {
	components: {
		mPortlet,
		mPortletBlock,
		mBootstrapInput
	}
}
</script>

<style>

</style>
