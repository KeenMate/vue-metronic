<template class="row">
	<div id="home" class="col-md-10 col-md-offset-1">
		<div id="welcome">
			{{welcome}}
		</div>
		
		<router-view></router-view>
		
		
	</div>
</template>

<script>

export default {
	name: "HomeScreen",
	data () {
		return {
			welcome: "Welcome to Main Page"
		}
	}
}
</script>
