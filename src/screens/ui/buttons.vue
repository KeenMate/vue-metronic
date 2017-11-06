<template>
<m-row>
	<m-column :size="6">
		<m-portlet title="Buttons" type="light" bordered
			caption="tasks summary.."
			title-color="green-haze"
			title-bold
			title-uppercased>
			<m-portlet-block>
				<h4 class="block">Default Bootstrap Buttons(Customized to Match Theme Style)</h4>
				<!-- Standard gray button with gradient -->
			</m-portlet-block>
			<m-portlet-block>
				<m-button button-style="bootstrap">Default</m-button>
				<m-button level="primary" buttonStyle="bootstrap">Primary</m-button>
				<m-button level="success" buttonStyle="bootstrap">Success</m-button>
				<m-button level="info" buttonStyle="bootstrap">Info</m-button>
				<m-button level="warning" buttonStyle="bootstrap">Warning</m-button>
				<m-button level="danger" buttonStyle="bootstrap">Danger</m-button>
				<m-button level="link" buttonStyle="bootstrap">Link</m-button>
			</m-portlet-block>
			<m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Metronic Custom Buttons</h4>
				</m-portlet-block>
				<m-portlet-block>
						<p>
							<m-button color="default">Default</m-button>
							<m-button color="red">Red</m-button>
							<m-button color="blue">Blue</m-button>
							<m-button color="green">Green</m-button>
							<m-button color="yellow">Yellow</m-button>
							<m-button color="purple">Purple</m-button>
							<m-button color="dark">Dark</m-button>
						</p>
				</m-portlet-block>
				<m-portlet-block>
					<p>
						<m-button color="dark">Dark</m-button>
						<m-button color="red-mint">Red</m-button>
						<m-button color="blue-hoki">Blue</m-button>
						<m-button color="green-haze">Green</m-button>
						<m-button color="yellow-mint">Yellow</m-button>
						<m-button color="purple-sharp">Purple</m-button>
						<m-button color="grey-mint">Grey</m-button>
					</p>
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Metronic Outline Buttons</h4>
					<p>
						<m-button color="default" buttonStyle="metronic-outline">Default</m-button>
						<m-button color="red" buttonStyle="metronic-outline">Red</m-button>
						<m-button color="blue" buttonStyle="metronic-outline">Blue</m-button>
						<m-button color="green" buttonStyle="metronic-outline">Green</m-button>
						<m-button color="yellow" buttonStyle="metronic-outline">Yellow</m-button>
						<m-button color="purple" buttonStyle="metronic-outline">Purple</m-button>
						<m-button color="dark" buttonStyle="metronic-outline">Dark</m-button>
					</p>
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">More Button Colors(go to
						<a href="ui_colors.html"> ui_colors.html </a> for more colors) </h4>
						<m-button color="blue-hoki">Blue Hoki</m-button>
						<m-button color="blue-madison">Blue Madison</m-button>
						<m-button color="green-meadow">Green Meadow</m-button>
						<m-button color="red-sunglo">Red Sunglo</m-button>
						<m-button color="yellow-crusta">Yellow Crusta</m-button>
						<m-button color="purple-plum">Purple Plum</m-button>
						<m-button color="grey-cascade">Grey Cascade</m-button>
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Disabled</h4>
					<a href="javascript:" class="btn default disabled"> Default </a>
					<a href="javascript:" class="btn red disabled"> Red </a>
					<a href="javascript:" class="btn blue disabled"> Blue </a>
					<a href="javascript:" class="btn green disabled"> Green </a>
					<a href="javascript:" class="btn yellow disabled"> Yellow </a>
					<a href="javascript:" class="btn purple disabled"> Purple </a>
					<a href="javascript:" class="btn dark disabled"> Dark </a>
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Button Sizes</h4>
					<m-button size="large" color="default">Large button</m-button>
					<m-button color="red">Default button</m-button>
					<m-button size="small" color="blue">Small button</m-button>
					<m-button size="extra-small" color="green">Extra small button</m-button>
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Button Tags</h4>
					<a href="javascript:" class="btn default"> Link </a>
					<m-button button-style="bootstrap">Button</m-button>
					<input type="button" class="btn default" value="Input">
					<input type="submit" class="btn default" value="Submit"> 
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Block Buttons</h4>
					<a href="javascript:" class="btn default btn-block"> Link </a>
					<m-button button-style="bootstrap" color="blue btn-block">Button</m-button>
					<input type="button" class="btn red btn-block" value="Input">
					<input type="submit" class="btn purple btn-block" value="Submit">
					<m-button button-style="bootstrap" color="blue btn-block btn-outline ">Button</m-button>
					<input type="button" class="btn red btn-outline btn-block" value="Input">
					<input type="submit" class="btn purple btn-outline  btn-block" value="Submit">
					<m-button button-style="metronic-outline" color="yellow-mint" block bold uppercased>Button</m-button>
					<input type="button" class="btn red-mint btn-outline btn-block sbold uppercase" value="Input">
					<input type="submit" class="btn green-sharp btn-outline  btn-block sbold uppercase" value="Submit"> </m-portlet-block>

			</m-portlet-block>
		</m-portlet>
	</m-column>
	<m-column :size="6">
		<m-portlet title="Button groups" type="light" 
			bordered icon-color="red-mint" 
			icon="icon-settings" 
			title-color="red-mint" 
			title-bold 
			title-uppercased>

			<m-portlet-block>
				<h4>Basic Example</h4>
				<m-button-group>
					<m-button buttonStyle="bootstrap">Left</m-button>
					<m-button buttonStyle="bootstrap">Middle</m-button>
					<m-button buttonStyle="bootstrap">Right</m-button>
				</m-button-group>
				<m-button-group>
					<m-button color="red">Left</m-button>
					<m-button color="yellow">Middle</m-button>
					<m-button color="green">Right</m-button>
				</m-button-group>
			</m-portlet-block>

			<m-portlet-block>
				<h4 class="block">Button Toolbar</h4>
				<m-button-toolbar :custom-css="['margin-bottom-10']">
					<m-button-group>
						<m-button button-style="bootstrap">1</m-button>
						<m-button button-style="bootstrap">2</m-button>
						<m-button button-style="bootstrap">3</m-button>
						<m-button button-style="bootstrap">4</m-button>
					</m-button-group>
					<m-button-group>
						<m-button button-style="bootstrap">5</m-button>
						<m-button button-style="bootstrap">6</m-button>
						<m-button button-style="bootstrap">7</m-button>
					</m-button-group>
					<m-button-group>
						<m-button button-style="bootstrap">8</m-button>
					</m-button-group>
				</m-button-toolbar>
				<m-button-toolbar>
					<m-button-group solid>
							<m-button button-style="bootstrap" color="red" >1</m-button>
							<m-button button-style="bootstrap" color="green" >2</m-button>
							<m-button button-style="bootstrap" color="blue" >3</m-button>
							<m-button button-style="bootstrap" color="yellow" >4</m-button>
					</m-button-group>
					<m-button-group solid>
							<m-button button-style="bootstrap" color="purple" >5</m-button>
							<m-button button-style="bootstrap" color="dark" >6</m-button>
							<m-button button-style="bootstrap" color="default" >7</m-button>
					</m-button-group>
					<m-button-group solid>
							<m-button button-style="bootstrap" color="red" >8</m-button>
					</m-button-group>
				</m-button-toolbar>
			</m-portlet-block>

			<m-portlet-block>
				<h4 class="block">Button Group Sizing</h4>
				<m-button-toolbar>
						<m-button-group solid size="large" :custom-css="['margin-bottom-10']">
							<m-button color="red">Left</m-button>
							<m-button color="green">Middle</m-button>
							<m-button color="blue">Right</m-button>
						</m-button-group>
				</m-button-toolbar>
				<m-button-toolbar :custom-css="['margin-bottom-10']">
						<m-button-group solid>
								<m-button color="red">Left</m-button>
								<m-button color="green">Middle</m-button>
								<m-button color="blue">Right</m-button>
						</m-button-group>
				</m-button-toolbar>
				<m-button-toolbar :custom-css="['margin-bottom-10']">
						<m-button-group solid size="small">
								<m-button color="red">Left</m-button>
								<m-button color="green">Middle</m-button>
								<m-button color="blue">Right</m-button>
						</m-button-group>
				</m-button-toolbar>
				<m-button-toolbar :custom-css="['margin-bottom-10']">
						<m-button-group solid size="extra-small">
								<m-button color="red">Left</m-button>
								<m-button color="green">Middle</m-button>
								<m-button color="blue">Right</m-button>
						</m-button-group>
				</m-button-toolbar>
			</m-portlet-block>
		</m-portlet>
	</m-column>
