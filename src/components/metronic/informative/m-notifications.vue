<template>
	<!-- BEGIN GROUP NOTIFICATION -->
	<div class="btn-group-notification btn-group" id="header_notification_bar">
		<button type="button" class="btn md-skip dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
			<span class="badge">{{notifications.length}}</span>
		</button>
		<ul class="dropdown-menu-v2">
			<li class="external">
				<h3>
					<span class="bold">
						{{!notifications.length ? "no": notifications.length}} pending
					</span> {{notifications.length > 1 ? "notifications" : "notification"}}
				</h3>
				<a v-if="notifications.length" href="#">view all</a>
			</li>
			<li>
				<ul class="dropdown-menu-list scroller" style="height: 250px; padding: 0;" data-handle-color="#637283">
					<li :key="index" v-for="(notification, index) in notifications">
						<a href="javascript:;">
							<span class="details">
								<span :class="`label label-sm label-icon label-${notification.NotificationLevel} md-skip`">
									<i :class="notification.NotificationIcon"></i>
								</span>{{notification.NotificationMessage}}</span>
							<span class="time">{{GetTimeDifference(notification.NotificationTime)}}</span>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<span class="details">
								<span class="label label-sm label-icon label-danger md-skip">
									<i class="fa fa-bolt"></i>
								</span> Server #12 overloaded. </span>
							<span class="time">3 mins</span>
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<!-- END GROUP NOTIFICATION -->
</template>

<script>
export default {
	name: "NotificationsComponent",
	props: [
		"notifications"
	],
	methods: {
		GetTimeDifference(time) {
			return (new Date() - time)
		}
	}
}
</script>
