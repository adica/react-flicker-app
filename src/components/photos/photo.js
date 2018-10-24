import React from 'react';
import cn from 'classnames';
import Observer from 'react-intersection-observer';
import { ReactComponent as SelectedIcon } from './../../v-circle.svg';
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
        const { photo, isSelected, selectionMode, onImageClick } = this.props;
        const articleClasses = cn('article', { 'selection-mode': selectionMode });
        const selectedClasses = cn('select-icon', { 'selected': isSelected });

        return (
            <article className={articleClasses}>
                <button className={selectedClasses} onClick={onImageClick}>
                    <SelectedIcon />
                </button>

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
