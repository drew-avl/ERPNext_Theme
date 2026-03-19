import frappe


def get_context(context):
    context.theme_settings = frappe.get_single("Theme Settings") if frappe.db.exists("DocType", "Theme Settings") else frappe._dict()
