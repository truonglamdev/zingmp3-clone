import React from 'react';
import classNames from 'classnames/bind';
import styles from './PlayerSongInfo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Image from '~/components/Image';
import Title from '~/components/InfoSong/Title';
import Subtitle from '~/components/InfoSong/Subtitle';
const cx = classNames.bind(styles);
function PlayerSongInfo() {
    const dispatch = useDispatch();
    const song = useSelector((state) => state.song);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('song-image')}>
                <Image className={cx('image')} src={song.thumbnailM} alt={song.title} />
            </div>
            <div className={cx('song-info')}>
                <Title title={song.title} hoverMove hoverColor />
                <Subtitle artists={song.artists} />
            </div>
            <div className={cx('song-actions')}></div>
        </div>
    );
}

export default PlayerSongInfo;
