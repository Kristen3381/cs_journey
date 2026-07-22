#!/bin/bash

echo "Starting file organisation..."

mkdir -p python_files
mkdir -p html_files
mkdir -p json_files

mv *.py python_files/ 2>/dev/null && echo "Python files moved." || echo "No .py files found."
mv *.html html_files/ 2>/dev/null && echo "HTML files moved." || echo "No .html files found."
mv *.json json_files/ 2>/dev/null && echo "JSON files moved." || echo "No .json files found."

echo "Done! Here's your organised folder:"
ls

