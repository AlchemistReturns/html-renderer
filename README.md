# HTML Renderer

Lightweight server-side HTML renderer built with EJS templates, JavaScript helpers, and CSS assets. html-renderer makes it easy to render dynamic pages, email templates, or static site fragments from reusable EJS views and partials.

> Repository: AlchemistReturns/html-renderer

## Features
- Render EJS templates server-side (views, partials, layouts)
- Friendly development server with live static assets
- Helpers and small JS utilities for templating logic
- CSS-first styling structure for components
- Export rendered HTML as string (useful for emails, static generation, tests)
- Simple, framework-agnostic building blocks — integrate with Express or use as a standalone renderer

## Requirements
- Node.js 16+ (or whichever LTS you prefer)
- npm or yarn

## Install
Clone and install dependencies:

```bash
git clone https://github.com/AlchemistReturns/html-renderer.git
cd html-renderer
npm install
```

## Development
Start a dev server (example scripts — adjust to your package.json):

```bash
npm run dev
# or, if configured:
# npm run start
```

Default dev server serves static assets (CSS/JS) from `public/` and templates from `views/`.

## Usage

Example: using with Express

```js
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// serve static css/js from public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'HTML Renderer',
    user: { name: 'Alchemist' }
  });
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));
```

Example: render an EJS template to a string (useful for email or static export)

```js
const ejs = require('ejs');
const path = require('path');

const templatePath = path.join(__dirname, 'views', 'emails', 'welcome.ejs');

ejs.renderFile(templatePath, { name: 'Alice' }, (err, html) => {
  if (err) throw err;
  // `html` contains fully rendered markup
  console.log(html);
});
```

Suggested project structure
- views/ — EJS templates and partials (layouts, components)
- public/
  - css/ — stylesheets
  - js/ — client utilities (small, optional)
  - assets/ — images, fonts
- src/ — renderer helpers, middleware, build scripts
- examples/ — example integrations (Express server, static exporter)
- docs/ — screenshots, usage notes, design decisions

## Patterns & Conventions
- Keep presentational logic in CSS; templates should be minimal and focused on data + composition.
- Use partials for repeated UI (header, footer, email components).
- Provide small helper functions (formatters, date helpers) in `src/helpers` and inject into templates via render context.

## Testing
- Add unit tests for rendering logic (Jest, Mocha + Chai, etc.)
- Snapshot rendered HTML to detect template regressions.

## Deployment
- Can be deployed as a standard Node.js app (Heroku, Vercel Serverless Functions, DigitalOcean).
- For static generation: render templates to files and host them on any static host (Netlify, GitHub Pages).

## Contributing
Contributions welcome!
1. Open an issue describing the change or feature.
2. Create a branch: `git checkout -b feat/your-feature`
3. Add tests and documentation where appropriate.
4. Submit a pull request and describe the intent clearly.

Please follow conventional commits and a consistent code style.

## License
Choose and add a LICENSE file (MIT is a common choice).

## Maintainer
- Owner: @AlchemistReturns
- For questions or feature requests, open an issue in this repository.
