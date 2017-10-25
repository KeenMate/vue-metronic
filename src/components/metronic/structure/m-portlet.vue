<template>
		<div :class="portletStyle">
				<div class="portlet-title">
						<div :class="captionStyle">
								<i v-if="icon!=''" :class="icon"></i>
								<span :class="subjectStyle">{{title}}</span>
								<span v-if="caption!=''" class="caption-helper">{{caption}}</span>
						</div>
						<div class="actions" v-if="$slots.actions">
							<slot name="actions"></slot>
						</div>
				</div>
				<div class="portlet-body util-btn-margin-bottom-5">
						<slot></slot>
				</div>
		</div>
</template>



<script>
export default {
	name: "PortletComponent",
	props: {
		type: {
			type: String,
			default: "solid",
			options: ["box", "light", "solid"]
		},
		title: {
			type: String,
			default: ""
		},
		caption: {
			type: String,
			default: ""
		},
		captionBold: {
			type: Boolean,
			default: false
		},
		captionUppercased: {
			type: Boolean,
			default: false
		},
		captionColor: {
			type: String,
			default: ""
		},
		icon: {
			type: String
		},
		color: {
			type: String
		}
	},
	computed: {
		portletStyle: function () {
			var style = {
				portlet: true
			}
			style[this.type] = true

			if (this.color && this.color !== "") {
				style[this.color] = true
			}

			return style
		},
		captionStyle: function () {
			var style = {
				caption: true
			}

			if (this.captionColor && this.captionColor !== "") {
				style["font-" + this.captionColor] = true
			}

			return style
		},
		subjectStyle: function () {
			var style = {
				"caption-subject": true
			}

			if (this.captionBold) {
				style["bold"] = true
			}

			if (this.captionUppercased) {
				style["uppercase"] = true
			}

			return style
		}
	}
}
</script>
