<template>
	<div>
		<!-- BEGIN HEADER -->
		<header class="page-header">
			<nav class="navbar" role="navigation">
				<div class="container-fluid">
					<div class="havbar-header">
						<!-- BEGIN LOGO -->
						<a id="index" class="navbar-brand" href="start.html">
							<img src="../static/metronic/layout/img/logo.png" alt="Logo">
						</a>
						<!-- END LOGO -->
						<!-- BEGIN TOPBAR ACTIONS -->
						<div class="topbar-actions">
							<!-- DOC: Apply "search-form-expanded" right after the "search-form" class to have half expanded search box -->
							<form class="search-form" action="extra_search.html" method="GET">
								<div class="input-group">
									<input type="text" class="form-control" placeholder="Search here" name="query">
									<span class="input-group-btn">
										<a href="javascript:;" class="btn md-skip submit">
											<i class="fa fa-search"></i>
										</a>
									</span>
								</div>
							</form>
							<!-- END HEADER SEARCH BOX -->
							<!-- Notification Component -->
							<!-- BEGIN USER PROFILE -->
							<!-- User Profile Actions Component -->
							<m-user-actions :user-actions="UserActionsList"></m-user-actions>
							<!-- END USER PROFILE -->
						</div>
						<!-- END TOPBAR ACTIONS -->
					</div>
				</div>
				<!--/container-->
			</nav>
		</header>
		<!-- END HEADER -->
		<!-- BEGIN CONTAINER -->
		<div class="container-fluid">
			<div class="page-content page-content-popup">
				<div class="page-content-fixed-header">
					<!-- BEGIN BREADCRUMBS -->
					<m-breadcrumbs></m-breadcrumbs>
					<!-- END BREADCRUMBS -->
					<div class="content-header-menu">
						<!-- BEGIN MENU TOGGLER -->
						<button type="button" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
							<span class="toggle-icon">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</span>
						</button>
						<!-- END MENU TOGGLER -->
					</div>
				</div>
				<div class="page-sidebar-wrapper">
					<!-- BEGIN SIDEBAR -->
					<!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
					<!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
					<div class="page-sidebar navbar-collapse collapse" data-auto-scroll="false">
						<!-- BEGIN SIDEBAR MENU -->
						<!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
						<!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
						<!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
						<!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
						<!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
						<!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
						<m-sidebar-menu :list-menu="SideBarList"></m-sidebar-menu>
						<!-- END SIDEBAR MENU -->
					</div>
					<!-- END SIDEBAR -->
				</div>
				<div class="page-fixed-main-content">
					<!-- BEGIN PAGE BASE CONTENT -->
					<router-view></router-view>
					<!-- END PAGE BASE CONTENT -->
				</div>
				<!-- BEGIN FOOTER -->
				<p class="copyright-v2"> 2016 &copy; Metronic Theme By
					<a target="_blank" href="http://keenthemes.com">Keenthemes</a> &nbsp;|&nbsp;
					<a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
				</p>
				<a href="#index" class="go2top">
					<i class="icon-arrow-up"></i>
				</a>
				<!-- END FOOTER -->
			</div>
		</div>
		<!-- END CONTAINER -->
	</div>
</template>

<script>
// Components
import MBreadcrumb from "./components/metronic/navigation/m-breadcrumb.vue"
import MSidebar from "./components/metronic/navigation/m-sidebar-menu.vue"
import MUserActions from "./components/metronic/navigation/m-user-actions.vue"

// Data
import SideBarList from "./Data/sidebar-menu"
import UserActionsList from "./Data/user-actions"

export default {
	components: {
		"m-breadcrumbs": MBreadcrumb,
		"m-sidebar-menu": MSidebar,
		"m-user-actions": MUserActions
	},
	// name: "AppComponent",
	data () {
		return {
			SideBarList,
			UserActionsList
		}
	}
}
</script>