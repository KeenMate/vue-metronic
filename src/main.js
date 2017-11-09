import Vue from "vue"
import VueRouter from "vue-router"

import App from "./App.vue"

import { routes } from "./routes"

const router = new VueRouter({
	routes
})

Vue.use(VueRouter)

new Vue({
	el: "#app",
	router,
	render: h => h(App)
})
