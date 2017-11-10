<template>
<m-row>
	<m-column :size="6">
		<!-- BEGIN PORTLET-->
		<m-portlet
			type="light"
			title="Alerts"
			icon="icon-share" 
			icon-color="dark"
			title-color="dark"
			bordered
			title-bold
			title-uppercased
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;"> </a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<h4 class="block">Default Alerts</h4>
				<m-alert level="success">
						<strong>Success!</strong> The page has been added.
				</m-alert>
				<m-alert>
						<strong>Info!</strong> You have 198 unread messages. 
				</m-alert>
				<m-alert level="warning">
						<strong>Warning!</strong> Your monthly traffic is reaching limit.
				</m-alert>
				<m-alert level="danger">
						<strong>Error!</strong> The daily cronjob has failed.
				</m-alert>
												
				<h4 class="block">Dismissable Alerts</h4>
				<m-alert level="warning" dismissable>
						<strong>Warning!</strong> Something went wrong. Please check.
				</m-alert>
				<h4 class="block">Links in alerts</h4>
				<m-alert level="success" dismissable>
						<strong>WOW!</strong> Well done and everything looks OK.
						<a href="" class="alert-link"> Please check this one as well </a>
				</m-alert>                
			</m-portlet-block>
		</m-portlet>
		<!-- END PORTLET-->
		<!-- BEGIN PORTLET-->
		<m-portlet
			type="light"
			title="Inline Notifications"
			icon="icon-share"
			icon-color="dark"
			title-color="dark"
			bordered
			captionBold
			captionUppercased
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<m-alert heading="Error!" level="danger" closeButton fadeIn>
					<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
					<p>
						<a class="btn red" href="javascript:;"> Do this </a>
						<a class="btn blue" href="javascript:;"> Cancel </a>
					</p>
				</m-alert>
				<m-alert heading="Success!" level="success" closeButton fadeIn>
						<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
						<p>
								<a class="btn green" href="javascript:;"> Do this </a>
								<a class="btn btn-link" href="javascript:;"> Cancel </a>
						</p>
				</m-alert>
				<m-alert heading="Info!" level="info" closeButton fadeIn>
					<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
					<p>
						<a class="btn purple" href="javascript:;"> Do this </a>
						<a class="btn dark" href="javascript:;"> Cancel </a>
					</p>
				</m-alert>
				<m-alert heading="Warning!" level="warning" closeButton fadeIn>
					<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
					<p>
						<a class="btn red" href="javascript:;"> Do this </a>
						<a class="btn blue" href="javascript:;"> Cancel </a>
					</p>
				</m-alert>
			</m-portlet-block>
		</m-portlet>
		<!-- END PORTLET-->
		<!-- BEGIN PORTLET-->
		<m-portlet
			type="light"
			title="Pulsate"
			icon="icon-share" 
			icon-color="dark"
			title-color="dark"
			bordered
			captionBold
			captionUppercased
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
				<h4>Pulsate any page elements.</h4>
				<div class="margin-top-10 margin-bottom-10 clearfix">
					<table class="table table-bordered table-striped">
						<tbody>
							<tr>
								<td> Repeating Pulsate </td>
								<td>
									<div id="pulsate-regular" style="padding:5px;"> Repeating Pulsate </div>
								</td>
							</tr>
							<tr>
								<td>
									<m-button id="pulsate-once" type="bootstrap" @click="pulsateOnce()" color="green">Pulsate Once</m-button>
								</td>
								<td>
									<div id="pulsate-once-target" style="padding:5px;"> Pulsate me </div>
								</td>
							</tr>
							<tr>
								<td>
									<m-button type="bootstrap" id="pulsate-crazy" @click="pulsateCrazy()" color="red">Crazy Pulsate</m-button>
								</td>
								<td>
									<div id="pulsate-crazy-target" style="padding:5px;"> Pulsate me </div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<m-label level="danger" :roundless="false" text="NOTE!" />
				<span> Pulsate is supported in Latest Firefox, Chrome, Opera, Safari and Internet Explorer 9 and Internet Explorer 10 only. </span>
		
		</m-portlet>
		<!-- END PORTLET-->
		<!-- BEGIN PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Modal Dialogs"
			title-color="dark"
			title-bold
			title-uppercased
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<h4>Click on below buttons to check it out.</h4>
				<m-link-button title="Modal Dialog" href="#myModal1" type="button" color="blue" data-toggle="modal"/>
				<m-link-button title="Alert" href="#myModal2" type="button" color="red" data-toggle="modal"/>
				<m-link-button title="Confirm" href="#myModal3" type="button" color="yellow" data-toggle="modal"/>
				<m-modal-dialog
					id="myModal1"
					title="Modal title for us"
					labelled-by="myModalLabel1"
					ref="myModal1"
				>
					<template slot="body">
						<p> Body goes here... </p>
					</template>
					<template slot="footer">
						<m-button
							dismiss="modal"
							aria-hidden="true"
						>
							Close
						</m-button>
						<m-button color="yellow">
							Save
						</m-button>
					</template>
				</m-modal-dialog>
				<m-modal-dialog
					id="myModal2"
					labelled-by="myModalLabel2"
					title="Alert Header"
					ref="myModal2"
				>
					<template slot="body">
						<p> Body goes here... </p>
					</template>
					<template slot="footer">
						<m-button
							dismiss="modal"
							color="green"
						>
							OK
						</m-button>
					</template>
				</m-modal-dialog>
				<m-modal-dialog
					id="myModal3"
					title="Confirm Header"
					labelled-by="myModalLabel3"
					ref="myModal3"
				>
					<template slot="body">
						<p> Body goes here... </p>
					</template>
					<template slot="footer">
						<m-button
							dismiss="modal"
							aria-hidden="true"
						>
							Close
						</m-button>
						<m-button
							dismiss="modal"
							color="blue"
						>
							Confirm
						</m-button>
					</template>
				</m-modal-dialog>
			</m-portlet-block>
		</m-portlet>
		<!-- END MODAL DIALOG PORTLET-->
		<!-- BEGIN TOOLTIPS PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Tooltips"
			title-bold
			title-uppercased
			title-color="green-sharp"
			icon="icon-share"
			icon-color="green-sharp"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<p>
					Tight pants next level keffiyeh
					<a href="javascript:;" class="tooltips" data-original-title="Very long toolips Very long toolips Very long toolips Very long toolips"> you probably </a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel
					<a href="javascript:;"
						class="tooltips" data-original-title="Another tooltip"> have a </a> terry richardson vinyl chambray.
					<a href="javascript:;" class="tooltips" title="12" data-original-title="The last tip!"> twitter handle </a> freegan cred raw denim single-origin coffee viral.
				</p>
				<m-button
					tooltip="Tooltip in top"
					tooltip-placement="top"
					button-style="bootstrap"
					level="default"
				>Top</m-button>
				<m-button
					tooltip="Tooltip in Left"
					tooltip-placement="left"
					button-style="bootstrap"
					level="default"
				>Left</m-button>
				<m-button
					tooltip="Tooltip in right"
					tooltip-placement="right"
					button-style="bootstrap"
					level="default"
				>Right</m-button>
				<m-button
					tooltip="Tooltip in bottom"
					tooltip-placement="bottom"
					button-style="bootstrap"
					level="default"
				>
					Bottom
				</m-button>
			</m-portlet-block>
		</m-portlet>
		<!-- END TOOLTIPS PORTLET-->
		<!-- BEGIN POPOVERS PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Popovers"
			title-bold
			title-uppercased
			title-color="red-sunglo"
			icon="icon-share"
			icon-color="red-sunglo"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<p>
					Tight pants next level keffiyeh
					<a href="javascript:;" class="popovers" data-container="body" data-content="Popover body goes here! Popover body goes here!" data-original-title="Default Popover"> trigger me on click </a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel
					<a href="javascript:;" class="popovers" data-container="body" data-trigger="hover" data-content="Popover body goes here! Popover body goes here!" data-original-title="Another Popover"> trigger me on hover </a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa.
				</p>
				<m-button
					popover="Popover in top"
					popover-content="Popover body goes here! Popover body goes here!"
					tooltip-placement="top"
					popover-trigger="hover"
					button-style="bootstrap"
					level="default"
				>Top</m-button>
				<m-button
					popover="Popover in left"
					popover-content="Popover body goes here! Popover body goes here!"
					tooltip-placement="left"
					popover-trigger="hover"
					button-style="bootstrap"
					level="default"
				>Left</m-button>
				<m-button
					popover="Popover in right"
					popover-content="Popover body goes here! Popover body goes here!"
					tooltip-placement="right"
					popover-trigger="hover"
					button-style="bootstrap"
					level="default"
				>Right</m-button>
				<m-button
					popover="Popover in bottom"
					popover-content="Popover body goes here! Popover body goes here!"
					tooltip-placement="bottom"
					popover-trigger="hover"
					button-style="bootstrap"
					level="default"
				>Bottom</m-button>
			</m-portlet-block>
		</m-portlet>
		<!-- END POPOVERS PORTLET-->
		<!-- BEGIN LIST PORTLET-->
		<m-portlet
			title="List Groups"
			title-bold
			title-uppercased
			title-color="green-sharp"
			icon="icon-share"
			icon-color="green-sharp"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<h4 class="block">Basic</h4>
				<m-list-group>
					<m-list-group-item> Cras justo odio </m-list-group-item>
					<m-list-group-item> Dapibus ac facilisis in </m-list-group-item>
					<m-list-group-item> Morbi leo risus </m-list-group-item>
					<m-list-group-item> Porta ac consectetur ac </m-list-group-item>
					<m-list-group-item> Vestibulum at eros </m-list-group-item>
				</m-list-group>
				<h4 class="block">Custom Colors(refer to ui_colors.html for more colors)</h4>
				<m-list-group>
					<m-list-group-item bg-color="blue" font-color="blue"> Cras justo odio </m-list-group-item>
					<m-list-group-item bg-color="red" font-color="red"> Dapibus ac facilisis in </m-list-group-item>
					<m-list-group-item bg-color="green" font-color="red"> Morbi leo risus </m-list-group-item>
					<m-list-group-item bg-color="purple" font-color="purple"> Porta ac consectetur ac </m-list-group-item>
					<m-list-group-item bg-color="yellow" font-color="yellow"> Vestibulum at eros </m-list-group-item>
				</m-list-group>
				<h4 class="block">Badges</h4>
				<m-list-group>
					<m-list-group-item bg-color="blue" font-color="blue"> Cras justo odio </m-list-group-item>
					<m-list-group-item bg-color="red" font-color="red"> Dapibus ac facilisis in </m-list-group-item>
					<m-list-group-item bg-color="green" font-color="red"> Morbi leo risus </m-list-group-item>
					<m-list-group-item bg-color="purple" font-color="purple"> Porta ac consectetur ac </m-list-group-item>
					<m-list-group-item bg-color="yellow" font-color="yellow"> Vestibulum at eros </m-list-group-item>
				</m-list-group>
				<m-list-group>
					<m-list-group-item> Cras justo odio
						<m-badge level="default" text="3" rounded />
					</m-list-group-item>
					<m-list-group-item> Dapibus ac facilisis in
						<m-badge level="success" text="11" rounded />
					</m-list-group-item>
					<m-list-group-item> Morbi leo risus
						<m-badge level="danger" text="new" rounded />
					</m-list-group-item>
					<m-list-group-item> Porta ac consectetur ac
						<m-badge level="warning" text="4" rounded />
					</m-list-group-item>
					<m-list-group-item> Vestibulum at eros
						<m-badge level="info" text="3" rounded />
					</m-list-group-item>
				</m-list-group>
				<h4 class="block">Contextual States</h4>
				<m-list-group>
					<m-list-group-item> Default </m-list-group-item>
					<m-list-group-item level="success"> Success </m-list-group-item>
					<m-list-group-item level="info"> Info
						<m-badge level="warning" text="3" rounded />
					</m-list-group-item>
					<m-list-group-item level="warning"> Warning
						<m-badge text="3" rounded />
					</m-list-group-item>
					<m-list-group-item level="danger"> Danger </m-list-group-item>
				</m-list-group>
				<h4 class="block">Disabled States</h4>
				<m-list-group>
					<m-list-group-item disabled> Item 1 </m-list-group-item>
					<m-list-group-item disabled> Item 2 </m-list-group-item>
					<m-list-group-item disabled> Item 3
						<m-badge level="warning" text="3" rounded />
					</m-list-group-item>
					<m-list-group-item disabled> Item 4
						<m-badge text="3" rounded />
					</m-list-group-item>
				</m-list-group>
				<h4 class="block">Linked Contextual Items</h4>
				<m-list-group not-ul>
					<m-list-group-item link="javascript:;"> Default </m-list-group-item>
					<m-list-group-item level="success" link="javascript:;"> Success </m-list-group-item>
					<m-list-group-item level="info" link="javascript:;"> Info
						<m-badge level="warning" text="3" rounded />
					</m-list-group-item>
					<m-list-group-item level="warning" link="javascript:;"> Warning
						<m-badge text="3" rounded />
					</m-list-group-item>
					<m-list-group-item level="danger" link="javascript:;"> Danger </m-list-group-item>
				</m-list-group>
				<h4 class="block">Custom Content</h4>
				<m-list-group not-ul>
					<m-list-group-item link="javascript:;" active>
						<h4 class="list-group-item-heading">List group item heading</h4>
						<p class="list-group-item-text"> Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. </p>
					</m-list-group-item>
					<m-list-group-item link="javascript:;">
						<h4 class="list-group-item-heading">List group item heading</h4>
						<p class="list-group-item-text"> Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. </p>
					</m-list-group-item>
					<m-list-group-item link="javascript:;">
						<h4 class="list-group-item-heading">List group item heading</h4>
						<p class="list-group-item-text"> Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. </p>
					</m-list-group-item>
				</m-list-group>
			</m-portlet-block>
		</m-portlet>
		<!-- END LIST PORTLET-->
		<!-- BEGIN PANELS PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Panels"
			title-bold
			title-uppercased
			title-color="red-sunglo"
			icon="icon-share"
			icon-color="red-sunglo"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<h4 class="block">Basic Panels</h4>
				<div class="panel panel-default">
					<div class="panel-heading"> Panel heading without title </div>
					<div class="panel-body"> Panel content </div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading">
							<h3 class="panel-title">Panel title</h3>
					</div>
					<div class="panel-body"> Panel content </div>
				</div>
				<div class="panel panel-default">
					<div class="panel-body"> Panel content </div>
					<div class="panel-footer"> Panel footer </div>
				</div>
				<div class="clearfix">
					<h4 class="block">Contextual Panels</h4>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Primary Panel</h3>
						</div>
						<div class="panel-body"> Panel content </div>
					</div>
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Primary Panel</h3>
						</div>
						<div class="panel-body"> Panel content </div>
					</div>
					<div class="panel panel-success">
						<div class="panel-heading">
							<h3 class="panel-title">Success Panel</h3>
						</div>
						<div class="panel-body"> Panel content </div>
					</div>
					<div class="panel panel-info">
						<div class="panel-heading">
							<h3 class="panel-title">Info Panel</h3>
						</div>
						<div class="panel-body"> Panel content </div>
					</div>
					<div class="panel panel-warning">
						<div class="panel-heading">
							<h3 class="panel-title">Warning Panel</h3>
						</div>
						<div class="panel-body"> Panel content </div>
					</div>
					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title">Danger Panel</h3>
						</div>
						<div class="panel-body"> Panel content </div>
					</div>
				</div>
				<div class="clearfix">
					<h4 class="block">With Tables</h4>
					<div class="panel panel-success">
						<div class="panel-heading">
							<h3 class="panel-title">Panel Title</h3>
						</div>
						<div class="panel-body">
							<p> Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam
									id dolor id nibh ultricies vehicula ut id elit. </p>
						</div>
						<table class="table">
							<thead>
								<tr>
									<th> # </th>
									<th> First Name </th>
									<th> Last Name </th>
									<th> Username </th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td> 1 </td>
									<td> Mark </td>
									<td> Otto </td>
									<td> @mdo </td>
								</tr>
								<tr>
									<td> 2 </td>
									<td> Jacob </td>
									<td> Thornton </td>
									<td> @fat </td>
								</tr>
								<tr>
									<td> 3 </td>
									<td> Larry </td>
									<td> the Bird </td>
									<td> @twitter </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="clearfix">
					<h4 class="block">With List Groups</h4>
					<div class="panel panel-warning">
						<div class="panel-heading">
							<h3 class="panel-title">Panel Title</h3>
						</div>
						<div class="panel-body">
							<p> Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies
									vehicula ut id elit. </p>
						</div>
						<m-list-group not-ul>
							<m-list-group-item> Cras justo odio
								<m-badge level="default" text="3" rounded />
							</m-list-group-item>
							<m-list-group-item> Dapibus ac facilisis in
								<m-badge level="success" text="11" rounded />
							</m-list-group-item>
							<m-list-group-item> Morbi leo risus
								<m-badge level="danger" text="new" rounded />
							</m-list-group-item>
							<m-list-group-item> Porta ac consectetur ac
								<m-badge level="warning" text="4" rounded />
							</m-list-group-item>
							<m-list-group-item> Vestibulum at eros
								<m-badge level="info" text="3" rounded />
							</m-list-group-item>
							<m-list-group-item> Vestibulum at eros </m-list-group-item>
						</m-list-group>
					</div>
				</div>
			</m-portlet-block>
		</m-portlet>
		<!-- END PANELS PORTLET-->
	</m-column>
	<m-column :size="6">
		<!-- BEGIN PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Notes"
			title-uppercased
			title-bold
			title-color="dark"
			icon="icon-edit"
			icon-color="dark"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;"> </a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<m-note
					title="Success! Some Header Goes Here"
					level="success"
				>
					Duis mollis, est non commodo luctus, nisi erat mattis consectetur purus sit amet porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
				</m-note>
				<m-note
					title="Info! Some Header Goes Here"
					level="info"
				>
					Duis mollis, est non commodo luctus, nisi erat mattis consectetur purus sit amet porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
				</m-note>
				<m-note
					title="Danger! Some Header Goes Here"
					level="danger"
				>
					Duis mollis, est non commodo luctus, nisi erat mattis consectetur purus sit amet porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
				</m-note>
				<m-note
					title="Warning! Some Header Goes Here"
					level="warning"
				>
					Duis mollis, est non commodo luctus, nisi erat mattis consectetur purus sit amet porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
				</m-note>
			</m-portlet-block>
		</m-portlet>
		<!-- END PORTLET-->
		<!-- BEGIN PROGRESS BARS PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Progress Bars"
			title-bold
			title-uppercased
			title-color="red-sunglo"
			icon="icon-share"
			icon-color="red-sunglo"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<m-note
					title="Cross-browser compability"
					level="warning"
				>
					Progress bars use CSS3 transitions and animations to achieve some of their effects. These features are not supported in Internet Explorer 9 and below or older versions of Firefox. Opera 12 does not support animations.
				</m-note>
				<h3>Basic</h3>
				<m-progress
					level="success"
					:current-value="40"
				></m-progress>
				<m-progress
					level="info"
					:current-value="20"
					:min-value="20"
				></m-progress>
				<m-progress
					level="warning"
					:current-value="60"
				></m-progress>
				<m-progress
					level="danger"
					:current-value="80"
				></m-progress>
				<h3>Striped</h3>
				<m-progress
					level="success"
					striped
					:current-value="40"
				></m-progress>
				<m-progress
					level="info"
					striped
					:current-value="20"
				></m-progress>
				<m-progress
					level="warning"
					striped
					:current-value="60"
				></m-progress>
				<m-progress
					level="danger"
					striped
					:current-value="80"
				></m-progress>
				<h3>Animated</h3>
				<m-progress
					level="success"
					striped
					animated
					:current-value="40"
				></m-progress>
				<m-progress
					level="info"
					striped
					animated
					:current-value="20"
				></m-progress>
				<m-progress
					level="warning"
					striped
					animated
					:current-value="60"
				></m-progress>
				<m-progress
					level="danger"
					striped
					animated
					:current-value="80"
				></m-progress>
				<h3>Stacked</h3>
				<m-progress>
					<template slot="progressBars">
						<m-progress-bar
							level="success"
							:current-value="35"
						></m-progress-bar>
						<m-progress-bar
							level="warning"
							:current-value="20"
							striped
							animated
						></m-progress-bar>
						<m-progress-bar
							level="danger"
							:current-value="10"
						></m-progress-bar>
					</template>
				</m-progress>
			</m-portlet-block>
		</m-portlet>
		<!-- END PROGRESS BARS PORTLET-->
		<!-- BEGIN LABELS AND BADGES PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Labels &amp; Badges"
			title-bold
			title-uppercased
			title-color="red-sunglo"
			icon="icon-share"
			icon-color="red-sunglo"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<h4 class="block">Labels &amp; Badges Styles</h4>
				<table class="table table-bordered table-striped">
					<thead>
						<tr>
							<th> Class </th>
							<th> Labels </th>
							<th> Badges </th>
							<th> Roundless Badges </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td> Default </td>
							<td>
								<m-label level="default" text="Default" />
							</td>
							<td>
								<m-badge level="default" text="5" rounded />
							</td>
							<td>
								<m-badge level="default" text="3" />
							</td>
						</tr>
						<tr>
							<td> Primary </td>
							<td>
								<m-label level="primary" text="Primary" />
							</td>
							<td>
								<m-badge level="primary" text="4" rounded />
							</td>
							<td>
								<m-badge level="primary" text="Hot" />
							</td>
						</tr>
						<tr>
							<td> Info </td>
							<td>
								<m-label level="info" text="Info" />
							</td>
							<td>
								<m-badge level="info" text="6" rounded/>
							</td>
							<td>
								<m-badge level="info" text="New" />
							</td>
						</tr>
						<tr>
							<td> Success </td>
							<td>
								<m-label level="success" text="Success" />
							</t>
							<td>
								<m-badge level="success" text="1" rounded />
							</td>
							<td>
								<m-badge level="success" text="2" />
							</td>
						</tr>
						<tr>
							<td> Danger </td>
							<td>
								<m-label level="danger" text="Danger" />
							</td>
							<td>
								<m-badge level="danger" text="3" rounded />
							</td>
							<td>
								<m-badge level="danger" text="5" />
							</td>
						</tr>
						<tr>
							<td> Warning </td>
							<td>
								<m-label level="warning" text="warning" />
							</td>
							<td>
								<m-badge level="warning" text="12" rounded />
							</td>
							<td>
								<m-badge level="warning" text="3" />
							</td>
						</tr>
					</tbody>
				</table>
				<h4 class="block">Labels In Headings</h4>
				<div class="well">
					<h1>Example heading
						<m-label text="default" />
					</h1>
					<h2>Example heading
						<m-label level="success" text="success" />
					</h2>
					<h3>Example heading
						<m-label level="danger" text="danger" />
					</h3>
					<h4 class="block">Example heading
						<m-label level="info" text="info" />
					</h4>
					<h4>Example heading
						<m-label level="warning" text="warning" />
					</h4>
					<h6>Example heading
						<m-label level="primary" text="primary" />
					</h6>
				</div>
				<div class="clearfix">
					<h4 class="block">Badges in Navs</h4>
					<ul class="nav nav-pills">
						<li class="active">
							<a href="javascript:;"> Home
								<span class="badge1"> 42 </span>
							</a>
						</li>
						<li>
							<a href="javascript:;"> Profile </a>
						</li>
						<li>
							<a href="javascript:;"> Messages
								<m-badge level="danger" text="3" rounded />
							</a>
						</li>
					</ul>
					<div class="clearfix margin-bottom-10"> </div>
					<ul class="nav nav-pills nav-stacked" style="max-width: 260px;">
						<li class="active">
							<a href="javascript:;">
								<m-badge level="warning" text="42" rounded pull-right /> Home </a>
						</li>
						<li>
							<a href="javascript:;"> Profile </a>
						</li>
						<li>
							<a href="javascript:;">
									<m-badge level="success" text="3" rounded pull-right /> Messages </a>
						</li>
					</ul>
				</div>
				<div class="clearfix">
					<h4 class="block">Badges in Inline Dropdowns</h4>
					<div class="dropdown inline clearfix">
							<ul class="dropdown-menu" role="menu">
									<li role="presentation">
											<a role="menuitem" tabindex="-1" href="javascript:;"> Action
													<m-badge level="success" text="2" rounded />
											</a>
									</li>
									<li role="presentation">
											<a role="menuitem" tabindex="-1" href="javascript:;"> Another action
													<m-badge level="warning" text="5" rounded />
											</a>
									</li>
									<li role="presentation">
											<a role="menuitem" tabindex="-1" href="javascript:;"> Something here
													<m-badge level="danger" text="7" rounded />
											</a>
									</li>
									<li role="presentation" class="divider"> </li>
									<li role="presentation">
											<a role="menuitem" tabindex="-1" href="javascript:;"> Separated link
													<m-badge level="info" text="12" rounded />
											</a>
									</li>
							</ul>
					</div>
					<div class="clearfix"> </div>
					<h4 class="block">Badges in Button Dropdowns</h4>
					<div class="btn-group ">
						<m-button type="bootstrap" color="blue" :custom-css="['dropdown-toggle']" data-toggle="dropdown">Open Me!
							<m-icon name="fa fa-angle-down"></m-icon>
						</m-button>
						<ul class="dropdown-menu" role="menu">
							<li role="presentation">
								<a role="menuitem" tabindex="-1" href="javascript:;"> Action
									<m-badge level="success" text="2" rounded />
								</a>
							</li>
							<li role="presentation">
								<a role="menuitem" tabindex="-1" href="javascript:;"> Another action
									<m-badge level="warning" text="5" rounded />
								</a>
							</li>
							<li role="presentation">
								<a role="menuitem" tabindex="-1" href="javascript:;"> Something here
									<m-badge level="danger" text="7" rounded />
								</a>
							</li>
							<li role="presentation" class="divider"> </li>
							<li role="presentation">
								<a role="menuitem" tabindex="-1" href="javascript:;"> Separated link
									<m-badge level="info" text="12" rounded />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</m-portlet-block>
		</m-portlet>
		<!-- END LABELS AND BADGES PORTLET-->
		<!-- BEGIN PAGINATION PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Pagination"
			title-bold
			title-uppercased
			title-color="red-sunglo"
			icon="icon-share"
			icon-color="red-sunglo"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<div>
					<m-pagination :max-page="6" size="large" />
					<m-pagination :max-page="6" v-model="currentPage3" />
				</div>
				<div>
					<m-pagination :max-page="6" size="small" />
				</div>
			</m-portlet-block>
		</m-portlet>
		<!-- END PAGINATION PORTLET-->
		<!-- BEGIN PAGINATION PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Pager With Aligned Links"
			title-uppercased
			title-bold
			title-color="green-sharp"
			icon="icon-share"
			icon-color="green-sharp"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<h4 class="block">Default</h4>
				<div class="well"> Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. </div>
				<ul class="pager">
					<li class="previous">
						<a href="javascript:;"> &larr; Older </a>
					</li>
					<li class="next">
						<a href="javascript:;"> Newer &rarr; </a>
					</li>
				</ul>
				<h4 class="block">Optional Disabled State</h4>
				<div class="well"> Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. </div>
				<ul class="pager">
					<li class="previous disabled">
						<a href="javascript:;"> &larr; Older </a>
					</li>
					<li class="next">
						<a href="javascript:;"> Newer &rarr; </a>
					</li>
				</ul>
				<h4 class="block">With Styled Buttons &amp; Icons</h4>
				<div class="well"> Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. </div>
				<ul class="pager">
					<li class="previous">
						<a href="javascript:;" class="btn blue">
						<m-icon name="fa fa-angle-left"></m-icon> Older </a>
					</li>
					<li class="next">
						<a href="javascript:;" class="btn blue"> Newer
							<m-icon name="fa fa-angle-right"></m-icon>
						</a>
					</li>
				</ul>
			</m-portlet-block>
		</m-portlet>
		<!-- END PAGINATION PORTLET-->
		<!-- BEGIN PAGINATION PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Dynamic Pagination(jQuery Bootpag)"
			title-bold
			title-uppercased
			title-color="red-sunglo"
			icon="icon-share"
			icon-color="red-sunglo"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<div>
					<h4 class="block">Basic Pagination</h4>
					<p id="dynamic_pager_content1" class="well"> Page {{currentPage1}} content here </p>
					<p id="dynamic_pager_demo1">
						<m-pagination :max-page="6" v-model="currentPage1" />
					</p>
				</div>
				<hr>
				<div>
					<h4 class="block">Advance Pagination</h4>
					<p id="dynamic_pager_content2" class="well"> Page {{currentPage2}} content here </p>
					<p id="dynamic_pager_demo2">
						<m-pagination :max-page="6" v-model="currentPage2" />
					</p>
				</div>
			</m-portlet-block>
		</m-portlet>
		<!-- END PAGINATION PORTLET-->
		<!-- BEGIN WELL PORTLET-->
		<m-portlet
			type="light"
			bordered
			title="Wells"
			title-bold
			title-uppercased
			title-color="red-sunglo"
			icon="icon-share"
			icon-color="red-sunglo"
		>
			<template slot="actions">
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-cloud-upload"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-wrench"></m-icon>
				</a>
				<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
					<m-icon name="icon-trash"></m-icon>
				</a>
			</template>
			<m-portlet-block>
				<div class="well well-lg">
					<h4 class="block">I am a large well</h4>
					<p> Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. </p>
				</div>
				<div class="well">
					<h4 class="block">I am a default well</h4>
					<p> Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. </p>
				</div>
				<div class="well well-sm">
					<h4 class="block">I am a small well</h4>
					<p> Tight pants next level keffiyeh trigger me on click haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. </p>
				</div>
			</m-portlet-block>
		</m-portlet>
		<!-- END WELL PORTLET-->
	</m-column>
