---

# lets-learn

**lets-learn** is a simple markdown to HTML blog generator. This project converts markdown files into beautifully styled HTML pages, handles image copying, and generates static pages for a complete blogging experience. The project uses Node.js along with various packages to achieve its functionality.

## Features

- Converts markdown files into HTML.
- Highlights code syntax using `highlight.js`.
- Handles image copying from markdown files.
- Generates static pages (e.g., About, Contact).
- Creates a well-styled index page with blog post excerpts.

## Project Structure

- **index.js**: Main script for generating HTML blog posts and static pages.
- **server.js**: Express server to serve the generated blog.
- **templateGenerator.js**: Functions for generating HTML templates and CSS.
- **package.json**: Project dependencies and scripts.

## Dependencies

- `express`: Web server framework.
- `highlight.js`: Syntax highlighter for code blocks.
- `marked`: Markdown parser.
- `nodemon`: Development tool for auto-reloading.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/aytekinkaplan/lets-learn.git
   cd lets-learn
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Generate HTML and static pages:

   ```bash
   npm run build
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the blog.

## Deployment

The project is deployed on Netlify. You can view the live site at [https://lets-learn-code.netlify.app/](https://lets-learn-code.netlify.app/).

## Note

This project is a work in progress and is not yet complete. Future updates will include additional features and improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
