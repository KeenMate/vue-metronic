<template>
	<button
		:class="btnStyle"
		@click="onClick"
		:disabled="isDisabled"
		:data-dismiss="dismiss"
		:aria-hidden="ariaHidden"
	>
		<i v-if="preIcon?preIcon.length>0:false" :class="preIcon"></i>
		<i v-if="preIcon?preIcon.length>0:false" :class="icon"></i>
		<slot></slot>
		<i v-if="preIcon?preIcon.length>0:false" :class="postIcon"></i>
	</button>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: "default"
		},
		buttonStyle: {
			type: String,
			default: "metronic",
			options: ["bootstrap", "metronic", "metronic-outline", "colored", "block"]
		},
		size: {
			type: String,
			default: "default",
			options: ["large", "default", "small", "extra-small", "icon-only"]
		},
		icon: String,
		color: String,
		preIcon: String,
		postIcon: String,
		isDisabled: Boolean,
		dismiss: {
			type: String,
			default: null
		},
		ariaHidden: {
			type: String,
			default: null,
			options: ["true", "false"]
		}
	},
	computed: {
		btnStyle: function () {
			var style = {
				btn: true
			}
			if (this.size.toLowerCase() !== "default") {
				switch (this.size.toLowerCase()) {
				case "large": {
					style["btn-lg"] = true
					break
				}
				case "small": {
					style["btn-sm"] = true
					break
				}
				case "extra-small": {
					style["btn-xs"] = true
					break
				}
				case "icon-only": {
					style["btn-icon-only"] = true
					break
				}
				}
			}

			if (this.color !== "") {
				style[this.color] = true
			}
			switch (this.buttonStyle.toLowerCase()) {
			case "bootstrap": {
				if (!this.type || this.type === "") style["btn-default"] = true
				else style["btn-" + this.type.toLowerCase()] = true
				break
			}
			case "metronic-outline": {
				style["btn-outline"] = true
				break
			}
			case "block": {
				style["btn-block"] = true
				break
			}
			}

			return style
		}
	},
	methods: {
		onClick (event) {
			this.$emit("click", event)
		}
	}
}
</script>