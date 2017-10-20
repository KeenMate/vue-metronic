<template class="row">
	<div id="home" class="col-md-10 col-md-offset-1">
		<div id="welcome">
			{{welcome}}
		</div>
		
		<router-view></router-view>
		
		
	</div>
</template>

<script>
import InputField from "./metronic/ui/m-input.vue"
import SelectField from "./metronic/ui/m-select.vue"
import MyButton from "./metronic/ui/m-button.vue"

export default {
	name: "HomeScreen",
	components: {
		InputField,
		SelectField,
		MyButton
	},
	data () {
		return {
			number11: 12,
			welcome: "Vítejte na stránce pro správu plateb pro RK NOTES.",
			array: [
				{
					BusinessEntityName: "Dům #1",
					Owners: ["John Smith"],
					PaidBy: ["John Smith"],
					CashPaid: 8000,
					Date: new Date("2017.2.4")
				},
				{
					BusinessEntityName: "Dům #2",
					Owners: ["Teddy Emmet", "Josh Murry", "Elizabeth Ruzierr"],
					PaidBy: ["Teddy Emmet", "Josh Murry"],
					CashPaid: 2333,
					Date: new Date("2017.12.4")
				},
				{
					BusinessEntityName: "Dům #3",
					Owners: ["Co-owner Emanuel", "Owner Peeriel"],
					PaidBy: ["Owner Peeriel"],
					CashPaid: 8645,
					Date: new Date("2017.12.4")
				}
			],
			options: [
				{
					Title: "Demo1",
					Value: "1"
				},
				{
					Title: "Demo2",
					Value: "2"
				},
				{
					Title: "Demo3",
					Value: "3"
				}
			],
			choice: "Something to choose"
		}
	}
}
</script>
