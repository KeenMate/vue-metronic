<template>
<m-row>
	<m-column :size="6">
		<m-portlet title="Buttons" caption="Not sure if this works..">
			<m-portlet-block>
				<h4 class="block">Default Bootstrap Buttons(Customized to Match Theme Style)</h4>
				<!-- Standard gray button with gradient -->
			</m-portlet-block>
			<m-portlet-block>
				<m-button icon="fa fa-user" size="large" color="blue" buttonStyle="metronic-outline">With icon</m-button>
				<m-button type="primary" buttonStyle="bootstrap">Primary</m-button>
				<m-button type="success" buttonStyle="bootstrap">Success</m-button>
				<m-button type="info" buttonStyle="bootstrap">Info</m-button>
				<m-button type="warning" buttonStyle="bootstrap">Warning</m-button>
				<m-button type="danger" buttonStyle="bootstrap">Danger</m-button>
				<m-button type="link" buttonStyle="bootstrap">Link</m-button>
			</m-portlet-block>
			<m-portlet-block>
				<button type="button" class="btn btn-default">Default</button>
				<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
				<button type="button" class="btn btn-primary">Primary</button>
				<!-- Indicates a successful or positive action -->
				<button type="button" class="btn btn-success">Success</button>
				<!-- Contextual button for informational alert messages -->
				<button type="button" class="btn btn-info">Info</button>
				<!-- Indicates caution should be taken with this action -->
				<button type="button" class="btn btn-warning">Warning</button>
				<!-- Indicates a dangerous or potentially negative action -->
				<button type="button" class="btn btn-danger">Danger</button>
				<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
				<button type="button" class="btn btn-link">Link</button>
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
						<p>
						<button type="button" class="btn default">Default</button>
						<button type="button" class="btn red">Red</button>
						<button type="button" class="btn blue">Blue</button>
						<button type="button" class="btn green">Green</button>
						<button type="button" class="btn yellow">Yellow</button>
						<button type="button" class="btn purple">Purple</button>
						<button type="button" class="btn dark">Dark</button>
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
					<p>
						<button type="button" class="btn dark">Dark</button>
						<button type="button" class="btn red-mint">Red</button>
						<button type="button" class="btn blue-hoki">Blue</button>
						<button type="button" class="btn green-haze">Green</button>
						<button type="button" class="btn yellow-mint">Yellow</button>
						<button type="button" class="btn purple-sharp">Purple</button>
						<button type="button" class="btn grey-mint">Grey</button>
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
					<p>
						<button type="button" class="btn default btn-outline">Default</button>
						<button type="button" class="btn red btn-outline">Red</button>
						<button type="button" class="btn blue btn-outline">Blue</button>
						<button type="button" class="btn green btn-outline">Green</button>
						<button type="button" class="btn yellow btn-outline">Yellow</button>
						<button type="button" class="btn purple btn-outline">Purple</button>
						<button type="button" class="btn dark btn-outline">Dark</button>
					</p>
					<p>
						<button type="button" class="btn dark btn-outline sbold uppercase">Dark</button>
						<button type="button" class="btn red-mint btn-outline sbold uppercase">Red</button>
						<button type="button" class="btn blue-hoki btn-outline sbold uppercase">Blue</button>
						<button type="button" class="btn green-haze btn-outline sbold uppercase">Green</button>
						<button type="button" class="btn yellow-mint btn-outline sbold uppercase">Yellow</button>
						<button type="button" class="btn purple-sharp btn-outline sbold uppercase">Purple</button>
						<button type="button" class="btn grey-mint btn-outline sbold uppercase">Grey</button>
					</p>
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">More Button Colors(go to
						<a href="ui_colors.html"> ui_colors.html </a> for more colors) </h4>
						<button type="button" class="btn blue-hoki">Blue Hoki</button>
						<button type="button" class="btn blue-madison">Blue Madison</button>
						<button type="button" class="btn green-meadow">Green Meadow</button>
						<button type="button" class="btn red-sunglo">Red Sunglo</button>
						<button type="button" class="btn yellow-crusta">Yellow Crusta</button>
						<button type="button" class="btn purple-plum">Purple Plum</button>
						<button type="button" class="btn grey-cascade">Grey Cascade</button>
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Disabled</h4>
					<a href="javascript:;" class="btn default disabled"> Default </a>
					<a href="javascript:;" class="btn red disabled"> Red </a>
					<a href="javascript:;" class="btn blue disabled"> Blue </a>
					<a href="javascript:;" class="btn green disabled"> Green </a>
					<a href="javascript:;" class="btn yellow disabled"> Yellow </a>
					<a href="javascript:;" class="btn purple disabled"> Purple </a>
					<a href="javascript:;" class="btn dark disabled"> Dark </a>
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Button Sizes</h4>
					<m-button size="large" color="default">Large button</m-button>
					<m-button color="red">Default button</m-button>
					<m-button size="small" color="blue">Small button</m-button>
					<m-button size="extra-small" color="green">Extra small button</m-button>
					<br />
					<button type="button" class="btn default btn-lg">Large button</button>
					<button type="button" class="btn red">Default button</button>
					<button type="button" class="btn blue btn-sm">Small button</button>
					<button type="button" class="btn green btn-xs">Extra small button</button>
				</m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Button Tags</h4>
					<a href="javascript:;" class="btn default"> Link </a>
					<button class="btn default">Button</button>
					<input type="button" class="btn default" value="Input">
					<input type="submit" class="btn default" value="Submit"> </m-portlet-block>
				<m-portlet-block>
					<h4 class="block">Block Buttons</h4>
					<a href="javascript:;" class="btn default btn-block"> Link </a>
					<button class="btn blue btn-block">Button</button>
					<input type="button" class="btn red btn-block" value="Input">
					<input type="submit" class="btn purple btn-block" value="Submit">
					<button class="btn blue btn-block btn-outline ">Button</button>
					<input type="button" class="btn red btn-outline btn-block" value="Input">
					<input type="submit" class="btn purple btn-outline  btn-block" value="Submit">
					<button class="btn yellow-mint btn-block btn-outline sbold uppercase">Button</button>
					<input type="button" class="btn red-mint btn-outline btn-block sbold uppercase" value="Input">
					<input type="submit" class="btn green-sharp btn-outline  btn-block sbold uppercase" value="Submit"> </m-portlet-block>

			</m-portlet-block>
		</m-portlet>
	</m-column>
	<m-column :size="6">
		<m-portlet title="Button groups">
			<m-portlet-block>
				<h4>Basic Example</h4>
				<div class="btn-group">
					<m-button buttonStyle="bootstrap">Left</m-button>
					<m-button buttonStyle="bootstrap">Middle</m-button>
					<m-button buttonStyle="bootstrap">Right</m-button>
				</div>
				<div class="btn-group">
					<m-button color="red">Left</m-button>
					<m-button color="yellow">Middle</m-button>
					<m-button color="green">Right</m-button>
				</div>
			</m-portlet-block>
		</m-portlet>
	</m-column>
</m-row>
</template>


<script>
import ButtonComponent from "../components/metronic/ui/m-button.vue"
import PortletComponent from "../components/metronic/structure/m-portlet.vue"
import PortletBlock from "../components/metronic/structure/m-portlet-block.vue"
import Column from "../components/metronic/structure/m-column.vue"
import Row from "../components/metronic/structure/m-row.vue"

export default {
	name: "ButtonsScreen",
	components: {
		"m-button": ButtonComponent,
		"m-portlet": PortletComponent,
		"m-portlet-block": PortletBlock,
		"m-column": Column,
		"m-row": Row
	}
}
</script>