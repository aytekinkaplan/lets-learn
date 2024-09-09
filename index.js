const fs = require("fs").promises;
const path = require("path");
const marked = require("marked");
const hljs = require("highlight.js");
const {
  generateHtmlTemplate,
  generateIndexPage,
  generateCss,
} = require("./templateGenerator");

const markdownDir = "./markdown-files";
const outputDir = "./output";
const imageDir = path.join(markdownDir, "images"); // Resimler için varsayılan dizin

marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  },
});

function cleanExcerpt(content) {
  // Remove Markdown headings
  content = content.replace(/^#+\s+/gm, "");
  // Remove code block symbols
  content = content.replace(/```[\s\S]*?```/g, "");
  // Remove inline code symbols
  content = content.replace(/`/g, "");
  // Remove Markdown link syntax
  content = content.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");
  // Remove extra whitespace
  content = content.replace(/\s+/g, " ").trim();
  return content;
}

async function copyImages() {
  try {
    const outputImageDir = path.join(outputDir, "images");
    await fs.mkdir(outputImageDir, { recursive: true });
    const images = await fs.readdir(imageDir);
    for (const image of images) {
      await fs.copyFile(
        path.join(imageDir, image),
        path.join(outputImageDir, image)
      );
    }
    console.log("Images copied successfully!");
  } catch (error) {
    console.error("Error copying images:", error);
  }
}

async function generateBlogPosts() {
  try {
    const files = await fs.readdir(markdownDir);
    const markdownFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".md"
    );
    // Dosya adlarından sıralama bilgisini çıkar ve sırala
    const sortedFiles = markdownFiles.sort((a, b) => {
      const orderA = parseInt(a.split("-")[0]) || Infinity;
      const orderB = parseInt(b.split("-")[0]) || Infinity;
      return orderA - orderB;
    });
    const blogPosts = await Promise.all(
      sortedFiles.map(async (file) => {
        const content = await fs.readFile(
          path.join(markdownDir, file),
          "utf-8"
        );
        const html = marked.parse(content);
        const title = path.basename(file, ".md").replace(/^\d+-/, "");
        const cleanContent = cleanExcerpt(content);
        const excerpt = cleanContent.substring(0, 150) + "...";
        await fs.writeFile(
          path.join(outputDir, `${title}.html`),
          generateHtmlTemplate(title, html)
        );
        return { title, fileName: `${title}.html`, excerpt };
      })
    );
    await generateIndexPage(blogPosts, outputDir);
    console.log("Blog posts generated successfully!");
  } catch (error) {
    console.error("Error generating blog posts:", error);
  }
}

async function generateStaticPages() {
  const pages = ["about", "contact"];
  for (const page of pages) {
    const content = await fs.readFile(
      path.join(markdownDir, `${page}.md`),
      "utf-8"
    );
    const html = marked.parse(content);
    await fs.writeFile(
      path.join(outputDir, `${page}.html`),
      generateHtmlTemplate(page.charAt(0).toUpperCase() + page.slice(1), html)
    );
  }
}

async function main() {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    await generateCss(outputDir);
    await copyImages(); // Resimleri kopyala
    await generateBlogPosts();
    await generateStaticPages();
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

main();
