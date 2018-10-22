import React from 'react';
import Observer from 'react-intersection-observer';
import './photo.scss';

export default class Video extends React.Component {
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
        const { video, onVideoClick } = this.props;
        return (
            <article>
                <Observer onChange={this.handleChange} rootMargin="50px 50px 50px 50px">
                    <a
                        href="#"
                        onClick={onVideoClick}
                        className="photos-grid__link"
                        id={video.id}
                    >
                        <video autoPlay loop muted>
                            <source src={video.url.mp4} />
                        </video>
                    </a>
                </Observer>

            </article>

        )
    }
}
