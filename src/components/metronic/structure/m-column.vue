<template>
	<div :class="'col-md-' + size">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		size: {
			type: Number,
			default: 12
		}
	}
}
</script>
