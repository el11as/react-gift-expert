export const getGift = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZeyL5iIa9vSqa4DnQ9eljh4mwKu6iz6s&q=${category}&limit=15`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id : img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
    
}