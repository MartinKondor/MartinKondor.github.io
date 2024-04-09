# Listen to *.html file changes in the current directory, and if one changes then run "python build.py"
import os
import time


build_command = "python build.py"
print("Listening for changes in HTML files...")

html_files = [f for f in os.listdir() if f.endswith('.html')]
html_files_mtime = {file: os.path.getmtime(file) for file in html_files}

# Check for changes in HTML files
while True:
    for file in html_files:
        current_mtime = os.path.getmtime(file)
        if current_mtime != html_files_mtime[file]:
            print(f"{file} has changed. Running build script...")
            os.system(build_command)
            html_files_mtime[file] = current_mtime


    # Sleep for a short interval before checking again
    time.sleep(2)

