# Blog React Project

A small blog application built with React and Vite, using Appwrite for backend services (database, authentication, and file storage).

## Features

- Create, edit, and delete posts
- Rich text editing for post content
- Image upload and preview (Appwrite Storage)
- Authentication (signup / login) using Appwrite
- Simple, responsive UI components

## Tech Stack

- React (Vite)
- Appwrite (Databases, Storage, Auth)
- Tailwind / plain CSS (project styles live in `src`)

## Prerequisites

- Node.js 16+ and npm
- An Appwrite project with a Database, Collection, and Storage bucket

## Environment variables

Create a `.env` or `.env.local` file at the project root and add the following values (replace with your Appwrite details):

```
VITE_APPWRITE_URL=https://[YOUR_APPWRITE_HOST]
VITE_APPWRITE_PROJECT_ID=[YOUR_PROJECT_ID]
VITE_APPWRITE_DATABASE_ID=[YOUR_DATABASE_ID]
VITE_APPWRITE_COLLECTION_ID=[YOUR_COLLECTION_ID]
VITE_APPWRITE_BUCKET_ID=[YOUR_BUCKET_ID]
```

The app reads these values from `src/conf/conf.js` at runtime.

## Quick Start

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

To build for production and preview the build:

```bash
npm run build
npm run preview
```

If your `package.json` uses different script names, check the `scripts` section there.

## Project structure (important files)

- `src/main.jsx` — app entry
- `src/App.jsx` — root component
- `src/pages` — page-level components (Home, AddPost, EditPost, Post)
- `src/components` — UI components (Header, Footer, PostCard, forms)
- `src/post-form/PostForm.jsx` — post creation/edit form
- `src/appwrite` — Appwrite wrappers and auth (`config.js`, `auth.js`)
- `src/conf/conf.js` — maps `VITE_` env vars into the app
- `src/store` — Redux slice and store (authSlice, store)

## Appwrite notes

- The app uses values from `src/conf/conf.js` which reference `import.meta.env.VITE_*` variables. Ensure your `.env` file exposes the `VITE_` prefixed variables so Vite will inject them.
- Configure appropriate CORS and API keys in your Appwrite console for local development.

## Contributing

Feel free to open issues or PRs. Keep changes focused and add short explanations for feature additions.
