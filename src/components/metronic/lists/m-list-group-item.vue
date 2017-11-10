<template>
	<li v-if="!link" :class="componentStyle">
		<slot></slot>
	</li>
	<a v-else :href="link" :class="componentStyle" @click="onClickHandler()">
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		bgColor: {
			type: String,
			default: ""
		},
		fontColor: {
			type: String,
			default: ""
		},
		level: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: false
		},
		link: {
			type: String,
			default: ""
		},
		active: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		componentStyle: function () {
			var style = {
				"list-group-item": true
			}
			if (this.bgColor)
				style["bg-" + this.bgColor] = true
			if (this.fontColor)
				style["bg-font-" + this.fontColor] = true
			if (this.level)
				style["list-group-item-" + this.level] = true
			if (this.disabled)
				style["disabled"] = true
			if (this.active)
				style["active"] = true

			return style
		}
	},
	methods: {
		onClickHandler: function () {
			this.$emit("click", null)
		}
	}
}
</script>

<style>

</style>
