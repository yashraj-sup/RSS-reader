const feed = document.querySelector('#feed');
const FEEDS=[`https://api.rss2json.com/v1/api.json?rss_url=https://a16z.substack.com/feed`,`https://api.rss2json.com/v1/api.json?rss_url=https://bonesawmd.substack.com/feed`];
async function loadfeed() {
    try{
        const promises =[];
        FEEDS.forEach(url =>{
            promises.push(fetch(url).then( r =>r.json()));
        });
        const datasets = await Promise.all(promises);
        datasets.forEach(data=>{
            if(data.items) data.items.forEach(item=>{const article= document.createElement('div');
            article.innerHTML = `
            <h2><a href = "${item.link} "target=_blank">${item.title}</a></h2>
            <p class="post-meta">${item.author} · ${item.pubDate}</p>
            <p>${item.description}</p>
            <hr>
            `;
            feed.appendChild(article);
        });
    });
}catch (error){
    feed.innerHTML=`<p> Failed to load your feed.Check your connection.</p>`;
    console.error(error);
    }
}
loadfeed();

           

