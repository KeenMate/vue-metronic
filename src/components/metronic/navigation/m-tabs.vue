<template>
	<div>
		<ul class="nav nav-tabs">
		<m-tab :key="index" v-for="(item, index) in tabs"
				:class="{ 'active': index === 0 }"
				:title="item.title" :id="item.id"
				:visible="item.visible"></m-tab>
					</ul>
		<div class="tab-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>

import mTab from "../navigation/m-tab.vue"

export default {
	components: {
		mTab
	},
	props: {
		tabs: {
			type: Array,
			default: () => []
		}
	},
	computed: {
		contentStyle: function () {
			var style = {
				"tab-pane": true
			}

			if (this.fade)
				style["fade"] = true

			return style
		},
		tabsStyle: function () {
			var style = {
				"nav": true,
				"nav-tabs": true
			}

			if (this.right)
				style["tabs-reversed"] = true

			return style
		}
	},
	mounted: function () {
		console.log(this.$slots)
	}
}
</script>

<style>

</style>
