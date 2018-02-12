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
			"RouteName": "ui-buttons"
		},
		{
			"Title": "Metronic Grid System",
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
				"RouteName": "bootstrap-forms"
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
	},
	{
		"Title": "Development testing",
		"LinkIcon": "fa fa-code",
		"SubMenu": [
			{
				"Title": "Tabs testing",
				"RouteName": "tabs"
			},
			{
				"Title": "Forms testing",
				"RouteName": "validations"
			}
		]
	}
]

export default menu
