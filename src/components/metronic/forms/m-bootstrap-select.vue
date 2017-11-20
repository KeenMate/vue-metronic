<template>
	<div class="form-group">
		<label v-if="label">{{label}}</label>
		<select :multiple="allowMultiple" :class="selectClasses">
			<slot></slot>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: ""
		},
		allowMultiple: {
			type: Boolean,
			default: false
		},
		selectSize: {
			type: String,
			default: "default",
			options: ["small", "default", "large"]
		}
	},
	computed: {
		selectClasses: function () {
			var style = {
				"form-control": true
			}

			switch (this.selectSize) {
			case "small":
				style["input-sm"] = true
				break
			case "large":
				style["input-lg"] = true
				break
			}

			return style
		}
	}
}
</script>

<style>

</style>
