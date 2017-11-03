import MetronicComponentMixin from "./metronic-component"
import TooltipMixin from "./tooltip"

export default {
	mixins: [
		MetronicComponentMixin,
		TooltipMixin
	],
	props: {
		buttonStyle: {
			type: String,
			default: "metronic",
			options: ["bootstrap", "metronic", "metronic-outline", "colored", "block"]
		},
		level: {
			type: String,
			default: "default",
			options: ["default", "primary", "success", "info", "warning", "danger", "link"],
			desc: "Used only for bootstrap types of buttons"
		},
		size: {
			type: String,
			default: "default",
			options: ["large", "default", "small", "extra-small", "icon-only"]
		},
		icon: {
			type: String,
			default: ""
		},
		color: {
			type: String,
			default: ""
		},
		preIcon: {
			type: String,
			default: ""
		},
		postIcon: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: false
		},
		bold: {
			type: Boolean,
			default: false
		},
		uppercased: {
			type: Boolean,
			default: false
		},
		block: {
			type: Boolean,
			default: false
		},
		dismiss: {
			type: String,
			default: null
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

			if (this.popover)
				style["popovers"] = true
			else if (this.tooltip)
				style["tooltips"] = true

			if (this.color !== "") {
				style[this.color] = true
			}
			switch (this.buttonStyle.toLowerCase()) {
				case "bootstrap": {
					if (!this.level || this.level === "") style["btn-default"] = true
					else style["btn-" + this.level.toLowerCase()] = true
					break
				}
				case "metronic-outline": {
					style["btn-outline"] = true
					break
				}
			}

			if (this.block) {
				style["btn-block"] = true
			}

			if (this.disabled) {
				style["disabled"] = true
			}

			if (this.bold) {
				style["sbold"] = true
			}

			if (this.uppercased) {
				style["uppercase"] = true
			}

			this.combineCss(style)

			return style
		}
	},
	methods: {
		combineCss: function (cssData) {
			this.customCss.forEach(function (element) {
				cssData[element] = true
			}, this)

			return cssData
		},
		onClick (event) {
			this.$emit("click", event)
		}
	}
}
