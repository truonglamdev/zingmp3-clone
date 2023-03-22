import classNames from 'classnames/bind';
import styles from './SongCard.module.scss';
import Image from '../Image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setInfoSong } from '~/Redux/Reducer/songSlide';

const cx = classNames.bind(styles);
function SongCard({ data }) {
    const dispatch = useDispatch();
    const handleClickSong = () => {
        dispatch(setInfoSong(data));
    };
    return (
        <div className={cx('wrapper')} onClick={handleClickSong}>
            <Image className={cx('avatar')} src={data.thumbnailM} alt="avatar" />
            <div className={cx('content')}>
                <h3 className={cx('title')}>{data.title}</h3>
                <h3 className={cx('subtitle')}>{data.artistsNames}</h3>
            </div>
        </div>
    );
}

export default SongCard;
