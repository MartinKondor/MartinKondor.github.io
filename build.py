import os
import minify_html
from bs4 import BeautifulSoup


def clean_content(html_content):
    return minify_html.minify(html_content, minify_js=True, remove_processing_instructions=True)


html_sources = {
    # file_name: html_content
}

# Parse .html files
for file in os.listdir("."):
    if not file.endswith(".html"):
        continue

    print("Read", file)
    with open(file, "r") as file_reader:
        html_sources[file] = file_reader.read()


print()
html_bin = {}

# Start with the _template.html
base_template = html_sources["_template.html"]
content_block_annot = "{%content_block%}"
import_annot = "{%import:"

for html_file, html_content in html_sources.items():
    new_html_content = base_template.replace(content_block_annot, html_content)
    
    # Parse import statements
    while import_annot in new_html_content:
        import_index = new_html_content.index(import_annot)
        import_start = new_html_content[import_index:]
        import_middle = import_start.split("%}")[0].replace(import_annot, "")
        
        print(html_file, "imports", import_middle)

        new_html_content = new_html_content.replace(import_annot + import_middle + "%}", html_sources[import_middle])
    
    html_bin[html_file] = new_html_content


# Output files
print()
for html_file, html_content in html_bin.items():
    if html_file[0] == "_":
        continue

    new_file_path = "docs/" + html_file
    with open(new_file_path, "w+") as file:
        file.write(clean_content(html_content))

    print("Created file:", new_file_path)
