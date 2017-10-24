<template>
	 
	 <m-column>
	 
		<m-heading>
			<p> Use Metronic's Custom Grid System to build any type of UI blocks or elements that require easy vertical or horizontal content alignment and auto full height adjustment with flex column ordering support.
						<br>No JS is required and all is powered with pure CSS. </p>
		</m-heading>
		
		<div class="portlet light bordered">
				<div class="portlet-body">
						<!-- begin: Demo 1 -->
						<h3 class="">Adjusted Table With Equal Height Cells</h3>
						<hr>
						<div class="m-grid m-grid-demo">
								<div class="m-grid-row">
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 1</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 2</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 3</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 4</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 5</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 6</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 7</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 8</div>
								</div>
								<div class="m-grid-row">
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 1</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 2</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 3</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 4</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 5</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 6</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 7</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 8</div>
								</div>
						</div>
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
						<div class="m-grid m-grid-demo">
								<div class="m-grid-row">
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-1">m-grid-col-md-1</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-2">m-grid-col-md-2</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-3">m-grid-col-md-3</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-6">m-grid-col-md-6</div>
								</div>
						</div>
						<div class="m-grid m-grid-demo">
								<div class="m-grid-row">
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-3">m-grid-col-md-3</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-3">m-grid-col-md-3</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-3">m-grid-col-md-3</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-3">m-grid-col-md-3</div>
								</div>
						</div>
						<div class="m-grid m-grid-demo">
								<div class="m-grid-row">
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-6">m-grid-col-md-6</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-3">m-grid-col-md-3</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-2">m-grid-col-md-2</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-1">m-grid-col-md-1</div>
								</div>
						</div>
						<!--end: Demo 2 -->
						<!-- begin: Demo 3 -->
						<br>
						<h3 class="">Column Alignment</h3>
						<p> Use <code>m-grid-col-top</code>, <code>m-grid-col-middle</code> and <code>m-grid-col-bottom</code> classes to vertically align the cell content. Use <code>m-grid-col-left</code>, <code>m-grid-col-center</code> and <code>m-grid-col-right</code>                                        classes to horizontally align the cell content. </p>
						<hr>
						<div class="m-grid m-grid-demo">
								<div class="m-grid-row">
										<div class="m-grid-col m-grid-col-top m-grid-col-center m-grid-col-md-4">Top alignment content</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-4">Middle alignment content</div>
										<div class="m-grid-col m-grid-col-bottom m-grid-col-center m-grid-col-md-4">Bottom alignment content</div>
								</div>
								<div class="m-grid-row">
										<div class="m-grid-col m-grid-col-middle m-grid-col-left m-grid-col-md-4">Left alignment content</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-md-4">Center alignment content</div>
										<div class="m-grid-col m-grid-col-middle m-grid-col-right m-grid-col-md-4">Right alignment content</div>
								</div>
						</div>
						<!--end: Demo 3 -->
						<!-- begin: Demo 4 -->
						<br>
						<h3 class="">Responsive Table Grid</h3>
						<p> Use <code>m-grid-responsive-xs</code>, <code>m-grid-responsive-sm</code>, <code>m-grid-responsive-md</code> or <code>m-grid-responsive-lg</code> classes to stack the columns to vertical position for respective device
								widths(*-xs
								< 480px, *-sm < 768px, *-md < 992px, *-lg < 1260px). Try to resize your browser to see how it works. </p>
										<hr>
										<h4 class="">Responsive Table Grid with <code>m-grid-responsive-xs</code></h4>
										<div class="m-grid m-grid-responsive-xs m-grid-demo">
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 1</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 2</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 3</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 4</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 5</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 6</div>
												</div>
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 1</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 2</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 3</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 4</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 5</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 6</div>
												</div>
										</div>
										<br>
										<h4 class="">Responsive Table Grid with <code>m-grid-responsive-sm</code></h4>
										<div class="m-grid m-grid-responsive-sm m-grid-demo">
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 1</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 2</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 3</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 4</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 5</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 6</div>
												</div>
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 1</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 2</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 3</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 4</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 5</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 6</div>
												</div>
										</div>
										<br>
										<h4 class="">Responsive Table Grid with <code>m-grid-responsive-md</code></h4>
										<div class="m-grid m-grid-responsive-md m-grid-demo">
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 1</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 2</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 3</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 4</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 5</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 6</div>
												</div>
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 1</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 2</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 3</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 4</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 5</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 6</div>
												</div>
										</div>
										<br>
										<h4 class="">Responsive Table Grid with <code>m-grid-responsive-lg</code></h4>
										<div class="m-grid m-grid-responsive-lg m-grid-demo">
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 1</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 2</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 3</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 4</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 5</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 1, Column 6</div>
												</div>
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 1</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 2</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 3</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 4</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 5</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center">Row 2, Column 6</div>
												</div>
										</div>
										<!--end: Demo 4 -->
										<!-- begin: Demo 5 -->
										<br>
										<h3 class="">Responsive Table Grid With Flex Cell Ordering</h3>
										<p> Use <code>m-grid-flex</code> and <code>m-grid-responsive-xs</code>, <code>m-grid-responsive-sm</code>, <code>m-grid-responsive-md</code> or <code>m-grid-responsive-lg</code> classes to stack the columns to vertical
												position for respective device widths(*-xs
												< 480px, *-sm < 768px, *-md < 992px, *-lg < 1260px) with defined cell flex ordering using <code>m-grid-col-order-[order_number]</code> where [order_number] can be within <code>1-12</code>. Try to resize your browser to see how it works. </p>
										<hr>
										<div class="m-grid m-grid-flex m-grid-responsive-md m-grid-demo">
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-order-4 bg-yellow font-white">Flex order 4</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-order-3 bg-purple font-white">Flex order 3</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-order-2 bg-green font-white">Flex order 2</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center m-grid-col-order-1 bg-red font-white">Flex order 1</div>
												</div>
										</div>
										<!--end: Demo 5 -->
										<!-- begin: Demo 5 -->
										<br>
										<h3 class="">Full Height Inner Content</h3>
										<p> Use <code>m-grid m-grid-full-height</code> class to make grids full height. Also you can use nested grids to control vertical position of the content as shown below: </p>
										<hr>
										<div class="m-grid m-grid-responsive-md m-grid-demo">
												<div class="m-grid-row">
														<div class="m-grid-col m-grid-col-middle m-grid-col-center" style="padding: 30px; height: 400px">
																<div class="m-grid m-grid-full-height">
																		<div class="m-grid-col m-grid-col-middle m-grid-col-center bg-red font-white" style="padding: 20px;">Sample cell with padding
																				<br>and full height content</div>
																</div>
														</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center" style="padding: 30px; height: 400px">
																<div class="m-grid m-grid-full-height">
																		<div class="m-grid-col m-grid-col-top m-grid-col-right bg-green font-white" style="padding: 20px;">Sample cell with padding
																				<br>and full height content</div>
																</div>
														</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center" style="padding: 30px; height: 400px">
																<div class="m-grid m-grid-full-height">
																		<div class="m-grid-col m-grid-col-bottom m-grid-col-left bg-yellow font-white" style="padding: 20px;">Sample cell with padding
																				<br>and full height content</div>
																</div>
														</div>
														<div class="m-grid-col m-grid-col-middle m-grid-col-center" style="padding: 30px; height: 400px">
																<div class="m-grid m-grid-full-height">
																		<div class="m-grid-col m-grid-col-middle m-grid-col-right bg-blue font-white" style="padding: 20px;">Sample cell with padding
																				<br>and full height content</div>
																</div>
														</div>
												</div>
										</div>
										<!--end: Demo 5 -->
				</div>
		</div>
</m-column>
</template>

<script>
import mHeading from "../../components/metronic/informative/m-heading.vue"
import mColumn from "../../components/metronic/structure/m-column.vue"

export default {
	components: {
		mHeading,
		mColumn
	}

}
</script>

<style>

</style>
