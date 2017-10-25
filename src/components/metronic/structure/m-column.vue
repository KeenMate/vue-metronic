<template>
	<div :class="'col-md-' + size">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		size: {
			type: Number,
			default: 12
		},
		vAlignment: {
			type: String,
			default: "",
			options: ["top", "middle", "bottom"]
		},
		hAlignment: {
			type: String,
			default: "",
			options: ["left", "center", "right"]
		}
	},
	computed: {

	}
}
</script>
