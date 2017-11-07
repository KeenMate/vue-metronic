const menu = [
	{
		"Heading": "Sidebar menu"
	},
	{
		"Title": "Home",
		"LinkIcon": "icon-home",
		"RouteName": "home"
	},
	{
		"Title": "UI Features",
		"LinkIcon": "icon-settings",
		"SubMenu": [{
			"Title": "Buttons",
			"LinkIcon": "icon-puzzle",
			"RouteName": "ui-buttons"
		},
		{
			"Title": "Metronic Grid System",
			"LinkIcon": "icon-puzzle",
			"RouteName": "ui-grid-system"
		},
		{
			"Title": "General components",
			"RouteName": "ui-general-components"
		}]
	},
	{
		"Title": "Portlets",
		"LinkIcon": "icon-wallet",
		"SubMenu": [
			{
				"Title": "Boxed Portlets",
				"RouteName": "portlets-boxed"
			},
			{
				"Title": "Light Portlets",
				"RouteName": "portlets-light"
			},
			{
				"Title": "Solid Portlets",
				"RouteName": "portlets-solid"
			}
		]
	},
	{
		"Title": "Form Stuff",
		"LinkIcon": "icon-settings",
		"SubMenu": [
			{
				"Title": "Bootstrap Form Controls",
				"RouteName": "forms-bootstrap"
			}
		]
	},
	{
		"Title": "Routing examples",
		"SubMenu": [
			{
				"Title": "Route 1",
				"RouteName": "route1"
			},
			{
				"Title": "Route 2",
				"RouteName": "route2"
			},
			{
				"Title": "Route 3",
				"RouteName": "route3"
			}
		]
	}
]

export default menu
