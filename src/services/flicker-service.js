const apiKey = 'e38f1bc56d9486ca37e84667b7a98ba8';
const flickerApi = 'https://api.flickr.com/services/rest';

export const flickerSearch = (term) => {

    const apiUrl = flickerApi
        + `?method=flickr.photos.search&sort=relevance&format=json&nojsoncallback=1&`
        + `api_key=${apiKey}&text=${term}`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            return data.photos.photo;
        })
        .catch((err) => {
            console.log('error: ', err);
            return err;
        });
};
