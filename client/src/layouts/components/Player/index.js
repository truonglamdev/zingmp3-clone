import classNames from 'classnames/bind';
import styles from './Player.module.scss';
import PlayerSongInfo from './PlayerSongInfo';

const cx = classNames.bind(styles);
function Player() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('player-control')}>
                <div className={cx('player-control__left')}>
                    <PlayerSongInfo />
                </div>
                <div className={cx('player-control__center')}>center</div>
                <div className={cx('player-control__right')}>right</div>
            </div>
        </div>
    );
}

export default Player;
