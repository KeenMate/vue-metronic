<template>
  <div class="col-md-4 col-md-offset-2">
			<my-button level="success">Something else to point me to</my-button>
			<select-field v-model="choice" :options="options" label="Cedulka"></select-field>
			<input-field v-model="choice" label="Some Label Yaay" help="Is this Help?"></input-field>
			<input-field v-model="number11" type="number" label="Enter Number" help="1 - 2"></input-field>
		</div>
		<router-link :to="{ name: 'newExpense' }">Nový příkaz k úhradě</router-link>
		<list :payments="array"></list>
</template>

<script>
export default {
  
}
</script>
