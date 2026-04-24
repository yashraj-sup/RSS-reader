const feed = document.querySelector('#feed');
const feeds = [
    'https://a16z.substack.com/feed',
    'https://bonesawmd.substack.com/feed'
];
feeds.forEach(feedURL => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedURL}`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const article = document.createElement('div');
                article.innerHTML = `
            <h2><a href="${item.link}" target="_blank">${item.title}</a></h2>
            <p class="post-meta">${item.author} · ${item.pubDate}</p>
            <p>${item.description}</p>
            <hr>
             `;
                feed.appendChild(article)
            });
        })
});

