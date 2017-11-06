<template>
	<input type="button" :class="btnStyle" :value="value"/>
</template>

<script>
import ButtonMixin from "../mixins/button"

export default {
	mixins: [
		ButtonMixin
	],
	props: {
		value: {
			type: String,
			default: ""
		}
	}
}
</script>

<style>

</style>
