<template>
	<ul class="pagination pagination-circle">
		<li>
			<a href="javascript:;" @click="onClickHandler(number - 1)">
				<i class="fa fa-angle-left"></i>
			</a>
		</li>
		<li :key="index" v-for="(number, index) in numberArray" @click="onClickHandler(number)">
			<a href="javascript:;">{{number}}</a>
		</li>
		<li>
			<a href="javascript:;" @click="onClickHandler(number + 1)">
				<i class="fa fa-angle-right"></i>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		minPage: {
			type: Number,
			default: 1
		},
		maxPage: {
			type: Number
		}
	},
	computed: {
		numberArray: function () {
			if (this.maxPage < this.minPage) {
				console.error("Max page is less than min page.")
				return
			}
			
			var array = []

			for (let i = this.minPage; i <= this.maxPage; i++)
				array.push(i)

			return array
		}
	},
	methods: {
		onClickHandler: function (number) {
			this.$emit("onClick", number)
		}
	}
}
</script>

<style>

</style>
