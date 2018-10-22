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
            photos: []
        };
        this.search = this.search.bind(this);
        this.searchTermChanged = this.searchTermChanged.bind(this);
        this.searchEngineChanged = this.searchEngineChanged.bind(this);
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
        //todo
        console.log('onImageClick: ', e.target.id);
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
                        </React.Fragment>
                    )}

                </div>
            </div>
        );
    }
}

export default App;
