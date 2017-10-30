<template>
	<div tabindex="-1" 
		class="modal fade" 
		:id="id"
		:ref="id"
		role="dialog" 
		aria-hidden="true" 
		aria-labelledby="myModalLabel2" 
		style="display: none;">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" aria-hidden="true" type="button" data-dismiss="modal"></button>
						<h4 class="modal-title">{{title}}</h4>
					</div>
					<div class="modal-body">
						<slot name="body"></slot>
					</div>
					<div class="modal-footer">
						<slot name="footer"></slot>
						<m-button v-if="!this.$slots.footer" class="btn green" dismiss="modal">OK</m-button>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import $ from 'jquery'
import mButton from '../ui/m-button.vue'

export default {
	components: {
		mButton
	},
	props: {
		id: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		}
	},
	methods: {
		open: function () {
			$(this.$refs[this.id]).modal()
		}
	}
}
</script>

<style>

</style>
