import React, { Component } from 'react';
import { search } from './services/search-service';
import Search from './components/search';
import Photos from './components/photos';
import Videos from './components/videos';
import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchValue: 'car',
            engine: 'flicker',
            photos: []
        };
        this.search = this.search.bind(this);
        this.searchTermChanged = this.searchTermChanged.bind(this);
        this.engineChanged = this.engineChanged.bind(this);
    }

    componentDidMount() {
        this.search();
    }

    searchTermChanged(e) {
        this.setState({ searchValue: e.target.value });
    }

    search() {
        this.setState({ loading: true });
        search(this.state.searchValue, this.state.engine)
            .then(images => {
                console.log(images[0]);
                const photos = images.map((img) => {
                    if (this.state.engine === 'giphy') {
                        return {
                            id: img.id,
                            videoSmall: img.images['downsized_small'],
                            videoOriginal: img.images['original_mp4'],
                            thumbnail: img.images['480w_still']
                        }
                    } else if (this.state.engine === 'flicker') {
                        return {
                            id: img['id'],
                            url: `http://farm${img.farm}.staticflickr.com/` +
                            `${img.server}/${img.id}_${img.secret}.jpg`
                        }
                    }
                });
                this.setState({ photos, loading: false })
            })
            .catch(err => this.setState({ photos: [], loading: false }));
    }

    engineChanged(e) {
        const value = e.target.value;
        this.setState(() => ({
            engine: value
        }), this.search(value));
    }

    onImageClick(e) {
        console.log('onImageClick: ', e.target.id);
    }

    render() {
        return (
            <div className="App">
                <Search
                    search={this.search}
                    engine={this.state.engine}
                    engineChanged={this.engineChanged}
                    searchTermChanged={this.searchTermChanged}
                    searchValue={this.state.searchValue}
                />

                <div>
                    {this.state.loading && (
                        <div>Loading...</div>
                    )}

                    {this.state.photos.length === 0 && !this.state.loading && (
                        <div>Can't find photos for this search term</div>
                    )}

                    {this.state.photos.length > 0 && !this.state.loading && (
                        <div>
                            {this.state.engine === 'flicker' && (
                                <Photos
                                    photos={this.state.photos}
                                    onImageClick={this.onImageClick}
                                />
                            )}
                            {this.state.engine === 'giphy' && (
                                <Videos
                                    videos={this.state.photos}
                                    onVideoClick={this.onImageClick}
                                />
                            )}

                        </div>
                    )}

                </div>
            </div>
        );
    }
}

export default App;
