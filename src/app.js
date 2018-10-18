import React, { Component } from 'react';
import { searchTerm } from './services/search-service';
import Search from './components/search';
import Photos from './components/photos';
import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchValue: 'cat',
            photos: []
        };
        this.search = this.search.bind(this);
        this.searchTermChanged = this.searchTermChanged.bind(this);
    }

    componentDidMount() {
        this.search();
    }

    searchTermChanged(e) {
        this.setState({ searchValue: e.target.value });
    }

    search() {
        this.setState({ loading: true });
        searchTerm(this.state.searchValue)
            .then(photos => this.setState({ photos, loading: false }))
            .catch(err => this.setState({ photos: [], loading: false }));
    }

    onImageClick(e) {
        console.log('onImageClick: ', e.target.id);
    }

    render() {
        return (
            <div className="App">
                <Search
                    search={this.search}
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
                        <Photos
                            photos={this.state.photos}
                            onImageClick={this.onImageClick}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default App;
