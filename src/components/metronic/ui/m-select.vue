<template>
	<div class="form-group form-md-line-input">
		<select class="form-control" :id="selectId" @input="onChange($event.target.value)">
			<template v-for="(option, index) in options">
				<option :key="index" :value="option.Value">{{option.Title}}</option>
			</template>
		</select>
		<label :for="selectId">{{selectLabel}}</label>
	</div>
</template>

<script>
	export default {
		name: "SelectComponent",
		props: [
			"value",
			"options",
			"id",
			"title"
		],
		computed: {
			selectId () {
				return this.id ? this.selectData.Id : "_" + Math.random().toString(36).substring(2, 9)
			},
			selectLabel () {
				return this.title ? this.title : "Pass some text to title attribute"
			}
		},
		methods: {
			onChange (val) {
				this.$emit("input", val)
			}
		}
	}
</script>