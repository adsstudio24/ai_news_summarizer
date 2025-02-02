async function loadNews() {
    const response = await fetch('http://localhost:5000/news');
    const news = await response.json();
    document.getElementById("news").innerHTML = news.articles.map(n => 
        `<li><strong>${n.title}</strong>: ${n.description}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", loadNews);
