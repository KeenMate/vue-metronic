<template>
	<button :class="btnStyle" @click="onClick" :disabled="disabled" :data-dismiss="dismiss">
		<i v-if="preIcon?preIcon.length>0:false" :class="preIcon"></i>
		<i v-if="preIcon?preIcon.length>0:false" :class="icon"></i>
		<slot></slot>
		<i v-if="preIcon?preIcon.length>0:false" :class="postIcon"></i>
	</button>
</template>

<script>
import buttonMixin from "../mixins/button"

export default {
	mixins: [buttonMixin]
}
</script>