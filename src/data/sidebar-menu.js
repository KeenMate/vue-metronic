const menu = [{
	"Heading": "Home"
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
	"SubMenu": [
		{
			"Title": "Something to home",
			"RouteName": "home"
		}
	]
},
{
	"Heading": "Another Heading"
}
]

export default menu
