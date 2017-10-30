<template>
	<a :href="href" :role="role" :class="linkStyle" :data-toggle="dataToggle"> {{title}} </a>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		color: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "link",
			options: ["link", "button"]
		},
		dataToggle: {
			type: String,
			default: null
		}
	},
	computed: {
		role: function () {
			return this.type == "button" ? "button" : null
		},
		linkStyle: function () {
			var style = {}

			if (this.type == "button")
				style["btn"] = true
				
			if (this.color.length > 0)
				style[this.color] = true
			
			return style
		}
	}
}
</script>

<style>

</style>
