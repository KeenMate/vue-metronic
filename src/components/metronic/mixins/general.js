import {dateTimeFormat, dateFormat, constants} from "../../../data/config"
import moment from "moment"
import toastr from "toastr"
import "toastr/build/toastr.min.css"

export default {
	methods: {
		getGuid: function () {
			var s4 = function () {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1)
			}
			return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
				s4() + "-" + s4() + s4() + s4()
		},
		formatDate: function (date, formationString) {
			if (date)
				return moment(date).format(formationString || dateFormat)
			return ""
		},
		formatDateTime: function (dateTime, formationString) {
			var output = moment(dateTime).format(formationString || dateTimeFormat)
			if (dateTime)
				return output
			return ""
		},
		prepareToastOptions: function () {
			toastr.options = {
				"closeButton": true,
				"debug": false,
				"positionClass": "toast-top-center",
				"onclick": null,
				"showDuration": "15000",
				"hideDuration": "10000",
				"timeOut": "3000",
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
			}
		},
		showInfo: function (body, title, options) {
			toastr.options = options || this.prepareToastOptions()

			toastr.info(body, title)
		},
		toastSuccess: function (body, title, options) {
			toastr.options = options || this.prepareToastOptions()

			toastr.success(body, title)
		},
		toastWarning: function (body, title, options) {
			toastr.options = options || this.prepareToastOptions()

			toastr.warning(body, title)
		},
		toastError: function (body, title, options) {
			toastr.options = options || this.prepareToastOptions()

			toastr.error(body, title)
		},
		handleObjectStateUpdate: function (object, newState) {
			switch (object.state) {
			case "created": {
				break
			}
			case "modified": {
				object.state = constants.objectStates.modified
				break
			}
			case "unchanged": {
				object.state = (newState === "modified" || newState === "created") ? newState : "unchanged"
				break
			}
			default: {
				console.warn("Object state was not resolved")
				break
			}
			}
		}
	}
}
