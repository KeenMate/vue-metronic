<template>
    <m-row>
        <router-view></router-view>
    </m-row>
</template>

<script>
import mRow from "../components/metronic/structure/m-row.vue"

export default {
	name: "EmptyScreen",
	components: {
		mRow
	}
}
</script>
