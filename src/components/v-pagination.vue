<template>
		<ul class="pagination">
			<li>
				<a @click="onPageChanged(1)">
					<i class="glyphicon glyphicon-step-backward"></i>
				</a>
			</li>
			<li>
				<a @click="onPageChanged(Number(current) - 1)">
					<i class="glyphicon glyphicon-chevron-left"></i>
				</a>
			</li>
			<li v-for="(number, index) in maximum" :key="index" :class="{'active': Number(number) === Number(current)}">
				<a @click="onPageChanged(number)">{{number}}</a>
			</li>
			<li>
				<a @click="onPageChanged(Number(current) + 1)">
					<i class="glyphicon glyphicon-chevron-right"></i>
				</a>
			</li>
			<li>
				<a @click="onPageChanged(Number(maximum))">
					<i class="glyphicon glyphicon-step-forward"></i>
				</a>
			</li>
		</ul>
</template>

<script>
export default {
	name: "PaginationForListComp",
	props: ["maximum", "current"],
	methods: {
		onPageChanged (newPageNumber) {
			if (newPageNumber <= this.maximum && newPageNumber > 0) this.$emit("pageChanged", newPageNumber)
			else console.log("Incorrect Page " + newPageNumber)
		}
	}
}
</script>
