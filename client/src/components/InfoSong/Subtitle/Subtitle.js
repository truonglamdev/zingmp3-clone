import React from 'react';
import { Link } from 'react-router-dom';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/themes/light.css';
import { wrapper as PopperWrapper } from '~/components/Popper';
import MediaPreview from '~/components/MediaPreview';

//import styles scss
import classNames from 'classnames/bind';
import styles from './Subtitle.module.scss';

const cx = classNames.bind(styles);

const renderReview = (artist) => {
    return (
        <div tabIndex={-1}>
            <PopperWrapper>
                <MediaPreview />
            </PopperWrapper>
        </div>
    );
};

const renderArtist = (artists) => {
    return artists?.map((artist, index) => (
        <span key={index}>
            <HeadLessTippy interactive offset={[0, 0]} placement="top-start" render={() => renderReview(artist)}>
                <Link to="/" className={cx('subtitle-underline')}>
                    {artist.name} {artists?.length - 1 !== index ? ' , ' : ''}
                </Link>
            </HeadLessTippy>
        </span>
    ));
};

function Subtitle({ subtitle = '', colorHover = false, onClick = () => {}, customClass, artists = [], ...passProps }) {
    const classes = cx('subtitle');
    return (
        <div className={classes}>
            {subtitle && artists ? `${subtitle} ${renderArtist(artists)}` : subtitle || renderArtist(artists)}
        </div>
    );
}

export default Subtitle;
