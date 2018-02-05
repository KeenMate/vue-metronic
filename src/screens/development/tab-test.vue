<template>
	<div>
		<h4>Some Tab testing</h4>
		<m-tabs :tabs="testTabs">
			<template>
				<m-tab-content id="tab_section1_id" fade active>Content 1</m-tab-content>
				<m-tab-content id="tab_section2_id" fade>Content 2</m-tab-content>
				<m-tab-content id="tab_section3_id" fade>Content 3</m-tab-content>
			</template>
		</m-tabs>
	</div>
</template>

<script>
import mTabs from "../../components/metronic/navigation/m-tabs.vue"
import mTabContent from "../../components/metronic/navigation/m-tab-content.vue"

export default {
	components: {
		mTabs,
		mTabContent
	},
	data: function () {
		return {
			testTabs: [
				{
					title: "Tab section 1",
					id: "tab_section1_id"
				},
				{
					title: "Tab section 2",
					id: "tab_section2_id"
				},
				{
					title: "Tab section 3",
					id: "tab_section3_id"
				}
			]
		}
	},
	methods: {
		// demo () {
		// 	var a = [1, 2, 6, 5, 4, 3, 2], b, c, d

		// 	a.sort((a, b) => a > b ? a : b)

		// 	([b, c, ...d] = a)
		// }
	}
}
</script>

<style>

</style>
