const giphyApiUrl = '//api.giphy.com/v1/gifs/search';
const giphyApiKey = 'YoyUyRGt2YenjFvxfq87V5gvNjak2EBQ';

export  const giphySearch = (term) => {
    const apiUrl = `${giphyApiUrl}?api_key=${giphyApiKey}&q=${term}`;

    return  fetch(apiUrl)
        .then(res => res.json())
        .then(result => {
            return result.data;
        })
        .catch((err) => {
            console.log('error: ', err);
            return err;
        });
};
