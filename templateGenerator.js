const fs = require("fs").promises;
const path = require("path");

function fixImagePaths(content) {
  // Markdown'daki resim yollarını HTML çıktısı için düzelt
  return content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    if (!src.startsWith("http")) {
      // Eğer kaynak bir URL değilse, images/ dizinine yönlendir
      src = `images/${path.basename(src)}`;
    }
    return `<img src="${src}" alt="${alt}">`;
  });
}

function generateHtmlTemplate(title, content) {
  const fixedContent = fixImagePaths(content);
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/atom-one-dark.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
</head>
<body>
    ${generateHeader()}
    <div class="container">
        <main>
            <h1>${title}</h1>
            ${fixedContent}
        </main>
    </div>
    ${generateFooter()}
    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelectorAll('pre code').forEach((el) => {
                hljs.highlightElement(el);
            });
        });
    </script>
</body>
</html>
    `;
}

async function generateIndexPage(blogPosts, outputDir) {
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    ${generateHeader()}
    <div class="container">
        <h1>My Blog</h1>
        <div class="card-container">
            ${blogPosts
              .map(
                (post) => `
                <div class="card">
                    <h2>${post.title}</h2>
                    <p>${post.excerpt || "No excerpt available."}</p>
                    <a href="${post.fileName}" class="button">Read More</a>
                </div>
            `
              )
              .join("")}
        </div>
    </div>
    ${generateFooter()}
</body>
</html>
    `;
  await fs.writeFile(path.join(outputDir, "index.html"), indexHtml);
}

function generateHeader() {
  return `
<header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
  `;
}

function generateFooter() {
  return `
<footer>
    <p>&copy; ${new Date().getFullYear()} My Blog. All rights reserved.</p>
</footer>
  `;
}

async function generateCss(outputDir) {
  const css = `
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #e0e0e0;
    background-color: #1e1e1e;
    margin: 0;
    padding: 0;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
header {
    background-color: #2d2d2d;
    padding: 1rem;
}
header nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
header nav ul li {
    margin: 0 10px;
}
header nav ul li a {
    color: #4ec9b0;
    transition: color 0.3s ease;
}
header nav ul li a:hover {
    color: #569cd6;
}
footer {
    background-color: #2d2d2d;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
    color: #ce9178;
}
h1, h2, h3, h4, h5, h6 {
    color: #c586c0;
}
a {
    color: #4ec9b0;
    text-decoration: none;
    transition: color 0.3s ease;
}
a:hover {
    color: #569cd6;
}
pre {
    background-color: #2d2d2d;
    border-radius: 5px;
    padding: 15px;
    overflow-x: auto;
}
code {
    font-family: 'Courier New', Courier, monospace;
    color: #e0e0e0;
}
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}
.card {
    background-color: #2d2d2d;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.button {
    display: inline-block;
    background-color: #4ec9b0;
    color: #1e1e1e;
    padding: 10px 15px;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}
.button:hover {
    background-color: #569cd6;
    text-decoration: none;
}
img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em 0;
}
    `;
  await fs.writeFile(path.join(outputDir, "styles.css"), css);
}

module.exports = {
  generateHtmlTemplate,
  generateIndexPage,
  generateCss,
};
