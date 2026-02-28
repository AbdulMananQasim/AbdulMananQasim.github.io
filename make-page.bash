#!/bin/bash

# Script to copy page directory contents to page branch and push

set -e

REPO_ROOT=$(pwd)
PAGE_DIR="$REPO_ROOT/page"
BRANCH_NAME="page"
TEMP_DIR="/tmp/page-contents-$$"

echo "Starting page branch deployment..."

# Check if page directory exists
if [ ! -d "$PAGE_DIR" ]; then
    echo "Error: page directory not found"
    exit 1
fi

# Copy page directory contents to temporary location
echo "Copying files to temporary location..."
mkdir -p "$TEMP_DIR"
cp -r "$PAGE_DIR"/* "$TEMP_DIR/"

# Create or checkout the page branch
if git rev-parse --verify $BRANCH_NAME >/dev/null 2>&1; then
    echo "Checking out existing $BRANCH_NAME branch..."
    git checkout $BRANCH_NAME
    # Remove old files
    git rm -rf . >/dev/null 2>&1 || true
else
    echo "Creating new $BRANCH_NAME branch..."
    git checkout --orphan $BRANCH_NAME
    # Remove initial tracked files
    git rm -rf . >/dev/null 2>&1 || true
fi

# Copy files from temporary location back to repo root
echo "Copying files to $BRANCH_NAME branch..."
cp -r "$TEMP_DIR"/* .

# Clean up temp directory
rm -rf "$TEMP_DIR"

# Add all files to git
git add .

# Check if there are changes to commit
if ! git diff-index --cached --quiet HEAD 2>/dev/null; then
    echo "Committing changes..."
    git commit -m "Deploy page branch contents from page directory"
else
    echo "No changes to commit"
fi

# Push to page branch
echo "Pushing to $BRANCH_NAME branch..."
git push -u origin $BRANCH_NAME

# Return to main branch
echo "Returning to main branch..."
git checkout main

echo "Done! Page branch has been updated and pushed."
