import { ReactiveModel } from "vue-rawmodel"
class Model2 extends ReactiveModel {
  constructor(data = {}) {
    super(data)

    var self = this
    this.defineField("product", { // defining class property `name`
      type: "String", // setting type casting
      validate: [ // field validations
        { // validator recipe
          validator: "presence", // validator name
          message: "Product is required field" // validator error message
        }
      ]
      // check the API for all available options
    })

    this.defineValidator('unitValidator', function (v) {
      console.dir(self.product)
      console.dir(v)
      return (self.product == "ball" && v == "amount") || (self.product == "plastelina" && v == "kg")
    })

    this.defineField("unit", { // defining class property `name`
      type: "String", // setting type casting
      validate: [ // field validations
        { // validator recipe
          validator: "unitValidator", // validator name
          message: "Invalid selection" // validator error message
        }
      ]
      // check the API for all available options
    })

    this.defineField("number", { // defining class property `name`
      type: "Number", // setting type casting
      validate: [ // field validations
        { // validator recipe
          validator: "presence", // validator name
          message: "Number is required field" // validator error message
        }
      ]
      // check the API for all available options
    })
  }
}
export default Model2