</m-row>
</template>

<script>
import mButton from "../../components/metronic/ui/m-button.vue"
import mButtonGroup from "../../components/metronic/ui/m-button-group.vue"
import mButtonToolbar from "../../components/metronic/ui/m-button-toolbar.vue"
import mPortlet from "../../components/metronic/structure/m-portlet.vue"
import mPortletBlock from "../../components/metronic/structure/m-portlet-block.vue"
import mColumn from "../../components/metronic/structure/m-column.vue"
import mRow from "../../components/metronic/structure/m-row.vue"

import Ladda from "ladda"
import $ from "jquery"

export default {
	name: "ButtonsScreen",
	components: {
		mColumn,
		mRow,
		mPortlet,
		mPortletBlock,
		mButton,
		mButtonGroup,
		mButtonToolbar	
	},
	mounted: function () {
		this.initPage()
	},
	methods: {
		initPage: function () {
			$(".demo-loading-btn").click(function () {
            var btn = $(this)
            btn.button("loading")
            setTimeout(function () {
                btn.button("reset")
            }, 3000)
        })

        Ladda.bind(".mt-ladda-btn", { timeout: 2000 })
        Ladda.bind(".mt-ladda-btn.mt-progress-demo ", {
                callback: function(instance) {
                    var progress = 0
                    var interval = setInterval(function() {
                        progress = Math.min(progress + Math.random() * 0.1, 1)
                        instance.setProgress(progress)

                        if (progress === 1) {
                            instance.stop()
                            clearInterval(interval)
                        }
                    }, 200)
                }
            })
		}
	}
}
</script>