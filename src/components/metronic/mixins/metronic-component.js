export default {
	props: {
		customCss: {
			type: Array,
			default: () => []
		}
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
