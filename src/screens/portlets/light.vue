<template>
	<m-empty>
		<m-note bordered="true">
			See
				<a href="ui_colors.html" target="_blank"> Color Library </a> for more colors for portlets.
		</m-note>
		<m-row>
			<m-column :size="6">
				<!-- BEGIN Portlet PORTLET-->
				<m-portlet type="light" 
					icon="icon-speech" 
					title="Portlet" 
					caption="weekly stats..."
					captionBold 
					captionUppercased>
					<m-portlet-block>
						<m-scroller :height="200" railColor="yellow">
							<h4>Heading Text</h4>
								<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
										eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
										sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
										mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
								<p> nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
										mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
										sit amet fermentum. </p>

						</m-scroller>
					</m-portlet-block>
					<template slot="actions">
						<a href="javascript:;" class="btn btn-circle btn-default">
							<i class="fa fa-pencil"></i> Edit </a>
						<a href="javascript:;" class="btn btn-circle btn-default">
							<i class="fa fa-plus"></i> Add </a>
						<a class="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;"> </a>
					</template>
				</m-portlet>
				<!-- END Portlet PORTLET-->
			</m-column>
			<m-column :size="6">
					<!-- BEGIN Portlet PORTLET-->
					<m-portlet 
					type="light"
					icon="icon-share"
					title="Portlet" 
					caption="monthly stats..."
					captionColor="green-sharp"
					captionBold 
					captionUppercased>
						<m-portlet-block>
							<m-scroller rail-color="red" handle-color="green">
								<h4>Heading Text</h4>
								<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
										eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
										sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
										mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
								<p> nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
										mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
										sit amet fermentum. </p>
							</m-scroller>
						</m-portlet-block>
						<template slot="actions">
							<div class="btn-group btn-group-devided" data-toggle="buttons">
								<label class="btn btn-circle btn-transparent grey-salsa active">
									<input type="radio" name="options" class="toggle" id="option1">Today</label>
								<label class="btn btn-circle btn-transparent grey-salsa">
									<input type="radio" name="options" class="toggle" id="option2">Week</label>
								<label class="btn btn-circle btn-transparent grey-salsa">
									<input type="radio" name="options" class="toggle" id="option2">Month</label>
							</div>
						</template>
					</m-portlet>
					<!-- END Portlet PORTLET-->
			</m-column>
		</m-row>
		<m-row>
			<m-column :size="6">
				<!-- BEGIN Portlet PORTLET-->
				<m-portlet
					type="light"
					icon="icon-speech"
					title="Portlet"
					caption="more samples"
					caption-color="green-sharp"
				>
					<m-portlet-block>
						<m-scroller rail-color="yellow" handle-color="#a1b2bd">
							<h4>Heading Text</h4>
							<p>
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
								eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
								sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
								mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
							</p>
							<p>
								nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
								mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
								sit amet fermentum.
							</p>
						</m-scroller>
					</m-portlet-block>
					<template slot="actions">
						<div class="btn-group">
							<a class="btn btn-circle btn-default " href="javascript:;" data-toggle="dropdown">
								<i class="fa fa-user"></i> User
								<i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu pull-right">
								<li>
									<a href="javascript:;">
									<i class="fa fa-pencil"></i> Edit </a>
								</li>
								<li>
									<a href="javascript:;">
									<i class="fa fa-trash-o"></i> Delete </a>
								</li>
								<li>
									<a href="javascript:;">
									<i class="fa fa-ban"></i> Ban </a>
								</li>
								<li class="divider"> </li>
								<li>
									<a href="javascript:;"> Make admin </a>
								</li>
							</ul>
						</div>
						<a href="javascript:;" class="btn btn-circle red-sunglo ">
							<i class="fa fa-plus"></i> Add </a>
						<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
							<i class="icon-cloud-upload"></i>
						</a>
						<a class="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;"> </a>
					</template>
				</m-portlet>
				<!-- <div class="portlet light">
					<div class="portlet-title">
							<div class="caption font-green-sharp">
								<i class="icon-speech font-green-sharp"></i>
								<span class="caption-subject"> Portlet</span>
								<span class="caption-helper">more samples...</span>
							</div>
							<div class="actions">
									<div class="btn-group">
										<a class="btn btn-circle btn-default " href="javascript:;" data-toggle="dropdown">
											<i class="fa fa-user"></i> User
											<i class="fa fa-angle-down"></i>
										</a>
										<ul class="dropdown-menu pull-right">
											<li>
												<a href="javascript:;">
												<i class="fa fa-pencil"></i> Edit </a>
											</li>
											<li>
												<a href="javascript:;">
												<i class="fa fa-trash-o"></i> Delete </a>
											</li>
											<li>
												<a href="javascript:;">
												<i class="fa fa-ban"></i> Ban </a>
											</li>
											<li class="divider"> </li>
											<li>
												<a href="javascript:;"> Make admin </a>
											</li>
										</ul>
									</div>
									<a href="javascript:;" class="btn btn-circle red-sunglo ">
										<i class="fa fa-plus"></i> Add </a>
									<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
										<i class="icon-cloud-upload"></i>
									</a>
									<a class="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;"> </a>
							</div>
					</div>
					<div class="portlet-body">
						<div class="scroller" style="height:200px" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd">
							<h4>Heading Text</h4>
							<p>
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
								eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
								sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
								mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
							</p>
							<p>
								nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
								mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
								sit amet fermentum.
							</p>
						</div>
					</div>
				</div> -->
				<!-- END Portlet PORTLET-->
			</m-column>
			<m-column :size="6">
				<!-- BEGIN Portlet PORTLET-->
				<m-portlet
					type="light"
					icon="icon-share"
					title="Portlet"
					caption-uppercased
					caption-bold
					caption="monthly stats..."
					caption-color="red-sunglo"
				>
					<m-portlet-block>
						<m-scroller rail-color="red" handle-color="green">
							<h4>Heading Text</h4>
							<p>
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
								eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
								sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
								mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
							</p>
							<p>
								nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
								mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
								sit amet fermentum.
							</p>
						</m-scroller>
					</m-portlet-block>
					<template slot="actions">
						<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
							<i class="icon-cloud-upload"></i>
						</a>
						<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
							<i class="icon-wrench"></i>
						</a>
						<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
							<i class="icon-trash"></i>
						</a>
						<a class="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;"> </a>
					</template>
				</m-portlet>
				<!-- <div class="portlet light">
					<div class="portlet-title">
						<div class="caption font-red-sunglo">
							<i class="icon-share font-red-sunglo"></i>
							<span class="caption-subject bold uppercase"> Portlet</span>
							<span class="caption-helper">monthly stats...</span>
						</div>
						<div class="actions">
							<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
								<i class="icon-cloud-upload"></i>
							</a>
							<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
								<i class="icon-wrench"></i>
							</a>
							<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
								<i class="icon-trash"></i>
							</a>
							<a class="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;"> </a>
						</div>
					</div>
					<div class="portlet-body">
						<div class="scroller" style="height:200px" data-always-visible="1" data-rail-visible="1" data-rail-color="red" data-handle-color="green">
							<h4>Heading Text</h4>
							<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
									eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
									sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
									mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
							<p> nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
									mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
									sit amet fermentum.
							</p>
						</div>
					</div>
				</div> -->
				<!-- END Portlet PORTLET-->
			</m-column>
		</m-row>
		<m-row>
				<m-column>
					<!-- BEGIN Portlet PORTLET-->
					<m-portlet
						type="light"
						icon="icon-paper-plane"
						title="Form Input"
						caption="more samples..."
						caption-uppercased
						caption-color="yellow-casablanca"
						caption-bold
					>
						<m-portlet-block>
							<h4>Heading text goes here...</h4>
							<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
								lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
								fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
							</p>
						</m-portlet-block>
						<template slot="inputs">
								<div class="input-group">
									<input type="text" class="form-control input-circle-left" placeholder="search...">
									<span class="input-group-btn">
										<button class="btn btn-circle-right btn-default" type="submit">Go!</button>
									</span>
								</div>
						</template>
					</m-portlet>
						<!-- END Portlet PORTLET-->
				</m-column>
		</m-row>
		<m-row>
				<m-column :size="6">
						<!-- BEGIN Portlet PORTLET-->
					<m-portlet
						type="light"
						icon="icon-microphone"
						title="Quick Search"
						caption="more samples..."
						caption-color="purple-plum"
						caption-bold
						caption-uppercased
					>
						<m-portlet-block>
							<m-scroller rail-color="white">
								<h4>Heading text goes here...</h4>
								<p>
									Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
									eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
									sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
									mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
								</p>
							</m-scroller>
						</m-portlet-block>
						<template slot="inputs">
							<div class="input-icon right">
								<i class="icon-magnifier"></i>
								<input type="text" class="form-control input-circle" placeholder="search..."> </div>
							</div>
						</template>
					</m-portlet>
						<!-- <div class="portlet light">
								<div class="portlet-title">
										<div class="caption">
												<i class="icon-microphone font-purple-plum"></i>
												<span class="caption-subject bold font-purple-plum uppercase"> Quick Search </span>
												<span class="caption-helper">more samples...</span>
										</div>
										<div class="inputs">
												<div class="portlet-input input-inline input-small">
														<div class="input-icon right">
																<i class="icon-magnifier"></i>
																<input type="text" class="form-control input-circle" placeholder="search..."> </div>
												</div>
										</div>
								</div>
								<div class="portlet-body">
										<div class="scroller" style="height:200px">
												<h4>Heading text goes here...</h4>
												<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
														eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
														sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
														mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
										</div>
								</div>
						</div> -->
						<!-- END Portlet PORTLET-->
				</m-column>
				<m-column :size="6">
						<!-- BEGIN Portlet PORTLET-->
					<m-portlet
						type="light"
						title="Pagination"
						icon="icon-settings"
						caption-color="blue-hoki"
					>
						<m-portlet-block>
							<m-scroller rail-color="white">
								<h4>Heading text goes here...</h4>
								<p>
									Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
									eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
									sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
									mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
								</p>
							</m-scroller>
						</m-portlet-block>
						<template slot="pagination">
							<m-pagination :min-page="5" :max-page="10"></m-pagination>
						</template>
					</m-portlet>
						<!-- <div class="portlet light">
								<div class="portlet-title">
										<div class="caption">
												<i class="icon-settings font-blue-hoki"></i>
												<span class="caption-subject font-blue-hoki"> Pagination </span>
										</div>
										<ul class="pagination pagination-circle">
												<li>
														<a href="javascript:;">
																<i class="fa fa-angle-left"></i>
														</a>
												</li>
												<li>
														<a href="javascript:;"> 1 </a>
												</li>
												<li>
														<a href="javascript:;"> 2 </a>
												</li>
												<li>
														<a href="javascript:;"> 3 </a>
												</li>
												<li>
														<a href="javascript:;">
																<i class="fa fa-angle-right"></i>
														</a>
												</li>
										</ul>
								</div>
								<div class="portlet-body">
										<div class="scroller" style="height:200px">
												<h4>Heading text goes here...</h4>
												<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
														eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
														sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
														mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
										</div>
								</div>
						</div> -->
						<!-- END Portlet PORTLET-->
				</m-column>
		</m-row>
		<m-row>
			<m-column :size="6">
					<!-- BEGIN Portlet PORTLET-->
					<m-portlet
						type="light"
						icon="icon-puzzle"
						title="Tools"
						caption-uppercased
						caption-bold
						caption-color="grey-gallery"
						caption="more samples..."
					>
						<m-portlet-block>
							<h4>Heading text goes here...</h4>
							<p>
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
								lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
								fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis mollis, est
								non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
							</p>
						</m-portlet-block>
						<template slot="tools">
							<a href="" class="collapse"> </a>
							<a href="#portlet-config" data-toggle="modal" class="config"> </a>
							<a href="" class="reload"> </a>
							<a href="" class="fullscreen"> </a>
							<a href="" class="remove"> </a>
						</template>
					</m-portlet>
					<!-- <div class="portlet light">
							<div class="portlet-title">
									<div class="caption">
											<i class="icon-puzzle font-grey-gallery"></i>
											<span class="caption-subject bold font-grey-gallery uppercase"> Tools </span>
											<span class="caption-helper">more samples...</span>
									</div>
									<div class="tools">
											<a href="" class="collapse"> </a>
											<a href="#portlet-config" data-toggle="modal" class="config"> </a>
											<a href="" class="reload"> </a>
											<a href="" class="fullscreen"> </a>
											<a href="" class="remove"> </a>
									</div>
							</div>
							<div class="portlet-body">
									<h4>Heading text goes here...</h4>
									<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
											lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
											fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis mollis, est
											non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
							</div>
					</div> -->
					<!-- END GRID PORTLET-->
			</m-column>
			<m-column :size="6">
				<!-- BEGIN Portlet PORTLET-->
				<m-portlet
					type="light"
					title="Tabs"
					icon="icon-pin"
					caption="more samples..."
					caption-color="yellow-crusta"
					caption-bold
					caption-uppercased
				>
					<m-portlet-block>
						<div class="tab-content">
							<div class="tab-pane active" id="portlet_tab1">
								<m-scroller rail-color="white">
									<h4>Tab 1 Content</h4>
									<p>
										Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
										luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
										volutpat.ut laoreet dolore magna ut laoreet dolore magna. ut laoreet dolore magna. ut laoreet dolore magna.
									</p>
									<p>
										Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
										luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
										volutpat.ut laoreet dolore magna ut laoreet dolore magna. ut laoreet dolore magna. ut laoreet dolore magna.
									</p>
								</m-scroller>
							</div>
							<div class="tab-pane" id="portlet_tab2">
								<m-scroller rail-color="white">
									<h4>Tab 2 Content</h4>
									<p>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
										ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
										et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
									</p>
									<p>
										Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
										luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
										volutpat.ut laoreet dolore magna ut laoreet dolore magna. ut laoreet dolore magna. ut laoreet dolore magna.
									</p>
								</m-scroller>
							</div>
							<div class="tab-pane" id="portlet_tab3">
								<m-scroller rail-color="white">
									<h4>Tab 3 Content</h4>
									<p>
										Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
										luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
										volutpat.ut laoreet dolore magna ut laoreet dolore magna. ut laoreet dolore magna. ut laoreet dolore magna.
									</p>
									<p>
										Ut wisi enim ad m veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
										vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
									</p>
								</m-scroller>
							</div>
						</div>
					</m-portlet-block>
				</m-portlet>
				<!-- <div class="portlet light">
						<div class="portlet-title tabbable-line">
								<div class="caption">
										<i class="icon-pin font-yellow-crusta"></i>
										<span class="caption-subject bold font-yellow-crusta uppercase"> Tabs </span>
										<span class="caption-helper">more samples...</span>
								</div>
								<ul class="nav nav-tabs">
										<li>
												<a href="#portlet_tab3" data-toggle="tab"> Tab 3 </a>
										</li>
										<li>
												<a href="#portlet_tab2" data-toggle="tab"> Tab 2 </a>
										</li>
										<li class="active">
												<a href="#portlet_tab1" data-toggle="tab"> Tab 1 </a>
										</li>
								</ul>
						</div>
						<div class="portlet-body">
								<div class="tab-content">
										<div class="tab-pane active" id="portlet_tab1">
												<div class="scroller" style="height: 200px;">
														<h4>Tab 1 Content</h4>
														<p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
																luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
																volutpat.ut laoreet dolore magna ut laoreet dolore magna. ut laoreet dolore magna. ut laoreet dolore magna. </p>
														<p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
																luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
																volutpat.ut laoreet dolore magna ut laoreet dolore magna. ut laoreet dolore magna. ut laoreet dolore magna. </p>
												</div>
										</div>
										<div class="tab-pane" id="portlet_tab2">
												<div class="scroller" style="height: 200px;">
														<h4>Tab 2 Content</h4>
														<p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
																ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
																et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo. </p>
														<p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
																luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
																volutpat.ut laoreet dolore magna ut laoreet dolore magna. ut laoreet dolore magna. ut laoreet dolore magna. </p>
												</div>
										</div>
										<div class="tab-pane" id="portlet_tab3">
												<div class="scroller" style="height: 200px;">
														<h4>Tab 3 Content</h4>
														<p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
																luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
																volutpat.ut laoreet dolore magna ut laoreet dolore magna. ut laoreet dolore magna. ut laoreet dolore magna. </p>
														<p> Ut wisi enim ad m veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
																vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
												</div>
										</div>
								</div>
						</div>
				</div> -->
			</m-column>
		</m-row>
	</m-empty>
</template>

<script>
import mEmpty from "../../components/metronic/structure/empty.vue"
import mRow from "../../components/metronic/structure/m-row.vue"
import mColumn from "../../components/metronic/structure/m-column.vue"
import mPortlet from "../../components/metronic/structure/m-portlet.vue"
import mPortletBlock from "../../components/metronic/structure/m-portlet-block.vue"
import mScroller from "../../components/metronic/structure/m-scroller.vue"
import mPagination from "../../components/metronic/navigation/m-pagination.vue"
import mNote from "../../components/metronic/informative/m-note.vue"

export default {
	components: {
		mEmpty,
		mRow,
		mColumn,
		mNote,
		mPortlet,
		mPortletBlock,
		mScroller,
		mPagination
	}
}
</script>

<style>

</style>
