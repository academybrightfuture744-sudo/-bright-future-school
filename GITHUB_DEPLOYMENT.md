# GitHub Repository & GitHub Pages Deployment

## Upload the project
1. Sign in to GitHub and click **New repository**.
2. Name it `bright-future-school` (Public is simplest for free GitHub Pages).
3. Create the repository.
4. Open the repository and choose **Add file → Upload files**.
5. Extract this ZIP on your computer first.
6. Open the extracted `bright-future-school` folder and upload its contents (the ten HTML files plus `css`, `js`, `images`, `documents`, `assets`, and guide files). Do not upload only the ZIP.
7. Add a commit message such as `Add Bright Future School website` and click **Commit changes**.

## Enable GitHub Pages
1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`.
4. Click **Save**.
5. Wait for the deployment status. GitHub will show the published URL in the Pages section.
6. Open the URL and test all pages, phone links, image paths and mobile navigation.

The homepage file must be named `index.html` and remain in the repository root. Relative paths are used throughout so the site works from a project subpath.

## Updating
Edit the relevant `.html`, `.css` or `.js` file, then commit the changes. GitHub Pages republishes after the commit.
