<template>
	<div>
		<m-row>
			<m-column :size="6">
					<!-- BEGIN SAMPLE FORM PORTLET-->
					<m-portlet
						type="light"
						title="Default Form"
						bordered
						icon="icon-settings"
						icon-color="red-sunglo"
						title-bold
						title-uppercased
						title-color="red-sunglo"
					>
						<template slot="actions">
							<m-button-group>
								<a class="btn btn-sm green dropdown-toggle" href="javascript:;" data-toggle="dropdown"> Actions
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
							</m-button-group>
						</template>
						<m-portlet-block>
							<m-validated-input :required="true" @isValid="valid => alert(valid)" :validation-func="myFunc"></m-validated-input>
							<m-validated-input :validation-func="(x) => !isNaN(x) && x > 20 && x < 40" @isValid="valid => alert(valid)"></m-validated-input>
							<m-validated-input :validation-func="(x) => x === 'hroch'" @isValid="valid => alert(valid)"></m-validated-input>
							<button>Click me</button>

							<form role="form">
									<div class="form-body">
										<m-form-group
										label="Email Address">
											<m-bs-input
											left-icon-type="addon"
											left-icon="fa fa-envelope"
											placeholder="Email Address" />
										</m-form-group>
										<m-form-group
										label="Circle Input">
											<m-bs-input
											left-icon-type="addon"
											left-icon="fa fa-envelope"
											rounded
											placeholder="Email Address" />
										</m-form-group>
										<m-form-group
											label="Password">
											<m-bs-input
											input-id="exampleInputPassword1"
											input-type="password"
											right-icon-type="addon"
											right-icon="fa fa-user"
											right-icon-color="red"
											placeholder="Password" />
										</m-form-group>
										<m-form-group
										label="Left Icon">
											<m-bs-input
											left-icon-type="icon"
											left-icon="fa fa-bell-o"
											left-icon-color="green"
											placeholder="Left icon" />
										</m-form-group>
										<m-form-group
										label="Left Icon(.input-sm)">
											<m-bs-input
											left-icon-type="icon"
											left-icon="fa fa-bell-o"
											input-size="small"
											placeholder="Left icon" />
										</m-form-group>
										<m-form-group
										label="Left Icon(.input-lg)">
											<m-bs-input
											left-icon-type="icon"
											left-icon="fa fa-bell-o"
											input-size="large"
											placeholder="Left icon" />
										</m-form-group>
										<m-form-group
										label="Right Icon">
											<m-bs-input
											right-icon-type="icon"
											right-icon="fa fa-microphone"
											right-icon-color="blue"
											right-icon-spinnable
											placeholder="Right icon" />
										</m-form-group>
										<m-form-group
										label="Right Icon(.input-sm)">
											<m-bs-input
											right-icon-type="icon"
											right-icon="fa fa-bell-o"
											input-size="small"
											placeholder="Left icon" />
										</m-form-group>
										<m-form-group
										label="Right Icon(.input-lg)">
											<m-bs-input
											right-icon-type="icon"
											right-icon="fa fa-bell-o"
											right-icon-color="green"
											input-size="large"
											placeholder="Left icon" />
										</m-form-group>
										<m-form-group
										label="Circle Input">
											<m-bs-input
											right-icon="fa fa-microphone"
											right-icon-type="icon"
											placeholder="Right icon"
											rounded />
										</m-form-group>
										<m-form-group
										label="Input with Icon">
											<m-bs-input
											tooltip-content="Invalid email"
											tooltip-placement="top"
											right-icon="fa fa-exclamation"
											right-icon-type="icon"
											left-icon-type="addon"
											left-icon="fa fa-envelope"
											left-icon-color="purple" />
										</m-form-group>
										<m-form-group
										label="Input with spinner">
											<m-bs-input
											placeholder="Process something" />
										</m-form-group>
										<!-- <m-form-group
										label="Static Control">
											<m-bs-input
											static-content="email@example.com"
											static-type />
										</m-form-group> --> Convert to another component
										<m-form-group
										label="Disabled">
											<m-bs-input
											placeholder="Disabled"
											disabled />
										</m-form-group>
										<m-form-group
										label="Readonly">
											<m-bs-input
											placeholder="Readonly"
											readonly />
										</m-form-group>
										<m-bs-select label="Dropdown">
											<m-bs-option title="1" />
											<m-bs-option title="2" />
											<m-bs-option title="3" />
											<m-bs-option title="4" />
											<m-bs-option title="5" />
										</m-bs-select>
										<m-bs-select label="Multiple Select" allow-multiple>
											<m-bs-option title="Option 1" />
											<m-bs-option title="Option 2" />
											<m-bs-option title="Option 3" />
											<m-bs-option title="Option 4" />
											<m-bs-option title="Option 5" />
										</m-bs-select>
										<m-bs-textarea label="Textarea" :rows="3" />
										<m-form-group>
											<m-bs-input
											label="File input"
											id="exampleInputFile1"
											input-type="file"
											help-msg="some help text here" />
										</m-form-group>
										<m-bs-checkbox-group label="Checkboxes">
											<m-bs-checkbox name="test" value="1" label="Checkbox 1" />
											<m-bs-checkbox name="test" value="2" label="Checkbox 2" />
											<m-bs-checkbox name="test" value="3" label="Checkbox 3" />
										</m-bs-checkbox-group>
										<m-bs-checkbox-group label="Outline Checkboxes">
											<m-bs-checkbox name="test" value="1" label="Checkbox 1" outlined />
											<m-bs-checkbox name="test" value="2" label="Checkbox 2" outlined />
											<m-bs-checkbox name="test" value="3" label="Checkbox 3" outlined />
										</m-bs-checkbox-group>
										<m-bs-checkbox-group label="Inline Checkboxes" inline>
											<m-bs-checkbox name="test" value="1" label="Checkbox 1" />
											<m-bs-checkbox name="test" value="2" label="Checkbox 2" />
											<m-bs-checkbox name="test" value="3" label="Checkbox 3" disabled />
										</m-bs-checkbox-group>
										<m-bs-radio-group label="Radios">
											<m-bs-radio label="Radio 1" value="1" name="test" />
											<m-bs-radio label="Radio 2" value="1" name="test" />
											<m-bs-radio label="Radio 3" value="1" name="test" />
										</m-bs-radio-group>
										<m-bs-radio-group label="Outline Radios">
											<m-bs-radio label="Radio 1" value="1" name="test" outline />
											<m-bs-radio label="Radio 2" value="1" name="test" outline />
											<m-bs-radio label="Radio 3" value="1" name="test" outline />
										</m-bs-radio-group>
										<m-bs-radio-group label="Inline Radio" inline>
											<m-bs-radio label="Option 1" value="option1" name="optionsRadios" checked />
											<m-bs-radio label="Option 1" value="option1" name="optionsRadios" />
											<m-bs-radio label="Option 1" value="option1" name="optionsRadios" disabled />
										</m-bs-radio-group>
									</div>
									<div class="form-actions">
											<button type="submit" class="btn blue">Submit</button>
											<button type="button" class="btn default">Cancel</button>
									</div>
							</form>
						</m-portlet-block>
					</m-portlet>
					<!-- END SAMPLE FORM PORTLET-->
					<!-- BEGIN SAMPLE FORM PORTLET-->
					<m-portlet
					type="light"
					bordered
					title="Input Height Sizing"
					title-bold
					title-uppercased
					title-color="blue-sharp"
					icon="icon-social-dribbble"
					icon-color="blue-sharp">
						<template slot="actions">
							<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
								<m-icon name="icon-cloud-upload" />
							</a>
							<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
								<m-icon name="icon-wrench" />
							</a>
							<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
								<m-icon name="icon-trash" />
							</a>
						</template>
						<m-portlet-block>
							<form role="form">
									<div class="form-body">
										<m-form-group
										label="Large Input">
											<m-bs-input
											input-size="large"
											placeholder="input-lg"/>
										</m-form-group>
										<m-form-group
										label="Large Input Group">
											<m-bs-input
											left-addon-text="@"
											left-icon-type="addon"
											input-size="large"
											placeholder="Username"/>
										</m-form-group>
										<m-form-group
										label="Large Input Default Group 'Not implemented yet'">
											<m-bs-input
											input-size="large"
											placeholder="Search for..."
											right-icon-type="btn">
												<button slot="rightBtn" class="btn green" type="button">Go!</button>
											</m-bs-input>
										</m-form-group>
										<m-form-group
										label="Default Input">
											<m-bs-input
											placeholder="" />
										</m-form-group>
										<m-form-group
										label="Default Input Group">
											<m-bs-input
											placeholder="Username"
											right-icon-type="addon"
											right-addon-text="@" />
										</m-form-group>
										<m-form-group
										label="Default Input Button Group 'Not implemented yet'">
											<m-bs-input
											placeholder="Search for..."
											right-icon-type="btn">
												<button slot="rightBtn" class="btn red" type="button">Go!</button>
											</m-bs-input>
										</m-form-group>
										<m-form-group
										label="Small Input">
											<m-bs-input
											input-size="small"
											placeholder="input-sm" />
										</m-form-group>
										<m-form-group
										label="Small Input Group">
											<m-bs-input
											input-size="small"
											left-addon-text="@"
											left-icon-type="addon"
											placeholder="Username" />
										</m-form-group>
										<m-form-group
										label="Small Input Default Group 'Not implemented yet'">
											<m-bs-input
											placeholder="Search for..."
											input-size="small"
											right-icon-type="btn">
												<button slot="rightBtn" class="btn green" type="button">Go!</button>
											</m-bs-input>
										</m-form-group>
										<m-bs-select label="Large Select" select-size="large">
											<m-bs-option title="Option 1" />
											<m-bs-option title="Option 2" />
											<m-bs-option title="Option 3" />
											<m-bs-option title="Option 4" />
											<m-bs-option title="Option 5" />
										</m-bs-select>
										<m-bs-select label="Default Select">
											<m-bs-option title="Option 1" />
											<m-bs-option title="Option 2" />
											<m-bs-option title="Option 3" />
											<m-bs-option title="Option 4" />
											<m-bs-option title="Option 5" />
										</m-bs-select>
										<m-bs-select label="Small Select" select-size="small">
											<m-bs-option title="Option 1" />
											<m-bs-option title="Option 2" />
											<m-bs-option title="Option 3" />
											<m-bs-option title="Option 4" />
											<m-bs-option title="Option 5" />
										</m-bs-select>
									</div>
									<div class="form-actions right">
										<button type="button" class="btn default">Cancel</button>
										<button type="submit" class="btn green">Submit</button>
									</div>
							</form>
						</m-portlet-block>
					</m-portlet>
					<!-- END SAMPLE FORM PORTLET-->
					<!-- BEGIN SAMPLE FORM PORTLET-->
					<m-portlet
						type="light"
						bordered
						title="Input width Sizing"
						icon="icon-bubble"
						icon-color="green-sharp"
						title-bold
						title-uppercased
						title-color="green-sharp"
					>
						<template slot="actions">
							<m-button-group>
								<a class="btn green-haze btn-outline btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
									<i class="fa fa-angle-down"></i>
								</a>
								<ul class="dropdown-menu pull-right">
									<li>
										<a href="javascript:;"> Option 1</a>
									</li>
									<li class="divider"> </li>
									<li>
										<a href="javascript:;">Option 2</a>
									</li>
									<li>
										<a href="javascript:;">Option 3</a>
									</li>
									<li>
										<a href="javascript:;">Option 4</a>
									</li>
								</ul>
							</m-button-group>
						</template>
						<m-portlet-block>
							<form role="form">
								<div class="form-body">
									<m-form-group
									label="Fluid Input">
										<m-bs-input
										placeholder="fluid"></m-bs-input>
										<m-bs-input
										placeholder="fluid"
										right-icon-type="icon"
										right-icon="fa fa-check"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder="fluid"
										left-icon-type="icon"
										left-icon="fa fa-user"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-xlarge"
										left-icon-type="addon"
										left-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-xlarge"
										input-type="email"
										right-icon-type="addon"
										right-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']">
										</m-bs-input>
										<hr>
									</m-form-group>
									<m-form-group label="Extra large Input">
										<m-bs-input
										placeholder=".input-xlarge"
										input-width-size="xlarge"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-xlarge"
										input-width-size="xlarge"
										right-icon-type="icon"
										right-icon="fa fa-check"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-xlarge"
										input-width-size="xlarge"
										left-icon-type="icon"
										left-icon="fa fa-user"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										input-type="email"
										placeholder=".input-xlarge"
										input-width-size="xlarge"
										left-icon-type="addon"
										left-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										input-type="email"
										placeholder=".input-xlarge"
										input-width-size="xlarge"
										right-icon-type="addon"
										right-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<hr>
									</m-form-group>
									<m-form-group
									label="Large Input">
										<m-bs-input
										placeholder=".input-large"
										input-width-size="large"></m-bs-input>
										<m-bs-input
										placeholder=".input-large"
										input-width-size="large"
										right-icon-type="icon"
										right-icon="fa fa-check"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-large"
										input-width-size="large"
										left-icon-type="icon"
										left-icon="fa fa-user"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-large"
										input-width-size="large"
										left-icon-type="addon"
										left-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										input-type="email"
										placeholder=".input-large"
										input-width-size="large"
										right-icon-type="addon"
										right-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<hr>
									</m-form-group>
									<m-form-group
									label="Medium Input">
										<m-bs-input
										placeholder=".input-medium"
										input-width-size="medium"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-medium"
										input-width-size="medium"
										right-icon-type="icon"
										right-icon="fa fa-check"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-medium"
										input-width-size="medium"
										left-icon-type="icon"
										left-icon="fa fa-user"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-medium"
										input-width-size="medium"
										left-icon-type="addon"
										left-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-medium"
										input-width-size="medium"
										right-icon-type="addon"
										right-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<hr>
									</m-form-group>
									<m-form-group
									label="Small Input">
										<m-bs-input
										placeholder=".input-small"
										input-width-size="small"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-small"
										input-width-size="small"
										right-icon-type="icon"
										right-icon="fa fa-check"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-small"
										input-width-size="small"
										left-icon-type="icon"
										left-icon="fa fa-user"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-small"
										input-width-size="small"
										left-icon-type="addon"
										left-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<m-bs-input
										placeholder=".input-small"
										input-width-size="small"
										right-icon-type="addon"
										right-icon="fa fa-envelope"
										:input-group-custom-css="['margin-top-10']"></m-bs-input>
										<hr>
									</m-form-group>
									<m-form-group
									label="Extra small Input">
										<m-bs-input
										placeholder=".input-xsmall"
										input-width-size="xsmall"></m-bs-input>
									</m-form-group>
									<m-bs-select
									label="Extra large Select"
									select-width-size="xlarge"
									select-size="large">
										<m-bs-option title="Option 1"></m-bs-option>
										<m-bs-option title="Option 2"></m-bs-option>
										<m-bs-option title="Option 3"></m-bs-option>
										<m-bs-option title="Option 4"></m-bs-option>
										<m-bs-option title="Option 5"></m-bs-option>
									</m-bs-select>
									<m-bs-select
									label="Large Select asdasdasd"
									select-width-size="large">
										<m-bs-option title="Option 1"></m-bs-option>
										<m-bs-option title="Option 2"></m-bs-option>
										<m-bs-option title="Option 3"></m-bs-option>
										<m-bs-option title="Option 4"></m-bs-option>
										<m-bs-option title="Option 5"></m-bs-option>
									</m-bs-select>
									<m-bs-select
									label="Medium Select"
									select-width-size="medium">
										<m-bs-option title="Option 1"></m-bs-option>
										<m-bs-option title="Option 2"></m-bs-option>
										<m-bs-option title="Option 3"></m-bs-option>
										<m-bs-option title="Option 4"></m-bs-option>
										<m-bs-option title="Option 5"></m-bs-option>
									</m-bs-select>
									<m-bs-select
									label="Small Select"
									select-width-size="small">
										<m-bs-option title="Option 1"></m-bs-option>
										<m-bs-option title="Option 2"></m-bs-option>
										<m-bs-option title="Option 3"></m-bs-option>
										<m-bs-option title="Option 4"></m-bs-option>
										<m-bs-option title="Option 5"></m-bs-option>
									</m-bs-select>
									<m-bs-select
									label="Extra Small Select"
									select-width-size="xsmall">
										<m-bs-option title="Option 1"></m-bs-option>
										<m-bs-option title="Option 2"></m-bs-option>
										<m-bs-option title="Option 3"></m-bs-option>
										<m-bs-option title="Option 4"></m-bs-option>
										<m-bs-option title="Option 5"></m-bs-option>
									</m-bs-select>
								</div>
								<div class="form-actions right">
									<button type="button" class="btn default">Cancel</button>
									<button type="submit" class="btn green">Submit</button>
								</div>
							</form>
						</m-portlet-block>
					</m-portlet>
					<!-- END SAMPLE FORM PORTLET-->
			</m-column>
			<m-column :size="6">
					<!-- BEGIN SAMPLE FORM PORTLET-->
					<m-portlet
						type="light"
						bordered
						title="Horizontal Form"
						title-sbold
						title-uppercased
						title-color="dark"
						icon="icon-settings"
						icon-color="dark"
					>
						<template slot="actions">
							<div class="btn-group btn-group-devided" data-toggle="buttons">
								<label class="btn btn-transparent dark btn-outline btn-circle btn-sm active">
									<input type="radio" name="options" class="toggle" id="option1">Actions</label>
								<label class="btn btn-transparent dark btn-outline btn-circle btn-sm">
									<input type="radio" name="options" class="toggle" id="option2">Settings</label>
							</div>
						</template>
						<m-portlet-block>
							<form class="form-horizontal" role="form">
								<div class="form-body">
									<m-form-group
									label="Block Help"
									label-column="col-md-3"
									horizontal>
										<m-bs-input
										label-column="col-md-3"
										input-column="col-md-9"
										placeholder="Enter text"
										help-msg="A block of help text"
										help-msg-display="block" />
										<!-- <m-help-msg display="block">A block of help text</m-help-msg> -->
									</m-form-group>
									<m-form-group
									horizontal
									label="Inline Help"
									label-column="col-md-3">
										<m-bs-input
										input-column="col-md-9"
										display-inline
										placeholder="Enter text"
										help-msg="Inline help."
										help-msg-display="inline" />
										<!-- <m-help-msg display="inline">Inline help.</m-help-msg> -->
									</m-form-group>
									<m-form-group
									label="Input Group"
									label-column="col-md-3"
									horizontal>
										<m-column size="9">
											<m-bs-input
											placeholder="Email Address"
											input-column="col-md-9"
											help-msg=" Inline help. "
											help-msg-display="inline"
											left-icon-type="addon"
											left-icon="fa fa-envelope"></m-bs-input>
										</m-column>
									</m-form-group>
									<m-form-group
									label="Email Address"
									label-column="col-md-3"
									horizontal>
										<m-column :size="9">
											<m-bs-input
											input-type="email"
											placeholder="Email address"
											left-icon-type="addon"
											left-icon="fa fa-envelope"></m-bs-input>
										</m-column>
									</m-form-group>
									<!-- <div class="form-group">
											<label class="col-md-3 control-label">Email Address</label>
											<div class="col-md-9">
													<div class="input-group">
															<span class="input-group-addon">
																	<i class="fa fa-envelope"></i>
															</span>
															<input type="email" class="form-control" placeholder="Email Address"> </div>
											</div>
									</div> -->
									<div class="form-group">
											<label class="col-md-3 control-label">Password</label>
											<div class="col-md-9">
													<div class="input-group">
															<input type="password" class="form-control" placeholder="Password">
															<span class="input-group-addon">
																	<i class="fa fa-user"></i>
															</span>
													</div>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Left Icon</label>
											<div class="col-md-9">
													<div class="input-icon">
															<i class="fa fa-bell-o"></i>
															<input type="text" class="form-control" placeholder="Left icon"> </div>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Right Icon</label>
											<div class="col-md-9">
													<div class="input-icon right">
															<i class="fa fa-microphone"></i>
															<input type="text" class="form-control" placeholder="Right icon"> </div>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Icon Input in Group Input</label>
											<div class="col-md-9">
													<div class="input-group">
															<div class="input-icon">
																	<i class="fa fa-lock fa-fw"></i>
																	<input id="newpassword" class="form-control" type="text" name="password" placeholder="password" /> </div>
															<span class="input-group-btn">
																	<button id="genpassword" class="btn btn-success" type="button">
																			<i class="fa fa-arrow-left fa-fw"></i> Random</button>
															</span>
													</div>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Input With Spinner</label>
											<div class="col-md-9">
													<input type="password" class="form-control spinner" placeholder="Password"> </div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Static Control</label>
											<div class="col-md-9">
													<p class="form-control-static"> email@example.com </p>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Disabled</label>
											<div class="col-md-9">
													<input type="password" class="form-control" placeholder="Disabled" disabled> </div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Readonly</label>
											<div class="col-md-9">
													<input type="password" class="form-control" placeholder="Readonly" readonly> </div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Dropdown</label>
											<div class="col-md-9">
													<select class="form-control">
															<option>Option 1</option>
															<option>Option 2</option>
															<option>Option 3</option>
															<option>Option 4</option>
															<option>Option 5</option>
													</select>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Multiple Select</label>
											<div class="col-md-9">
													<select multiple class="form-control">
															<option>Option 1</option>
															<option>Option 2</option>
															<option>Option 3</option>
															<option>Option 4</option>
															<option>Option 5</option>
													</select>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Textarea</label>
											<div class="col-md-9">
													<textarea class="form-control" rows="3"></textarea>
											</div>
									</div>
									<div class="form-group">
											<label for="exampleInputFile" class="col-md-3 control-label">File input</label>
											<div class="col-md-9">
													<input type="file" id="exampleInputFile">
													<p class="help-block"> some help text here. </p>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Checkboxes</label>
											<div class="col-md-9">
													<div class="mt-checkbox-list">
															<label class="mt-checkbox">
																	<input type="checkbox"> Checkbox 1
																	<span></span>
															</label>
															<label class="mt-checkbox">
																	<input type="checkbox"> Checkbox 1
																	<span></span>
															</label>
															<label class="mt-checkbox mt-checkbox-disabled">
																	<input type="checkbox" disabled> Disabled
																	<span></span>
															</label>
													</div>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Outline Checkboxes</label>
											<div class="col-md-9">
													<div class="mt-checkbox-list">
															<label class="mt-checkbox mt-checkbox-outline">
																	<input type="checkbox"> Checkbox 1
																	<span></span>
															</label>
															<label class="mt-checkbox mt-checkbox-outline">
																	<input type="checkbox"> Checkbox 1
																	<span></span>
															</label>
															<label class="mt-checkbox mt-checkbox-outline mt-checkbox-disabled">
																	<input type="checkbox" disabled> Disabled
																	<span></span>
															</label>
													</div>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Inline Checkboxes</label>
											<div class="col-md-9">
													<div class="mt-checkbox-inline">
															<label class="mt-checkbox">
																	<input type="checkbox" id="inlineCheckbox21" value="option1"> Checkbox 1
																	<span></span>
															</label>
															<label class="mt-checkbox">
																	<input type="checkbox" id="inlineCheckbox22" value="option2"> Checkbox 2
																	<span></span>
															</label>
															<label class="mt-checkbox mt-checkbox-disabled">
																	<input type="checkbox" id="inlineCheckbox23" value="option3" disabled> Disabled
																	<span></span>
															</label>
													</div>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Radios</label>
											<div class="col-md-9">
													<div class="mt-radio-list">
															<label class="mt-radio">
																	<input type="radio" name="optionsRadios" id="optionsRadios22" value="option1" checked> Option 1
																	<span></span>
															</label>
															<label class="mt-radio">
																	<input type="radio" name="optionsRadios" id="optionsRadios23" value="option2" checked> Option 2
																	<span></span>
															</label>
															<label class="mt-radio mt-radio-disabled">
																	<input type="radio" name="optionsRadios" id="optionsRadios24" value="option2" disabled> Disabled
																	<span></span>
															</label>
													</div>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Outline Radios</label>
											<div class="col-md-9">
													<div class="mt-radio-list">
															<label class="mt-radio mt-radio-outline">
																	<input type="radio" name="optionsRadios" id="optionsRadios22" value="option1" checked> Option 1
																	<span></span>
															</label>
															<label class="mt-radio mt-radio-outline">
																	<input type="radio" name="optionsRadios" id="optionsRadios23" value="option2" checked> Option 2
																	<span></span>
															</label>
															<label class="mt-radio mt-radio-outline mt-radio-disabled">
																	<input type="radio" name="optionsRadios" id="optionsRadios24" value="option2" disabled> Disabled
																	<span></span>
															</label>
													</div>
											</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">Inline Radio</label>
											<div class="col-md-9">
													<div class="mt-radio-inline">
															<label class="mt-radio">
																	<input type="radio" name="optionsRadios" id="optionsRadios25" value="option1" checked> Option 1
																	<span></span>
															</label>
															<label class="mt-radio">
																	<input type="radio" name="optionsRadios" id="optionsRadios26" value="option2" checked> Option 2
																	<span></span>
															</label>
															<label class="mt-radio mt-radio-disabled">
																	<input type="radio" name="optionsRadios" id="optionsRadios27" value="option3" disabled> Disabled
																	<span></span>
															</label>
													</div>
											</div>
									</div>
								</div>
								<div class="form-actions">
									<div class="row">
										<div class="col-md-offset-3 col-md-9">
											<button type="submit" class="btn green">Submit</button>
											<button type="button" class="btn default">Cancel</button>
										</div>
									</div>
								</div>
							</form>
						</m-portlet-block>
					</m-portlet>
					<!-- END SAMPLE FORM PORTLET-->
					<!-- BEGIN SAMPLE FORM PORTLET-->
					<div class="portlet box purple ">
							<div class="portlet-title">
									<div class="caption">
											<i class="fa fa-gift"></i> Horizontal Form Height Sizing </div>
									<div class="tools">
											<a href="" class="collapse"> </a>
											<a href="#portlet-config" data-toggle="modal" class="config"> </a>
											<a href="" class="reload"> </a>
											<a href="" class="remove"> </a>
									</div>
							</div>
							<div class="portlet-body form">
									<form class="form-horizontal" role="form">
											<div class="form-body">
													<div class="form-group">
															<label class="col-md-3 control-label">Large Input</label>
															<div class="col-md-9">
																	<input type="text" class="form-control input-lg" placeholder="Large Input"> </div>
													</div>
													<div class="form-group">
															<label class="col-md-3 control-label">Default Input</label>
															<div class="col-md-9">
																	<input type="text" class="form-control" placeholder="Default Input"> </div>
													</div>
													<div class="form-group">
															<label class="col-md-3 control-label">Small Input</label>
															<div class="col-md-9">
																	<input type="text" class="form-control input-sm" placeholder="Default Input"> </div>
													</div>
													<div class="form-group">
															<label class="col-md-3 control-label">Large Select</label>
															<div class="col-md-9">
																	<select class="form-control input-lg">
																			<option>Option 1</option>
																			<option>Option 2</option>
																			<option>Option 3</option>
																			<option>Option 4</option>
																			<option>Option 5</option>
																	</select>
															</div>
													</div>
													<div class="form-group">
															<label class="col-md-3 control-label">Default Select</label>
															<div class="col-md-9">
																	<select class="form-control">
																			<option>Option 1</option>
																			<option>Option 2</option>
																			<option>Option 3</option>
																			<option>Option 4</option>
																			<option>Option 5</option>
																	</select>
															</div>
													</div>
													<div class="form-group">
															<label class="col-md-3 control-label">Small Select</label>
															<div class="col-md-9">
																	<select class="form-control input-sm">
																			<option>Option 1</option>
																			<option>Option 2</option>
																			<option>Option 3</option>
																			<option>Option 4</option>
																			<option>Option 5</option>
																	</select>
															</div>
													</div>
											</div>
											<div class="form-actions right1">
													<button type="button" class="btn default">Cancel</button>
													<button type="submit" class="btn green">Submit</button>
											</div>
									</form>
							</div>
					</div>
					<!-- END SAMPLE FORM PORTLET-->
					<!-- BEGIN SAMPLE FORM PORTLET-->
					<div class="portlet box purple ">
							<div class="portlet-title">
									<div class="caption">
											<i class="fa fa-gift"></i> Fluid Input Groups </div>
									<div class="tools">
											<a href="" class="collapse"> </a>
											<a href="#portlet-config" data-toggle="modal" class="config"> </a>
											<a href="" class="reload"> </a>
											<a href="" class="remove"> </a>
									</div>
							</div>
							<div class="portlet-body">
									<h4 class="block">Checkboxe Addons</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-6">
															<div class="input-group">
																	<span class="input-group-addon">
																			<input type="checkbox">
																			<span></span>
																	</span>
																	<input type="text" class="form-control"> </div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
													<div class="col-md-6">
															<div class="input-group">
																	<input type="text" class="form-control">
																	<span class="input-group-addon">
																			<input type="checkbox"> </span>
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
											<!-- /.row -->
									</form>
									<h4 class="block">Button Addons</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-6">
															<div class="input-group">
																	<span class="input-group-btn">
																			<button class="btn red" type="button">Go!</button>
																	</span>
																	<input type="text" class="form-control"> </div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
													<div class="col-md-6">
															<div class="input-group">
																	<input type="text" class="form-control">
																	<span class="input-group-btn">
																			<button class="btn blue" type="button">Go!</button>
																	</span>
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
											<!-- /.row -->
									</form>
									<h4 class="block">Button Addons On Both Sides</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-12">
															<div class="input-group">
																	<span class="input-group-btn">
																			<button class="btn red" type="button">Go!</button>
																	</span>
																	<input type="text" class="form-control">
																	<span class="input-group-btn">
																			<button class="btn blue" type="button">Go!</button>
																	</span>
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
									</form>
									<h4 class="block">Buttons With Dropdowns</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-6">
															<div class="input-group">
																	<div class="input-group-btn">
																			<button type="button" class="btn green dropdown-toggle" data-toggle="dropdown">Action
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<!-- /btn-group -->
																	<input type="text" class="form-control"> </div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
													<div class="col-md-6">
															<div class="input-group">
																	<input type="text" class="form-control">
																	<div class="input-group-btn">
																			<button type="button" class="btn yellow dropdown-toggle" data-toggle="dropdown">Action
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu pull-right">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<!-- /btn-group -->
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
											<!-- /.row -->
									</form>
									<h4 class="block">Buttons With Dropdowns On Both Sides</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-12">
															<div class="input-group">
																	<div class="input-group-btn">
																			<button type="button" class="btn green dropdown-toggle" data-toggle="dropdown">Action
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<!-- /btn-group -->
																	<input type="text" class="form-control">
																	<div class="input-group-btn">
																			<button type="button" class="btn yellow dropdown-toggle" data-toggle="dropdown">Action
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu pull-right">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<!-- /btn-group -->
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
											<!-- /.row -->
									</form>
									<h4 class="block">Segmented Buttons</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-6">
															<div class="input-group">
																	<div class="input-group-btn">
																			<button type="button" class="btn default" tabindex="-1">Action</button>
																			<button type="button" class="btn default dropdown-toggle" data-toggle="dropdown" tabindex="-1">
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu" role="menu">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<input type="text" class="form-control"> </div>
															<!-- /.input-group -->
													</div>
													<!-- /.col-md-6 -->
													<div class="col-md-6">
															<div class="input-group">
																	<input type="text" class="form-control">
																	<div class="input-group-btn">
																			<button type="button" class="btn green" tabindex="-1">Action</button>
																			<button type="button" class="btn green dropdown-toggle" data-toggle="dropdown" tabindex="-1">
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu pull-right" role="menu">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
															</div>
															<!-- /.input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
									</form>
							</div>
					</div>
					<!-- END SAMPLE FORM PORTLET-->
					<!-- BEGIN SAMPLE FORM PORTLET-->
					<div class="portlet box purple ">
							<div class="portlet-title">
									<div class="caption">
											<i class="fa fa-gift"></i> Fixed Input Groups </div>
									<div class="tools">
											<a href="" class="collapse"> </a>
											<a href="#portlet-config" data-toggle="modal" class="config"> </a>
											<a href="" class="reload"> </a>
											<a href="" class="remove"> </a>
									</div>
							</div>
							<div class="portlet-body">
									<h4 class="block">Checkboxe Addons</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-6">
															<div class="input-group input-medium">
																	<span class="input-group-addon">
																			<input type="checkbox"> </span>
																	<input type="text" class="form-control" placeholder=".input-medium"> </div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
													<div class="col-md-6">
															<div class="input-group input-medium">
																	<input type="text" class="form-control" placeholder=".input-medium">
																	<span class="input-group-addon">
																			<input type="checkbox"> </span>
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
											<!-- /.row -->
									</form>
									<h4 class="block">Button Addons</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-6">
															<div class="input-group input-medium">
																	<span class="input-group-btn">
																			<button class="btn red" type="button">Go!</button>
																	</span>
																	<input type="text" class="form-control" placeholder=".input-medium"> </div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
													<div class="col-md-6">
															<div class="input-group input-medium">
																	<input type="text" class="form-control" placeholder=".input-medium">
																	<span class="input-group-btn">
																			<button class="btn blue" type="button">Go!</button>
																	</span>
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
											<!-- /.row -->
									</form>
									<h4 class="block">Button Addons On Both Sides</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-12">
															<div class="input-group input-large">
																	<span class="input-group-btn">
																			<button class="btn red" type="button">Go!</button>
																	</span>
																	<input type="text" class="form-control" placeholder=".input-large">
																	<span class="input-group-btn">
																			<button class="btn blue" type="button">Go!</button>
																	</span>
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
									</form>
									<h4 class="block">Buttons With Dropdowns</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-6">
															<div class="input-group input-medium">
																	<div class="input-group-btn">
																			<button type="button" class="btn green dropdown-toggle" data-toggle="dropdown">Action
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<!-- /btn-group -->
																	<input type="text" class="form-control" placeholder=".input-medium"> </div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
													<div class="col-md-6">
															<div class="input-group input-medium">
																	<input type="text" class="form-control" placeholder=".input-medium">
																	<div class="input-group-btn">
																			<button type="button" class="btn yellow dropdown-toggle" data-toggle="dropdown">Action
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu pull-right">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<!-- /btn-group -->
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
											<!-- /.row -->
									</form>
									<h4 class="block">Buttons With Dropdowns On Both Sides</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-12">
															<div class="input-group input-xlarge">
																	<div class="input-group-btn">
																			<button type="button" class="btn green dropdown-toggle" data-toggle="dropdown">Action
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<!-- /btn-group -->
																	<input type="text" class="form-control" placeholder=".input-xlarge">
																	<div class="input-group-btn">
																			<button type="button" class="btn yellow dropdown-toggle" data-toggle="dropdown">Action
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu pull-right">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<!-- /btn-group -->
															</div>
															<!-- /input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
											<!-- /.row -->
									</form>
									<h4 class="block">Segmented Buttons</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-12">
															<div class="input-group input-large">
																	<div class="input-group-btn">
																			<button type="button" class="btn default" tabindex="-1">Action</button>
																			<button type="button" class="btn default dropdown-toggle" data-toggle="dropdown" tabindex="-1">
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu" role="menu">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
																	<input type="text" class="form-control" placeholder=".input-large"> </div>
															<!-- /.input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
									</form>
									<form role="form" class="margin-top-10">
											<div class="row">
													<div class="col-md-12">
															<div class="input-group input-large">
																	<input type="text" class="form-control" placeholder=".input-large">
																	<div class="input-group-btn">
																			<button type="button" class="btn green" tabindex="-1">Action</button>
																			<button type="button" class="btn green dropdown-toggle" data-toggle="dropdown" tabindex="-1">
																					<i class="fa fa-angle-down"></i>
																			</button>
																			<ul class="dropdown-menu" role="menu">
																					<li>
																							<a href="javascript:;"> Action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Another action </a>
																					</li>
																					<li>
																							<a href="javascript:;"> Something else here </a>
																					</li>
																					<li class="divider"> </li>
																					<li>
																							<a href="javascript:;"> Separated link </a>
																					</li>
																			</ul>
																	</div>
															</div>
															<!-- /.input-group -->
													</div>
													<!-- /.col-md-6 -->
											</div>
									</form>
							</div>
					</div>
					<!-- END SAMPLE FORM PORTLET-->
					<div class="portlet box blue ">
							<div class="portlet-title">
									<div class="caption">
											<i class="fa fa-gift"></i> Validation States </div>
									<div class="tools">
											<a href="" class="collapse"> </a>
											<a href="#portlet-config" data-toggle="modal" class="config"> </a>
											<a href="" class="reload"> </a>
											<a href="" class="remove"> </a>
									</div>
							</div>
							<div class="portlet-body form">
									<form role="form">
											<div class="form-body">
													<div class="form-group has-success">
															<label class="control-label">Input with success</label>
															<input type="text" class="form-control" id="inputSuccess"> </div>
													<div class="form-group has-warning">
															<label class="control-label">Input with warning</label>
															<input type="text" class="form-control" id="inputWarning"> </div>
													<div class="form-group has-error">
															<label class="control-label">Input with error</label>
															<input type="text" class="form-control" id="inputError"> </div>
											</div>
											<div class="form-actions">
													<button type="button" class="btn default">Cancel</button>
													<button type="submit" class="btn red">Submit</button>
											</div>
									</form>
							</div>
					</div>
					<div class="portlet box yellow ">
							<div class="portlet-title">
									<div class="caption">
											<i class="fa fa-gift"></i> Validation States With Icons </div>
									<div class="tools">
											<a href="" class="collapse"> </a>
											<a href="#portlet-config" data-toggle="modal" class="config"> </a>
											<a href="" class="reload"> </a>
											<a href="" class="remove"> </a>
									</div>
							</div>
							<div class="portlet-body form">
									<form role="form">
											<div class="form-body">
													<div class="form-group">
															<label class="control-label">Default input</label>
															<div class="input-icon right">
																	<i class="fa fa-info-circle tooltips" data-original-title="Email address" data-container="body"></i>
																	<input type="text" class="form-control"> </div>
													</div>
													<div class="form-group has-success">
															<label class="control-label">Input with success</label>
															<div class="input-icon right">
																	<i class="fa fa-check tooltips" data-original-title="You look OK!" data-container="body"></i>
																	<input type="text" class="form-control"> </div>
													</div>
													<div class="form-group has-warning">
															<label class="control-label">Input with warning</label>
															<div class="input-icon right">
																	<i class="fa fa-warning tooltips" data-original-title="please provide an email" data-container="body"></i>
																	<input type="text" class="form-control"> </div>
													</div>
													<div class="form-group has-error">
															<label class="control-label">Input with error</label>
															<div class="input-icon right">
																	<i class="fa fa-exclamation tooltips" data-original-title="please write a valid email" data-container="body"></i>
																	<input type="text" class="form-control"> </div>
													</div>
											</div>
											<div class="form-actions right">
													<button type="button" class="btn default">Cancel</button>
													<button type="submit" class="btn green">Submit</button>
											</div>
									</form>
							</div>
					</div>
					<div class="portlet box purple">
							<div class="portlet-title">
									<div class="caption">
											<i class="fa fa-gift"></i> Horizontal Form Validation States </div>
									<div class="tools">
											<a href="" class="collapse"> </a>
											<a href="#portlet-config" data-toggle="modal" class="config"> </a>
											<a href="" class="reload"> </a>
											<a href="" class="remove"> </a>
									</div>
							</div>
							<div class="portlet-body form">
									<form role="form" class="form-horizontal">
											<div class="form-body">
													<div class="form-group">
															<label class="col-md-4 control-label">Default input</label>
															<div class="col-md-8">
																	<div class="input-icon right">
																			<i class="fa fa-info-circle tooltips" data-original-title="Email address" data-container="body"></i>
																			<input type="text" class="form-control"> </div>
															</div>
													</div>
													<div class="form-group has-success">
															<label class="col-md-4 control-label">Input with success</label>
															<div class="col-md-8">
																	<div class="input-icon right">
																			<i class="fa fa-check tooltips" data-original-title="You look OK!" data-container="body"></i>
																			<input type="text" class="form-control"> </div>
															</div>
													</div>
													<div class="form-group has-warning">
															<label class="col-md-4 control-label">Input with warning</label>
															<div class="col-md-8">
																	<div class="input-icon right">
																			<i class="fa fa-warning tooltips" data-original-title="please provide an email" data-container="body"></i>
																			<input type="text" class="form-control"> </div>
															</div>
													</div>
													<div class="form-group has-error">
															<label class="col-md-4 control-label">Input with error</label>
															<div class="col-md-8">
																	<div class="input-icon right">
																			<i class="fa fa-exclamation tooltips" data-original-title="please write a valid email" data-container="body"></i>
																			<input type="text" class="form-control"> </div>
															</div>
													</div>
											</div>
											<div class="form-actions">
													<div class="row">
															<div class="col-md-offset-4 col-md-8">
																	<button type="button" class="btn default">Cancel</button>
																	<button type="submit" class="btn blue">Submit</button>
															</div>
													</div>
											</div>
									</form>
							</div>
					</div>
			</m-column>
	</m-row>
	<m-row>
			<div class="col-md-12">
					<!-- BEGIN SAMPLE FORM PORTLET-->
					<div class="portlet light bordered">
							<div class="portlet-title">
									<div class="caption">
											<i class="icon-share font-dark"></i>
											<span class="caption-subject font-dark bold uppercase">More Form Samples</span>
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
									</div>
							</div>
							<div class="portlet-body">
									<h4>Inline Form</h4>
									<form class="form-inline" role="form">
											<div class="form-group">
													<label class="sr-only" for="exampleInputEmail2">Email address</label>
													<input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email"> </div>
											<div class="form-group">
													<label class="sr-only" for="exampleInputPassword2">Password</label>
													<input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password"> </div>
											<label class="mt-checkbox">
													<input type="checkbox"> Remember me
													<span></span>
											</label>
											<button type="submit" class="btn btn-default">Sign in</button>
									</form>
									<hr>
									<h4>Inline Form With Icons</h4>
									<form class="form-inline" role="form">
											<div class="form-group">
													<label class="sr-only" for="exampleInputEmail22">Email address</label>
													<div class="input-icon">
															<i class="fa fa-envelope"></i>
															<input type="email" class="form-control" id="exampleInputEmail22" placeholder="Enter email"> </div>
											</div>
											<div class="form-group">
													<label class="sr-only" for="exampleInputPassword42">Password</label>
													<div class="input-icon">
															<i class="fa fa-user"></i>
															<input type="password" class="form-control" id="exampleInputPassword42" placeholder="Password"> </div>
											</div>
											<label class="mt-checkbox">
													<input type="checkbox"> Remember me
													<span></span>
											</label>
											<button type="submit" class="btn btn-default">Sign in</button>
									</form>
									<hr>
									<h4>Horizontal Form</h4>
									<form class="form-horizontal" role="form">
											<div class="form-group">
													<label for="inputEmail1" class="col-md-2 control-label">Email</label>
													<div class="col-md-4">
															<input type="email" class="form-control" id="inputEmail1" placeholder="Email"> </div>
											</div>
											<div class="form-group">
													<label for="inputPassword12" class="col-md-2 control-label">Password</label>
													<div class="col-md-4">
															<input type="password" class="form-control" id="inputPassword12" placeholder="Password"> </div>
											</div>
											<div class="form-group">
													<div class="col-md-offset-2 col-md-4">
															<label class="mt-checkbox">
																	<input type="checkbox"> Remember me
																	<span></span>
															</label>
													</div>
											</div>
											<div class="form-group">
													<div class="col-md-offset-2 col-md-10">
															<button type="submit" class="btn blue">Sign in</button>
													</div>
											</div>
									</form>
									<hr>
									<h4>Horizontal Form With Icons</h4>
									<form class="form-horizontal" role="form">
											<div class="form-group">
													<label for="inputEmail12" class="col-md-2 control-label">Email</label>
													<div class="col-md-4">
															<div class="input-icon">
																	<i class="fa fa-envelope"></i>
																	<input type="email" class="form-control" id="inputEmail12" placeholder="Email"> </div>
													</div>
											</div>
											<div class="form-group">
													<label for="inputPassword1" class="col-md-2 control-label">Password</label>
													<div class="col-md-4">
															<div class="input-icon right">
																	<i class="fa fa-user"></i>
																	<input type="password" class="form-control" id="inputPassword1" placeholder="Password"> </div>
															<div class="help-block"> with right aligned icon </div>
													</div>
											</div>
											<div class="form-group">
													<div class="col-md-offset-2 col-md-4">
															<label class="mt-checkbox">
																	<input type="checkbox"> Remember me
																	<span></span>
															</label>
													</div>
											</div>
											<div class="form-group">
													<div class="col-md-offset-2 col-md-10">
															<button type="submit" class="btn green">Sign in</button>
													</div>
											</div>
									</form>
									<hr>
									<h4>Column Sizing</h4>
									<form role="form">
											<div class="row">
													<div class="col-md-2">
															<input type="text" class="form-control" placeholder=".col-md-2"> </div>
													<div class="col-md-3">
															<input type="text" class="form-control" placeholder=".col-md-3"> </div>
													<div class="col-md-4">
															<input type="text" class="form-control" placeholder=".col-md-4"> </div>
													<div class="col-md-3">
															<input type="text" class="form-control" placeholder=".col-md-2"> </div>
											</div>
									</form>
							</div>
					</div>
					<!-- END SAMPLE FORM PORTLET-->
			</div>
	</m-row>
	</div>
