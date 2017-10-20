<template>
	<div id="newexpenseform">
		<form action="Home/Test" method="POST">
			<label for="name">Jméno</label>
			<input v-model="name" type="text" id="name" name="name">
			<m-input :value="BusinessEntityName"></m-input>
			<br>
			<label for="surname">Příjmení</label>
			<input v-model="surname" type="text" id="surname" name="surname">
			<br>
			<label for="amount">Částka</label>
			<input v-model="amount" type="number" id="amount" name="amount">
			<br>
			<!-- <label for="date">Datum</label>
			<input v-model="date" type="date" id="date" name="date">
			<br> -->
			<input :disabled="!isValid()" type="submit" value="Vytvořit příkaz k úhradě">
		</form>
	</div>
</template>

<script>
export default {
	data () {
		return {
			BusinessEntityName: "",
			Owners: [],
			PaidBy: [],
			CashPaid: 8645,
			Date: new Date()
		}
	},
	computed: {
		isValid () {
			return (this.BusinessEntityName && this.Owners.length && this.CashPaid > 0)
		}
	}
}
</script>
