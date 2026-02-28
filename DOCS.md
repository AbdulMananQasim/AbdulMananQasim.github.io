# make-page.bash

Deploys the `page/` directory contents to the `page` branch.

## Usage

```bash
./make-page.bash
```

This script will:
1. Copy all files from `page/` directory
2. Create or update the `page` branch
3. Commit changes
4. Push to remote `page` branch
5. Return to `main` branch

## How it works

Any files you add to the `page/` directory and run this script will be deployed as the root contents of the `page` branch on GitHub.
