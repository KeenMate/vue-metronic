import {ReactiveModel} from "vue-rawmodel"
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
class Model1 extends ReactiveModel {
	constructor (data = {}) {
		super(data)

		this.defineField("name", { // defining class property `name`
			type: "String", // setting type casting
			validate: [ // field validations
				{ // validator recipe
					validator: "presence", // validator name
					message: "This is required field" // validator error message
				}
			]
			// check the API for all available options
		})

		this.defineValidator('customValidation', async function (v) {
			await sleep(2000)
      return v === 'cool'
		})
		
		this.defineField("surname", { // defining class property `name`
		type: "String", // setting type casting
		validate: [ // field validations
			{ // validator recipe
				validator: "customValidation", // validator name
				message: "only cool is accepted" // validator error message
			}
		]
		// check the API for all available options
	})
	}
}
export default Model1
