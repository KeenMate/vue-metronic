<template>
	<div class="btn-group-img btn-group">
		<button type="button" class="btn btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
			<img src="../../../../static/metronic/layout/img/avatar1.jpg" alt="">
		</button>
		<ul class="dropdown-menu-v2" role="menu">
			<template v-for="(action, index) in userActions">
				<li :key="index" v-if="!action.Divider">
					<router-link :to="{ name: action.RouteName }">
						<i :class="action.LinkIcon"></i>
						{{action.Title}}
						<span class="badge"></span>
					</router-link>
				</li>
				<li :key="index" v-else class="divider"></li>
			</template>
		</ul>
	</div>
</template>

<script>
export default {
	props: [
		"userActions"
	]
}
</script>
