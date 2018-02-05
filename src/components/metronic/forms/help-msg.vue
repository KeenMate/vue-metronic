<template>
	<span class="help-inline">
		<slot></slot>
	</span>
</template>

<script>
export default {
	props: {
		// display: {
		// 	type: String,
		// 	default: "block"
		// }
	}
	// computed: {
	// 	helpMsgSpanClass: function () {
	// 		var style = {}

	// 		switch (this.display) {
	// 		case "inline":
	// 			style["help-inline"] = true
	// 			break
	// 		case "block":
	// 			style["help-block"] = true
	// 			break
	// 		}

	// 		return style
	// 	}
	// }
}
</script>

<style>

</style>
