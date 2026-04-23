const feed = document.querySelector('#feed');
const API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://a16z.substack.com/feed';
fetch(API_URL)
    .then(response=>response.json())
    .then(data=> {
        data.items.forEach(item=>{
            const article=document.createElement('div');
            article.innerHTML=
            `<h2><a href="$(item.link) target="_blank" >${item.title}</a></h2>
            <p class="post-meta">${item.author} · ${item.pubDate}</p>
            <p>${item.description}</p>           
            <hr>
            `;
            feed.appendChild(article);
            

        });
    })
