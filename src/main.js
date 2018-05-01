import Vue from "vue"
import VueRouter from "vue-router"
import baseMixin from "./components/metronic/mixins/base.js"
import VueRawModel from "vue-rawmodel"
import Model1 from "./models/Model1"
import Model2 from "./models/Model2"

import App from "./App.vue"

import { routes } from "./routes"

const router = new VueRouter({
	routes
})

Vue.use(VueRouter)

Vue.use(VueRawModel)

Vue.mixin(baseMixin)

new Vue({
	el: "#app",
	models: { Model1, Model2 },
	router,
	render: h => h(App)
})
