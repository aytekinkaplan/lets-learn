// Markdown dosyalarını oku ve kartları oluştur
async function loadBlogPosts() {
  try {
    const response = await fetch("blog-posts.json");
    const posts = await response.json();
    const blogCards = document.getElementById("blog-cards");

    posts.forEach((post) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.excerpt}</p>
              <a href="blog-template.html?post=${post.file}">Devamını Oku</a>
          `;
      blogCards.appendChild(card);
    });
  } catch (error) {
    console.error("Blog yazıları yüklenirken hata oluştu:", error);
  }
}

// Belirli bir blog yazısını yükle ve görüntüle
async function loadBlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postFile = urlParams.get("post");

  if (postFile) {
    try {
      const response = await fetch(`blog-posts/${postFile}`);
      const markdown = await response.text();
      const htmlContent = marked.parse(markdown);
      document.getElementById("blog-content").innerHTML = htmlContent;
    } catch (error) {
      console.error("Blog yazısı yüklenirken hata oluştu:", error);
    }
  }
}

// Ana sayfada blog kartlarını yükle
if (document.getElementById("blog-cards")) {
  loadBlogPosts();
}
