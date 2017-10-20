import Home from "./components/Home.vue"
import Error404 from "./components/error404.vue"
import NewExpenseForm from "./components/v-expense-form.vue"
import { EmptyScreen } from "./Screens"
import RoutingScreen from "./Screens/routing.vue"
import ButtonsScreen from "./Screens/buttons.vue"

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
	children: [{
		path: "novaPlatba",
		name: "newExpense",
		component: NewExpenseForm,
		meta: {
			Title: "Nová platba"
		}
	},
	{
		path: "buttons",
		name: "buttons",
		component: ButtonsScreen,
		meta: {
			Title: "Buttons  1 "
		}
	},
	{
		path: "empty",
		name: "empty",
		component: EmptyScreen,
		meta: {
			Title: "Empty"
		}
	}

	],
	meta: {
		Title: "Hauser"
	}
},
{
	path: "/ui/buttons",
	name: "ui-buttons",
	component: ButtonsScreen
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
			Title: "Route 1"
		}
	}

	],
	meta: {
		Title: "Routing"
	}
},
{
	path: "*",
	component: Error404
}
]
