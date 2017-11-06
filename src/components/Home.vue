<template class="row">
	<div id="home" class="col-md-10 col-md-offset-1">
		<div id="welcome">
			{{welcome}}
		</div>
		
		<router-view></router-view>
		
		
	</div>
</template>

<script>
import InputField from "./metronic/ui/m-input.vue"
import SelectField from "./metronic/ui/m-select.vue"
import MyButton from "./metronic/ui/m-button.vue"

export default {
	name: "HomeScreen",
	components: {
		InputField,
		SelectField,
		MyButton
	},
	data () {
		return {
			welcome: "Welcome to Main Page"
		}
	}
}
</script>
