<template>
	<ul class="page-breadcrumb">
		<li :key="index" v-for="(page, index) in breadcrumbs">
			<router-link v-if="index != breadcrumbs.length - 1" :to="{ name: page.RouteName }">{{page.Title}}</router-link>
			<template v-else>
				{{page.Title}}
			</template>
		</li>
	</ul>
</template>

<script>
export default {
	name: "BreadCrumbComponent",
	computed: {
		breadcrumbs () {
			return this.$route.matched.map(function (item) {
				return {
					Title: item.meta.Title,
					RouteName: item.name
				}
			})
		}
	}
}
</script>
