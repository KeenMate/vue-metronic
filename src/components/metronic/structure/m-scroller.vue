<template>
	<div
		class="scroller"
		:style="{height: height + 'px'}"
		:data-always-visible="railAlwaysVisible ? '1' : '0'"
		data-rail-visible="1"
		:data-rail-color="railColor"
		:data-handle-color="handleColor"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		height: {
			type: Number,
			default: 200
		},
		railColor: {
			type: String,
			default: "green"
		},
		railBackgroundColor: {
			type: String,
			default: "silver"
		},
		railAlwaysVisible: {
			type: Boolean,
			default: null
		},
		handleColor: {
			type: String,
			default: "grey"
		}
	},
	computed: {
		scrollRailStyle: function () {
			// background: yellow; border-radius: 7px; top: 0px; width: 7px; height: 100%;
			// right: 1px; display: none; position: absolute; z-index: 90; opacity: 0.2;
			var style = {
				background: this.railBackgroundColor,
				borderRadius: "7px",
				top: "0px",
				width: "7px",
				height: "100%",
				right: "1px",
				display: "none",
				position: "absolute",
				zIndex: 90,
				opacity: 0.2
			}
			return style
		}
	}
}
</script>

<style>

</style>
