from pathlib import Path
from setuptools import setup, find_packages

req_path = Path("requirements.txt")
reqs = []
if req_path.exists():
    reqs = [line.strip() for line in req_path.read_text().splitlines() if line.strip() and not line.startswith("#")]

version = "0.1.0"
init_py = Path("nxt_theme") / "__init__.py"
if init_py.exists():
    for line in init_py.read_text().splitlines():
        if line.startswith("__version__"):
            version = line.split("=", 1)[1].strip().strip("\"").strip("'")
            break

setup(
    name="nxt_theme",
    version=version,
    description="Enhanced User Interface and User Experience for Frappe Applications",
    author="NexTash (SMC-PVT) Ltd / N45 customized build",
    author_email="support@nextash.com",
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=reqs,
)
