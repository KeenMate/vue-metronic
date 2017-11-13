import Home from "./components/Home.vue"
import Error404 from "./screens/error404.vue"
import EmptyScreen from "./screens/empty.vue"
import RoutingScreen from "./screens/routing.vue"
import ButtonsScreen from "./screens/ui/buttons.vue"
import GridSystem from "./screens/ui/grid-system.vue"
import GeneralComponentsScreen from "./screens/ui/general-components.vue"
import UnderDevelopment from "./screens/under-development.vue"

import PortletsLight from "./screens/portlets/light.vue"
import PortletsBoxed from "./screens/portlets/boxed.vue"

import BootstrapForms from "./screens/forms/bootstrap-form-controls.vue"

export const routes = [{
	path: "/",
	redirect: {
		name: "home"
	}
},
{
	path: "/home",
	name: "home",
	component: Home,
	meta: {
		title: "Home"
	}
},
{
	name: "ui-features",
	path: "/ui/",
	component: EmptyScreen,
	children: [
		{
			path: "buttons",
			name: "ui-buttons",
			component: ButtonsScreen,
			meta: {
				title: "Buttons"
			}
		},
		{
			path: "grid-system",
			name: "ui-grid-system",
			component: GridSystem,
			meta: {
				title: "Metronic Grid System"
			}
		},
		{
			path: "general-components",
			name: "ui-general-components",
			component: GeneralComponentsScreen,
			meta: {
				title: "General Components"
			}
		}
	],
	meta: {
		title: "UI Features"
	}
},
{
	name: "portlets",
	path: "/portlets/",
	component: EmptyScreen,
	children: [
		{
			path: "light",
			name: "portlets-light",
			component: PortletsLight,
			meta: {
				title: "Light Portlets"
			}
		},
		{
			path: "boxed",
			name: "portlets-boxed",
			component: PortletsBoxed,
			meta: {
				title: "Boxed Portlets"
			}
		},
		{
			path: "solid",
			name: "portlets-solid",
			component: UnderDevelopment,
			meta: {
				title: "Solid Portlets"
			}
		}
	],
	meta: {
		title: "Portlets"
	}
},
{
	name: "forms",
	path: "/forms/",
	component: EmptyScreen,
	children: [
		{
			path: "bootstrap",
			name: "bootstrap-forms",
			component: BootstrapForms,
			meta: {
				title: "Bootstrap Form Controls"
			}
		},
		{
			path: "boxed",
			name: "portlets-boxed",
			component: PortletsBoxed,
			meta: {
				title: "Boxed Portlets"
			}
		},
		{
			path: "solid",
			name: "portlets-solid",
			component: UnderDevelopment,
			meta: {
				title: "Solid Portlets"
			}
		}
	],
	meta: {
		title: "Portlets"
	}
},
{
	path: "/routing-examples",
	name: "routing",
	component: RoutingScreen,
	children: [
		{
			path: "route1",
			name: "route1",
			component: RoutingScreen,
			meta: {
				title: "Route 1"
			}
		},
		{
			path: "route2",
			name: "route2",
			component: RoutingScreen,
			meta: {
				title: "Route 2"
			}
		},
		{
			path: "route3",
			name: "route3",
			component: RoutingScreen,
			meta: {
				title: "Route 3"
			}
		}
	],
	meta: {
		title: "Routing Examples"
	}
},
{
	path: "*",
	component: Error404
}]
