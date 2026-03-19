# N45 NXT Theme

A cleaned-up, light, professional fork of the upstream `erpnexttheme` app for Frappe/ERPNext, adapted for N45 Technologies.

## What changed

- restrained N45 branding and iconography
- lighter, calmer desk chrome
- cleaner sidebar, workspace, form, list, report, and login surfaces
- menu defaults to expanded for better usability
- keeps the original `Theme Settings` doctype in place
- avoids flashy dark styling and excessive visual effects

## Install

```bash
cd ~/frappe-bench/apps
git clone <your-repo-url> nxt_theme
cd ~/frappe-bench
bench --site your-site install-app nxt_theme
bench build --app nxt_theme
bench clear-cache
bench restart
```

## Notes

This package is structured as a full source tree so you can replace the app directly instead of merging overlays.
