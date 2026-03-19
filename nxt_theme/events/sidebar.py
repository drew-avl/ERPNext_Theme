import json

import frappe
from frappe.desk.desktop import get_desktop_page, get_workspace_sidebar_items


@frappe.whitelist()
def get_desktop_pages():
    pages = get_workspace_sidebar_items().get("pages") or []
    original_pages = pages
    pages = [d for d in pages if not d.get("parent_page")]

    for row in pages:
        desktop_page = get_desktop_page(json.dumps(row))
        row["cards"] = desktop_page.get("cards")
        row["child_workspace"] = [
            d for d in original_pages if d.get("parent_page") == row.get("name")
        ]

    return pages
