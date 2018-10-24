import React, { Component } from 'react';
import { searchForAssest } from './services/search-service';
import Search from './components/search/search';
import Photos from './components/photos/photos';
import Videos from './components/videos/videos';
import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchValue: 'car',
            engine: 'flicker',
            photos: [],
            selectedPhotos: [],
            selectionMode: false
        };
        this.search = this.search.bind(this);
        this.searchTermChanged = this.searchTermChanged.bind(this);
        this.searchEngineChanged = this.searchEngineChanged.bind(this);
        this.onImageClick = this.onImageClick.bind(this);
    }

    componentDidMount() {
        this.search();
    }

    searchTermChanged(e) {
        this.setState({ searchValue: e.target.value });
    }

    searchEngineChanged(e) {
        const value = e.target.value;
        this.setState({
            engine: value
        }, () => this.search());
    }

    search() {
        this.setState({ loading: true, images: [] });
        searchForAssest(this.state.searchValue, this.state.engine)
            .then(photos => {
                this.setState({ photos, loading: false })
            })
            .catch(err => this.setState({ photos: [], loading: false }));
    }

    onImageClick(e) {
        const value = e.target.id;
        const direction = this.state.selectedPhotos.indexOf(value) > -1 ? 'remove' : 'add';

        //add/remove assets from selectedPhotos
        if (direction === 'add') {
            this.setState(prevState => ({
                selectedPhotos: [...prevState.selectedPhotos, value]
            }));
        } else {
            this.setState(prevState => ({
                selectedPhotos: [...prevState.selectedPhotos.filter((i) => i !== value)]
            }));
        }

        //set the selectionMode if there is selected images
        this.setState(prevState => ({
            selectionMode: prevState.selectedPhotos.length > 0
        }));
    }

    render() {
        return (
            <div className="App">
                <Search
                    search={this.search}
                    engine={this.state.engine}
                    engineChanged={this.searchEngineChanged}
                    searchTermChanged={this.searchTermChanged}
                    searchValue={this.state.searchValue}
                />

                <div>
                    {this.state.loading && (
                        <div className="loading">Loading...</div>
                    )}

                    {this.state.photos.length === 0 && !this.state.loading && (
                        <div>Can't find photos for this search term</div>
                    )}

                    {this.state.photos.length > 0 && !this.state.loading && (
                        <React.Fragment>
                            {this.state.selectedPhotos.length && (
                                <div>{this.state.selectedPhotos.length} images selected <button>clear all</button></div>
                            )}

                            {this.state.engine === 'flicker' && (
                                <Photos
                                    photos={this.state.photos}
                                    selectedPhotos={this.state.selectedPhotos}
                                    selectionMode={this.state.selectionMode}
                                    onImageClick={this.onImageClick}
                                />
                            )}
                            {this.state.engine === 'giphy' && (
                                <Videos
                                    videos={this.state.photos}
                                    onVideoClick={this.onImageClick}
                                />
                            )}
                        </React.Fragment>
                    )}

                </div>
            </div>
        );
    }
}

export default App;
