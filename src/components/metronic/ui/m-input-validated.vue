<template>
	<div class="form-group form-md-line-input form-md-floating-label ">
		<div class="input-icon">
			<input :name="name" ref="inp" :class="{ 'form-control': true, 'edited': value}" :id="inputId" v-model="value" @input="validate">
			<i :style="isValidating? null:'display:none'" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		</div>
	</div>
</template>

<script>
export default {
  name: "MetronicComponent",
  props: {
    validationFunc: {
      type: Function
    },
    required: {
      type: Boolean,
      default: false
    },
    regex: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      value: "",
      pattern: "",
      isValidating: false,
      isValid: false,
      timer: null,
      reqRexPass: false
    }
  },
  computed: {
    inputId() {
      return this.id
        ? this.id
        : "_" +
            Math.random()
              .toString(36)
              .substring(2, 9)
    },
    inputLabel() {
      return this.label
        ? this.label
        : "Pass 'label' attribute to '" + this.name + "' component"
    },
    inputType() {
      return this.type ? this.type : "text"
    }
  },
  methods: {
    validate: function() {
      clearTimeout(this.timer)
      this.reqRexPass = false
      if (this.required) {
        if (!this.value.length > 0) {
          this.setValidity(false)
          return
        }
      }
      if (this.regex) {
        var r = new RegExp(this.regex)
        if (!r.test(this.value)) {
          this.setValidity(false)
          return
        }
      }
      this.reqRexPass = true
      if (this.validationFunc)
        this.timer = setTimeout(this.validateCustom, 500)
      else {
        this.setValidity(true)      
      }
    },
    validateCustom: function() {
      var self = this
      self.isValidating = true
      var res = self.validationFunc(self.value)
      if (res.promise) {
        // deferred
        res.done(function(data) {
          if (!self.reqRexPass) {
            self.setValidity(false)
            self.isValidating = false
            return
          }
          if (data !== null) {
            self.setValidity(data)
          }
          self.timer = null
          self.isValidating = false
          console.dir(data)
        })
      } else {
        self.setValidity(res)
      }
    },
    setValidity: function(valid) {
      var self = this
      if (valid === true) {
        self.isValid = true
        self.$emit("isValid", true)
        self.$emit("value", self.value)
        self.$refs.inp.setCustomValidity("")
      } else {
        self.isValid = false
        self.$emit("isValid", false)
        self.$emit("value", self.value)
        self.$refs.inp.setCustomValidity(" ")
      }
    }
  }
}
</script>

<style>
input:invalid
{
  background-color: red !important;
}
</style>