</template>

<script>
import $ from "jquery"
import mPortlet from "../../components/metronic/structure/m-portlet.vue"
import mPortletBlock from "../../components/metronic/structure/m-portlet-block.vue"

import mRow from "../../components/metronic/structure/m-row.vue"
import mColumn from "../../components/metronic/structure/m-column.vue"

import mButton from "../../components/metronic/ui/m-button.vue"
import mButtonGroup from "../../components/metronic/ui/m-button-group.vue"

import mFormGroup from "../../components/metronic/forms/m-form-group.vue"
import mBootstrapInput from "../../components/metronic/forms/m-bootstrap-input.vue"
import mHelpMsg from "../../components/metronic/forms/help-msg.vue"
import mBootstrapSelect from "../../components/metronic/forms/m-bootstrap-select.vue"
import mBootstrapSelectOption from "../../components/metronic/forms/m-bootstrap-select-option.vue"
import mBootstrapTextarea from "../../components/metronic/forms/m-bootstrap-textarea.vue"
import mBootstrapCheckboxGroup from "../../components/metronic/forms/m-bootstrap-checkbox-group.vue"
import mBootstrapCheckbox from "../../components/metronic/forms/m-bootstrap-checkbox.vue"
import mBootstrapRadioGroup from "../../components/metronic/forms/m-bootstrap-radio-group.vue"
import mBootstrapRadio from "../../components/metronic/forms/m-bootstrap-radio.vue"
import mValidatedInput from "../../components/metronic/forms/m-input-validated.vue"

import mIcon from "../../components/metronic/graphic/m-icon.vue"

export default {
	components: {
		mPortlet,
		mPortletBlock,
		mRow,
		mColumn,
		mButton,
		mButtonGroup,
		mFormGroup,
		"m-bs-input": mBootstrapInput,
		mHelpMsg,
		"m-bs-select": mBootstrapSelect,
		"m-bs-option": mBootstrapSelectOption,
		"m-bs-textarea": mBootstrapTextarea,
		"m-bs-checkbox-group": mBootstrapCheckboxGroup,
		"m-bs-checkbox": mBootstrapCheckbox,
		"m-bs-radio-group": mBootstrapRadioGroup,
		"m-bs-radio": mBootstrapRadio,
		"m-validated-input": mValidatedInput,
		mIcon
	},
	methods: {
		myFunc: function (x) {
			var def = $.Deferred()
			$.ajax({
				url: "https://jsonplaceholder.typicode.com/users",
				method: "GET"
			}).done(function (data) {
				if (data) {
					data.forEach(function (el) {
						if (el.username === x) {
							def.resolve(false)
							return def
						}
					})
					def.resolve(true)
				}
			})
			return def
		}
	}
}
</script>

<style>

</style>
