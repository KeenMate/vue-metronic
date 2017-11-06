export default {
	props: {
		tooltip: {
			type: String,
			default: null
		},
		popover: {
			type: String,
			default: null
		},
		popoverContent: {
			type: String,
			default: null
		},
		popoverTrigger: {
			type: String,
			default: null,
			options: ["click", "hover"]
		},
		tooltipPlacement: {
			type: String,
			default: null,
			options: ["top", "left", "bottom", "right"]
		}
	}
}
