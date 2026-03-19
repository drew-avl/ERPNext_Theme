frappe.ui.form.on("Theme Settings", {
    after_save(frm) {
        frappe.show_alert({ message: __("Theme settings saved. Clear cache if changes do not appear immediately."), indicator: "blue" });
        frappe.ui.toolbar.clear_cache();
    },
});
