<template>
	<ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
		<template v-for="(item, index) in listMenu">
			<li v-if="item.SubMenu && !item.RouteName" :key="index" class="nav-item">
				<a href="javascript:;" class="nav-link nav-toggle">
					<i :class="item.LinkIcon"></i>
					<span class="title">{{item.Title}}</span>
					<span class="arrow"></span>
				</a>
				<ul class="sub-menu">
					<li class="nav-item" :key="subIndex" v-for="(subItem, subIndex) in item.SubMenu">
						<router-link :to="{ name: subItem.RouteName }" class="nav-link">
							<i :class="subItem.LinkIcon"></i>
							<span class="title">{{subItem.Title}}</span>
							<!-- Badge could be added in JSON with format: { Number: X, Level: "badge-success| and so on"} -->
						</router-link>
					</li>
				</ul>
			</li>
			<li v-else-if="item.Heading" :key="index" class="heading">
				<h3 class="uppercase">{{item.Heading}}</h3>
			</li>
			<li v-else :key="index" classs="nav-item">
				<router-link :to="{ name: item.RouteName }" class="nav-link">
					<i :classs="item.LinkIcon"></i>
					<span class="title">{{item.Title}}</span>
					<!-- Badge could be added in JSON with format: { Number: X, Level: "badge-success| and so on"} -->
				</router-link>
			</li>
		</template>
	</ul>
</template>

<script>
export default {
	name: "PageSidebarMenu",
	props: [
		"listMenu"
	]
}
</script>
