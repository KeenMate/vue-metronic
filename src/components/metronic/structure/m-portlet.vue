<template>
		<div class="portlet light tasks-widget bordered">
				<div class="portlet-title">
						<div class="caption">
								<span class="caption-subject font-green-haze bold uppercase">{{title}}</span>
								<span v-if="caption!=''" class="caption-helper">{{caption}}</span>
						</div>
						<slot name="actions"></slot>
						<!-- <div class="actions">
								<div class="btn-group">
										<a class="btn green-haze btn-outline btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
												<i class="fa fa-angle-down"></i>
										</a>
										<ul class="dropdown-menu pull-right">
												<li>
														<a href="javascript:;">
																<i class="i"></i> Option 1</a>
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
								</div>
						</div> -->
				</div>
				<div class="portlet-body util-btn-margin-bottom-5">
						<slot></slot>
				</div>
		</div>
</template>



<script>
export default {
	name: "PortletComponent",
	props: ["title", "caption"]
}
</script>
