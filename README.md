# Jokes Galore

A light-hearted React app that fetches science-themed jokes from an online API and displays them in a fun, readable card layout.

## Features

- Fetches a batch of science jokes using the [FreeAPI Random Jokes endpoint](https://api.freeapi.app/api/v1/public/randomjokes)
- Displays jokes in clean, scrollable cards
- Uses an easy-on-the-eyes background with a playful font style
- Built with React and Vite for fast development

## Getting Started

### Prerequisites

- Node.js v18 or newer
- npm or yarn

### Install

```bash
npm install
# or
# yarn
```

### Run the app

```bash
npm run dev
# or
# yarn dev
```

Then open the local URL shown in your terminal.

## Project Structure

- `src/App.jsx` — main React component and joke fetch logic
- `src/App.css` — app styling and layout
- `public/` — static assets

## API Endpoint

- `https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1`

## Notes

The app requests 10 science jokes and renders each joke with its category. If the API is unavailable, the page may show empty content until the data is available.

## License

MIT
