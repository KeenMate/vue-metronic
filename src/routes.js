import Home from "./components/Home.vue"
import Error404 from "./components/error404.vue"
import NewExpenseForm from "./components/v-expense-form.vue"
import EmptyScreen from "./screens/empty.vue"
import RoutingScreen from "./screens/routing.vue"
import ButtonsScreen from "./screens/buttons.vue"
import GridSystem from "./screens/ui/grid-system.vue"
import UnderDevelopment from "./screens/under-development.vue"

import PortletsLight from "./screens/portlets/light.vue"
import PortletsBoxed from "./screens/portlets/boxed.vue"

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
	children: [],
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
		}
	],
	meta: {
		title: "Portlets"
	}
},

{
	path: "/routing",
	name: "routing",
	component: RoutingScreen,
	children: [{
		path: "route1",
		name: "routing/route1",
		component: RoutingScreen,
		meta: {
			title: "Route 1"
		}
	}

	],
	meta: {
		title: "Routing"
	}
},
{
	path: "*",
	component: Error404
}
]
