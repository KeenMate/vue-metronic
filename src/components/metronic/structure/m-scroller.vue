<template>
<div class="slimScrollDiv" style="width: auto; height: 200px; overflow: hidden; position: relative;">
	<div class="scroller" :style="{height: height + 'px'}" data-rail-visible="1" :data-rail-color="railColor" data-handle-color="#a1b2bd">
		<slot></slot>
	</div>
	<div class="slimScrollBar" style="background: rgb(161, 178, 189); 
	border-radius: 7px; top: 0px; width: 7px; height: 100px; right: 1px; 
	display: none; position: absolute; z-index: 99; opacity: 0.4;"></div>
	<div class="slimScrollRail" :style="scrollRailStyle"></div>
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
		dataAlwaysVisible: {
			type: Boolean,
			default: null
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
