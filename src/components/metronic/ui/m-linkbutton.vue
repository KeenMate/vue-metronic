<template>
	<a :href="href" :role="role" :class="linkStyle" :data-toggle="dataToggle" :disabled="disabled">
		<i v-if="preIcon?preIcon.length>0:false" :class="preIcon"></i>
		<i v-if="icon?icon.length>0:false" :class="icon"></i>
		<slot></slot>
		<i v-if="postIcon?postIcon.length>0:false" :class="postIcon"></i>
		</a>
</template>

<script>
import ButtonMixin from "../mixins/button"

export default {
	props: {
		href: {
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
			options: ["link", "ButtonMixin"]
		},
		dataToggle: {
			type: String,
			default: null
		}
	},
	mixins: [ButtonMixin],
	computed: {
		role: function () {
			return this.type === "ButtonMixin" ? "ButtonMixin" : null
		},
		linkStyle: function () {
			var style = {}

			if (this.type === "ButtonMixin")
				style["btn"] = true

			if (this.color.length > 0)
				style[this.color] = true

			/* eslint-disable no-undef */
			return Object.assign(style, this.btnStyle)
		}
	}
}
</script>

<style>

</style>
