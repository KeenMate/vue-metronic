<template>
	<div>
		<ul class="nav nav-tabs">
			<m-tab :key="index" v-for="(item, index) in tabs" :class="{ 'active': index === 0 }" :title="item.title" :id="item.id" />
			<!-- <li class="active">
					<a href="#tab_1_1" data-toggle="tab" aria-expanded="true"> Home </a>
				</li>
				<li class="">
					<a href="#tab_1_2" data-toggle="tab" aria-expanded="false"> Profile </a>
				</li>
				<li class="dropdown">
					<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> Dropdown
						<i class="fa fa-angle-down"></i>
					</a>
					<ul class="dropdown-menu" role="menu">
						<li class="">
							<a href="#tab_1_3" tabindex="-1" data-toggle="tab" aria-expanded="false"> Option 1 </a>
						</li>
						<li class="">
							<a href="#tab_1_4" tabindex="-1" data-toggle="tab" aria-expanded="false"> Option 2 </a>
						</li>
						<li class="">
							<a href="#tab_1_3" tabindex="-1" data-toggle="tab" aria-expanded="false"> Option 3 </a>
						</li>
						<li class="">
							<a href="#tab_1_4" tabindex="-1" data-toggle="tab" aria-expanded="false"> Option 4 </a>
						</li>
					</ul>
			</li> -->
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
