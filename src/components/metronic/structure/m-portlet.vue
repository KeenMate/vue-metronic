<template>
		<div :class="portletStyle">
				<div class="portlet-title">
						<div :class="captionStyle">
								<i v-if="icon!=''" :class="icon"></i>
								<span :class="subjectStyle">{{title}}</span>
								<span v-if="caption!=''" class="caption-helper">{{caption}}</span>
						</div>
						<slot name="actions"></slot>
						<!-- <div class="actions">
								<div class="btn-group">
										<a class="btn green-haze btn-outline btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
												<i class="fa fa-angle-down"></i>
										</a>
										<ul class="dropdown-menu pull-right">
												<li>
														<a href="javascript:;">
																<i class="i"></i> Option 1</a>
												</li>
												<li class="divider"> </li>
												<li>
														<a href="javascript:;">Option 2</a>
												</li>
												<li>
														<a href="javascript:;">Option 3</a>
												</li>
												<li>
														<a href="javascript:;">Option 4</a>
												</li>
										</ul>
								</div>
						</div> -->
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

			if (this.color != "") {
				style[this.color] = true
			}

			return style
		},
		captionStyle: function () {
			var style = {
				caption: true
			}

			if (this.captionColor != "") {
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
