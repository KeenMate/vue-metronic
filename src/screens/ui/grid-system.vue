<template>
	 
	 <m-column>
	 
		<m-heading>
			<p> Use Metronic's Custom Grid System to build any type of UI blocks or elements that require easy vertical or horizontal content alignment and auto full height adjustment with flex column ordering support.
						<br>No JS is required and all is powered with pure CSS. </p>
		</m-heading>
		<m-portlet type="light" bordered>
			<m-portlet-block>
						<h3 class="">Adjusted Table With Equal Height Cells</h3>
						<hr>
						<!-- <div class="m-grid m-grid-demo">   [a-zA-Z,0-9. ]* by -->
							<m-grid :custom-css="['m-grid-demo']">
								<m-grid-row>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 1</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 2</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 3</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 4</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 5</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 6</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 7</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 8</m-grid-col>
								</m-grid-row>
								<m-grid-row>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 1</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 2</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 3</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 4</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 5</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 6</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 7</m-grid-col>
									<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 8</m-grid-col>
								</m-grid-row>
							</m-grid>
						<!-- </div> -->
						<!--end: Demo 1 -->
						<!-- begin: Demo 2 -->
						<br>
						<h3 class="">Column Sizing</h3>
						<p> Use <code>m-grid-col-[device_width]-[size]</code> class where <code>[device_width]</code> can be <code>xs</code>
								< 480px, <code>sm</code>
										< 768px, <code>md</code>
												< 992px, <code>lg</code>
														< 1260px and <code>[size]</code> can be within <code>1-12</code> grid size. </p>
						<hr>
						<m-grid :custom-css="['m-grid-demo']">
								<m-grid-row>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="1">m-grid-col-md-1</m-grid-col>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="2">m-grid-col-md-2</m-grid-col>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="3">m-grid-col-md-3</m-grid-col>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="6">m-grid-col-md-6</m-grid-col>
								</m-grid-row>
						</m-grid>
						<m-grid :custom-css="['m-grid-demo']">
								<m-grid-row>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="3">m-grid-col-md-3</m-grid-col>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="3">m-grid-col-md-3</m-grid-col>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="3">m-grid-col-md-3</m-grid-col>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="3">m-grid-col-md-3</m-grid-col>
								</m-grid-row>
						</m-grid>
						<m-grid :custom-css="['m-grid-demo']">
								<m-grid-row>
										<m-grid-col vAlignment="middle" hAlignment="center" :size="6">m-grid-col-md-6</m-grid-col>
										<m-grid-col vAlignment="middle" hAlignment="center" :size="3">m-grid-col-md-3</m-grid-col>
										<m-grid-col vAlignment="middle" hAlignment="center" :size="2">m-grid-col-md-2</m-grid-col>
										<m-grid-col vAlignment="middle" hAlignment="center" :size="1">m-grid-col-md-1</m-grid-col>
								</m-grid-row>
						</m-grid>
						<!--end: Demo 2 -->
						<!-- begin: Demo 3 -->
						<br>
						<h3 class="">Column Alignment</h3>
						<p> Use <code>m-grid-col-top</code>, <code>m-grid-col-middle</code> and <code>m-grid-col-bottom</code> classes to vertically align the cell content. Use <code>m-grid-col-left</code>, <code>m-grid-col-center</code> and <code>m-grid-col-right</code>                                        classes to horizontally align the cell content. </p>
						<hr>
						<m-grid :custom-css="['m-grid-demo']">
								<m-grid-row>
										<m-grid-col hAlignment="center" vAlignment="top" :size="4">Top alignment content</m-grid-col>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="4">Middle alignment content</m-grid-col>
										<m-grid-col hAlignment="center" vAlignment="bottom" :size="4">Bottom alignment content</m-grid-col>
								</m-grid-row>
								<m-grid-row>
										<m-grid-col hAlignment="left" vAlignment="middle" :size="4">Left alignment content</m-grid-col>
										<m-grid-col hAlignment="center" vAlignment="middle" :size="4">Center alignment content</m-grid-col>
										<m-grid-col hAlignment="right" vAlignment="middle" :size="4">Right alignment content</m-grid-col>
								</m-grid-row>
						</m-grid>
						<!--end: Demo 3 -->
						<!-- begin: Demo 4 -->
						<br>
						<h3 class="">Responsive Table Grid</h3>
						<p> Use <code>m-grid-responsive-xs</code>, <code>m-grid-responsive-sm</code>, <code>m-grid-responsive-md</code> or <code>m-grid-responsive-lg</code> classes to stack the columns to vertical position for respective device
								widths(*-xs
								< 480px, *-sm < 768px, *-md < 992px, *-lg < 1260px). Try to resize your browser to see how it works. </p>
										<hr>
										<h4 class="">Responsive Table Grid with <code>m-grid-responsive-xs</code></h4>
										<m-grid :custom-css="['m-grid-demo']" device-size="xs" responsive>
												<m-grid-row>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 1</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 2</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 3</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 4</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 5</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 6</m-grid-col>
												</m-grid-row>
												<m-grid-row>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 1</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 2</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 3</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 4</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 5</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 6</m-grid-col>
												</m-grid-row>
										</m-grid>
										<br>
										<h4 class="">Responsive Table Grid with <code>m-grid-responsive-sm</code></h4>
										<m-grid :custom-css="['m-grid-demo']" responsive device-size="sm">
												<m-grid-row>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 1</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 2</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 3</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 4</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 5</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 6</m-grid-col>
												</m-grid-row>
												<m-grid-row>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 1</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 2</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 3</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 4</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 5</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 6</m-grid-col>
												</m-grid-row>
										</m-grid>
										<br>
										<h4 class="">Responsive Table Grid with <code>m-grid-responsive-md</code></h4>
										<m-grid :custom-css="['m-grid-demo']" responsive device-size="md">
												<m-grid-row>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 1</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 2</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 3</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 4</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 5</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 6</m-grid-col>
												</m-grid-row>
												<m-grid-row>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 1</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 2</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 3</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 4</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 5</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 6</m-grid-col>
												</m-grid-row>
										</m-grid>
										<br>
										<h4 class="">Responsive Table Grid with <code>m-grid-responsive-lg</code></h4>
										<m-grid :custom-css="['m-grid-demo']" responsive device-size="lg">
												<m-grid-row>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 1</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 2</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 3</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 4</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 5</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 1, Column 6</m-grid-col>
												</m-grid-row>
												<m-grid-row>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 1</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 2</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 3</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 4</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 5</m-grid-col>
														<m-grid-col hAlignment="center" vAlignment="middle">Row 2, Column 6</m-grid-col>
												</m-grid-row>
										</m-grid>
										<!--end: Demo 4 -->
										<!-- begin: Demo 5 -->
										<br>
										<h3 class="">Responsive Table Grid With Flex Cell Ordering</h3>
										<p> Use <code>m-grid-flex</code> and <code>m-grid-responsive-xs</code>, <code>m-grid-responsive-sm</code>, <code>m-grid-responsive-md</code> or <code>m-grid-responsive-lg</code> classes to stack the columns to vertical
												position for respective device widths(*-xs
												< 480px, *-sm < 768px, *-md < 992px, *-lg < 1260px) with defined cell flex ordering using <code>m-grid-col-order-[order_number]</code> where [order_number] can be within <code>1-12</code>. Try to resize your browser to see how it works. </p>
										<hr>
										<m-grid :custom-css="['m-grid-demo']" flex responsive device-size="md">
												<m-grid-row>
														<m-grid-col vAlignment="middle" hAlignment="center" :order="4" background-color="yellow" font-color="white">Flex order 4</m-grid-col>
														<m-grid-col vAlignment="middle" hAlignment="center" :order="3" background-color="purple" font-color="white">Flex order 3</m-grid-col>
														<m-grid-col vAlignment="middle" hAlignment="center" :order="2" background-color="green" font-color="white">Flex order 2</m-grid-col>
														<m-grid-col vAlignment="middle" hAlignment="center" :order="1" background-color="red" font-color="white">Flex order 1</m-grid-col>
												</m-grid-row>
										</m-grid>
										<!--end: Demo 5 -->
										<!-- begin: Demo 5 -->
										<br>
										<h3 class="">Full Height Inner Content</h3>
										<p> Use <code>m-grid m-grid-full-height</code> class to make grids full height. Also you can use nested grids to control vertical position of the content as shown below: </p>
										<hr>
										<m-grid device-size="md" responsive :custom-css="['m-grid-demo']">
												<m-grid-row>
														<m-grid-col vAlignment="middle" hAlignment="center" :custom-css="['demo5col']">
																<m-grid :is-full-height="true">
																		<m-grid-col vAlignment="middle" hAlignment="center" background-color="red" font-color="white" :custom-css="['demo5innCol']">
																				Sample cell with padding
																				<br>and full height content
																		</m-grid-col>
																</m-grid>
														</m-grid-col>
														<m-grid-col vAlignment="middle" hAlignment="center" :custom-css="['demo5col']">	
																<m-grid :is-full-height="true">
																		<m-grid-col vAlignment="top" hAlignment="right" background-color="green" font-color="white" :custom-css="['demo5innCol']">
																				Sample cell with padding
																				<br>and full height content
																		</m-grid-col>
																</m-grid>
														</m-grid-col>
														<m-grid-col vAlignment="middle" hAlignment="center" :custom-css="['demo5col']">
																<m-grid :is-full-height="true">
																		<m-grid-col vAlignment="bottom" hAlignment="left" background-color="yellow" font-color="white" :custom-css="['demo5innCol']">
																				Sample cell with padding
																				<br>and full height content
																		</m-grid-col>
																</m-grid>
														</m-grid-col>
														<m-grid-col vAlignment="middle" hAlignment="center" :custom-css="['demo5col']">
																<m-grid :is-full-height="true">
																		<m-grid-col vAlignment="middle" hAlignment="right" background-color="blue" font-color="white" :custom-css="['demo5innCol']">
																				Sample cell with padding
																				<br>and full height content
																		</m-grid-col>
																</m-grid>
														</m-grid-col>
												</m-grid-row>
										</m-grid>
										<!--end: Demo 5 -->
				</m-portlet-block>
		</m-portlet>
</m-column>
</template>

<script>
import mPortlet	from "../../components/metronic/structure/m-portlet.vue"
import mPortletBlock from "../../components/metronic/structure/m-portlet-block.vue"

import mHeading from "../../components/metronic/informative/m-heading.vue"
import mColumn from "../../components/metronic/structure/m-column.vue"

import mGrid from "../../components/metronic/grid/m-grid.vue"
import mGridCol from "../../components/metronic/grid/m-grid-column.vue"
import mGridRow from "../../components/metronic/grid/m-grid-row.vue"

export default {
	components: {
		mPortlet,
		mPortletBlock,
		mHeading,
		mColumn,
		mGrid,
		mGridRow,
		mGridCol
	}

}
</script>

<style>
	.demo5col {
		padding: 30px;
		height: 400px !important;
	}
	
	.demo5innCol {
		padding: 20px;
	}
</style>
