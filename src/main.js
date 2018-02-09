import Vue from "vue"
import VueRouter from "vue-router"
import baseMixin from "./components/metronic/mixins/base.js"

import App from "./App.vue"

import { routes } from "./routes"

const router = new VueRouter({
	routes
})

Vue.use(VueRouter)

Vue.mixin(baseMixin)

new Vue({
	el: "#app",
	router,
	render: h => h(App)
})
