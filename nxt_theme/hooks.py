app_name = "nxt_theme"
app_title = "NXT Theme"
app_publisher = "NexTash (SMC-PVT) Ltd"
app_description = "Enhanced User Interface and User Experience for Frappe Applications"
app_email = "support@nextash.com"
app_license = "gpl-2.0"

app_logo_url = "/assets/nxt_theme/images/shape.svg"

website_context = {
    "favicon": "/assets/nxt_theme/images/shape.svg",
    "splash_image": "/assets/nxt_theme/images/shape.svg",
}

# Source bundles loaded on Desk
app_include_css = [
    "nxt_theme.bundle.css",
    "n45_overrides.bundle.css",
]

app_include_js = [
    "nxt_theme.bundle.js",
    "n45_overrides.bundle.js",
]

doctype_js = {
    "Calendar View": "public/js/nxt_theme/calendar_view.js",
}
