<template>
	<div :class="noteStyle">
			<h4 v-if="this.title.length > 0" class="block">{{title}}</h4>
			<p><slot></slot></p>
	</div>
</template>

<script>
import MetronicComponent from "../mixins/metronic-component"

export default {
	mixins: [MetronicComponent],
	props: {
		title: {
			type: String,
			default: ""
		},
		level: {
			type: String,
			default: "info",
			options: ["success", "info", "warning", "danger"]
		},
		bordered: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		noteStyle: function () {
			var style = {
				note: true
			}

			style["note-" + this.level] = true

			if (this.bordered)
				style["note-bordered"] = true

			return this.combineCss(style)
		}
	}
}
</script>

<style>

</style>
