export default {
	props: {
		inputId: {
			type: String,
			default: undefined
		},
		placeholder: {
			type: String,
			default: ""
		},
		horizontal: {
			type: Boolean,
			default: false
		},
		label: {
			type: String,
			default: ""
		},
		labelColumn: {
			type: String,
			default: "",
			example: "col-md-3"
		},
		labelControl: {
			type: Boolean,
			default: false,
			description: "if its set to `true`, label will have `label-control` class in addition"
		},
		inputColumn: {
			type: String,
			default: "",
			example: "col-md-3"
		},
		inputSize: {
			type: String,
			default: ""
		},
		rounded: {
			type: Boolean,
			default: false
		},
		leftBtn: {
			type: Boolean,
			default: false
		},
		rightBtn: {
			type: Boolean,
			default: false
		},
		leftIcon: {
			type: String,
			default: null
		},
		leftIconType: {
			type: String,
			default: null,
			options: ["icon", "addon"]
		},
		leftIconColor: {
			type: String,
			default: null
		},
		leftIconSpinnable: {
			type: Boolean,
			default: false
		},
		leftAddonText: {
			type: String,
			default: ""
		},
		rightIcon: {
			type: String,
			default: null
		},
		rightIconType: {
			type: String,
			default: null,
			options: ["icon", "addon"]
		},
		rightIconColor: {
			type: String,
			default: null
		},
		rightIconSpinnable: {
			type: Boolean,
			default: false
		},
		rightAddonText: {
			type: String,
			default: ""
		},
		tooltipContent: {
			type: String,
			default: ""
		},
		tooltipPlacement: {
			type: String,
			default: "",
			options: ["top", "right", "bottom", "left"]
		},
		inputSpinner: {
			type: Boolean,
			default: false
		},
		staticType: {
			type: Boolean,
			default: false
		},
		staticContent: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		value: {
			default: ""
		},
		helpMsg: {
			type: String,
			default: ""
		},
		helpMsgDisplay: {
			type: String,
			default: "block",
			options: ["block", "inline"]
		}// ,
		// formGroupColumn: {
		// 	type: String,
		// 	default: "",
		// 	example: "col-md-1"
		// }
	},
	methods: {
		combineCss: function (cssData) {
			this.customCss.forEach(function (element) {
				cssData[element] = true
			}, this)

			return cssData
		}
	}
}
