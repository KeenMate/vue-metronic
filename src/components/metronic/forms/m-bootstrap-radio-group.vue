<template>
	<div class="form-group">
		<label>{{label}}</label>
		<div :class="listStyle">
				<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: ""
		},
		inline: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		listStyle: function () {
			var style = {}

			if (this.inline)
				style["mt-radio-inline"] = true
			else
				style["mt-radio-list"] = true

			return style
		}
	}
}
</script>

<style>

</style>
