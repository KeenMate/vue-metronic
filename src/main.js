import $ from "jquery"
import Vue from "vue"
import VueRouter from "vue-router"

import "./../static/metronic/metronic.css"
import "./../static/metronic/metronic"

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
