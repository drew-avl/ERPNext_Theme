import frappe


@frappe.whitelist()
def get_notification_logs():
    filters = {"for_user": frappe.session.user}
    notification_logs = frappe.db.get_list(
        "Notification Log",
        filters=filters,
        fields=["*"],
        limit=20,
        order_by="modified desc",
    )

    users = list({log.from_user for log in notification_logs if log.from_user})
    user_info = frappe._dict()
    for user in users:
        frappe.utils.add_user_info(user, user_info)

    return {"notification_logs": notification_logs, "user_info": user_info}
