<template>
	<ul :class="componentStyle">
		<li>
			<a href="javascript:;" @click="onClickHandler(value - 1)">
				<i class="fa fa-angle-left"></i>
			</a>
		</li>
		<li :class="{'active': number == value}" :key="index" v-for="(number, index) in pages" @click="onClickHandler(number)">
			<a href="javascript:;">{{number}}</a>
		</li>
		<li>
			<a href="javascript:;" @click="onClickHandler(value + 1)">
				<i class="fa fa-angle-right"></i>
			</a>
		</li>
	</ul>
</template>

<script>
import MetronicMixin from "../mixins/metronic-component"

export default {
	mixins: [
		MetronicMixin
	],
	props: {
		size: {
			type: String,
			default: "",
			options: ["large", "small"]
		},
		minPage: {
			type: Number,
			default: 1
		},
		maxPage: {
			type: Number
		},
		value: {
			default: this.minPage
		},
		circled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		pages: function () {
			if (this.maxPage < this.minPage) {
				console.error("Max page is less than min page.")
				return
			}
			var array = []
			for (let i = this.minPage; i <= this.maxPage; i++)
				array.push(i)
			return array
		},
		componentStyle: function () {
			var style = {
				pagination: true
			}

			if (this.size === "large")
				style["pagination-lg"] = true
			if (this.size === "small")
				style["pagination-sm"] = true
			if (this.circled)
				style["pagination-circle"] = true

			style["component-style-no-margin"] = true

			return style
		}
	},
	methods: {
		onClickHandler: function (number) {
			if (number > this.maxPage)
				this.value = this.maxPage
			else if (number < this.minPage)
				this.value = this.minPage
			else {
				this.value = number
				this.$emit("input", number)
			}
		}
	}
	// {'pagination': true, 'pagination-circle': circled, 'pagination-lg': size == 'large', 'pagination-sm': size == 'small'}
}
</script>

<style>
	.component-style-no-margin {
		margin: 0 0 !important;
	}
</style>
