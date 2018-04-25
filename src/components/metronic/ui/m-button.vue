<template>
	<button
		:type="type"
		:class="btnStyle"
		@click="onClick"
		:disabled="disabled"
		:data-dismiss="dismiss"
		:data-container="tooltip || popover ? 'body': null"
		:data-placement="tooltipPlacement"
		:data-original-title="(popover? popover : (tooltip? tooltip : null))"
		:data-content="(!tooltip && popover)? popoverContent : null"
		:data-trigger="(popoverTrigger == 'hover')? 'hover' : null"
	>
		<i v-if="preIcon?preIcon.length>0:false" :class="preIcon"></i>
		<i v-if="icon?icon.length>0:false" :class="icon"></i>
		<slot></slot>
		<i v-if="postIcon?postIcon.length>0:false" :class="postIcon"></i>
	</button>
</template>

<script>
import buttonMixin from "../mixins/button"

export default {
	mixins: [buttonMixin]
}

// <button class="btn btn-default tooltips" data-container="body" data-placement="top" data-original-title="Tooltip in top">Top</button>
</script>