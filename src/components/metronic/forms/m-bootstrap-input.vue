<template>
	<div class="form-group">
		<label>{{title}}</label>
			<div class="input-group">
				<span v-if="this.icon.length>0 && !this.iconOnRight" 
					:class="this.iconStyle === 'icon'? 'input-icon':'input-group-addon'">
					<i :class="iconStyle"></i>
				</span>
				<input type="text" class="form-control" :placeholder="placeholder">
				<span v-if="this.icon.length>0 && this.iconOnRight" 
					:class="this.iconStyle === 'icon'? 'input-icon':'input-group-addon'">
					<i :class="iconStyle"></i>
				</span>
			</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		icon: {
			type: String,
			default: ""
		},
		iconStyle: {
			type: String,
			default: "icon",
			options: ["icon", "addon"]
		},
		iconSize: {
			type: String,
			default: "",
			options: ["small", "large"]
		},
		iconOnRight: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		iconStyle: function () {
			var style = {
				fa: true
			}
			
			if (this.icon.length > 0) {
				style[this.icon] = true
			}

			return style
		}
	}
}
</script>

<style>

</style>
