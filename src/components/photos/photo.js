import React from 'react';
import Observer from 'react-intersection-observer';
import './photo.scss';

export default class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.placeholderUrl = '//via.placeholder.com/400x400?text=loading';
        this.state = {
            visibility: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ visibility: e });
    }

    render() {
        const { photo, onImageClick } = this.props;
        return (
            <article>
                <Observer onChange={this.handleChange} rootMargin="50px 50px 50px 50px">
                    <a
                        href="#"
                        onClick={onImageClick}
                        className="photos-grid__link"
                        id={photo.id}
                    >
                        {this.state.visibility && (
                            <figure
                                className="absolute-bg"
                                style={{
                                    backgroundImage: `url(${photo.url})`
                                }}
                            />
                        )}
                        {!this.state.visibility && (
                            <figure
                                className="absolute-bg"
                                style={{ backgroundImage: `url(${this.placeholderUrl})` }}
                            />
                        )}
                    </a>
                </Observer>

            </article>

        )
    }
}