</m-row>
</template>

<script>
import mRow from "../../components/metronic/structure/m-row.vue"
import mColumn from "../../components/metronic/structure/m-column.vue"
import mPortlet from "../../components/metronic/structure/m-portlet.vue"
import mPortletBlock from "../../components/metronic/structure/m-portlet-block.vue"

import mProgress from "../../components/metronic/informative/m-progress.vue"
import mProgressBar from "../../components/metronic/informative/m-progress-bar.vue"
import mBadge from "../../components/metronic/informative/m-badge.vue"
import mLabel from "../../components/metronic/informative/m-label.vue"
import mAlert from "../../components/metronic/informative/m-alert.vue"
import mNote from "../../components/metronic/informative/m-note.vue"
import mModalDialog from "../../components/metronic/informative/m-modalDialog.vue"

import mIcon from "../../components/metronic/graphic/m-icon.vue"

import mButton from "../../components/metronic/ui/m-button.vue"
import mLinkButton from "../../components/metronic/ui/m-linkbutton.vue"

import mPagination from "../../components/metronic/navigation/m-pagination.vue"

import mListGroup from "../../components/metronic/lists/m-list-group.vue"
import mListGroupItem from "../../components/metronic/lists/m-list-group-item.vue"

import $ from "jquery"

export default {
	components: {
		mRow,
		mColumn,
		mPortlet,
		mPortletBlock,
		mAlert,
		mNote,
		mModalDialog,
		mIcon,
		mProgress,
		mProgressBar,
		mBadge,
		mLabel,
		mButton,
		mLinkButton,
		mPagination,
		mListGroup,
		mListGroupItem
	},
	data () {
		return {
			currentPage1: 1,
			currentPage2: 1,
			currentPage3: 1
		}
	},
	methods: {
		pulsateOnce: function () {
			$("#pulsate-once-target").pulsate({
				color: "#399bc3",
				repeat: !1
			})
		},
		pulsateCrazy: function () {
			$("#pulsate-crazy-target").pulsate({
				color: "#fdbe41",
				reach: 50,
				repeat: 10,
				speed: 100,
				glow: !0
			})
		}
	},
	mounted: function () {
		$(".tooltips").tooltip()
	}
}
</script>

