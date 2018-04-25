const dateTimeFormat = "DD. MM. YYYY HH:mm:SS"
const dateFormat = "DD. MM. YYYY"
const datePattern = "YYYY-MM-DD"

const baseUrl = process.env.BASE_EVENTS_URL

const baseEventsUrl = baseUrl + "/api/Events"

const baseHallOfFameUrl = baseUrl + "/api/HallOfFame"

const baseImageUrl = baseUrl + "/api/image"

const baseImageThumbUrl = baseImageUrl + "/t"

const baseLoginUrl = baseUrl + "/api/login"

const constants = {
	newsStateCodes: {
		published: "PUBLISHED",
		draft: "DRAFT"
	},
	eventTypeCodes: {
		vipclub: "VIPCLUB",
		management: "MANAGEMENT",
		sales: "SALES"
	},
	objectStates: {
		newState: "new",
		modified: "modified",
		unchanged: "unchanged",
		deleted: "deleted"
	},
	responseStates: {
		Unauthorized: "UNAUTH"
	}
}

export {
	dateTimeFormat,
	baseUrl,
	baseEventsUrl,
	dateFormat,
	datePattern,
	constants,
	baseImageUrl,
	baseImageThumbUrl,
	baseLoginUrl,
	baseHallOfFameUrl
}
