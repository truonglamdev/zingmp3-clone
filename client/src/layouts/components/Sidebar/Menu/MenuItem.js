import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import types from './Menu.module.scss';
import { Fragment } from 'react';
import { PlayCircle } from 'react-bootstrap-icons';
import Image from '~/components/Image';

const cx = classNames.bind(types);
function MenuItem({ to, title, icon, playOutLine = false, liveBtn = false, noActive}) {
    return (
        <NavLink to={to} className={(navData) => cx('menu-item', { active: noActive ? false : navData.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <div className={cx('title')}>{title}</div>

            {liveBtn ? (
                <div className={cx('live-btn')}>
                    <Image
                        src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"
                        alt="live"
                    />
                </div>
            ) : (
                <Fragment></Fragment>
            )}

            {playOutLine ? (
                <div className={cx('play-icon')}>
                    <PlayCircle />
                </div>
            ) : (
                <Fragment></Fragment>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    noActive: PropTypes.bool,
};
export default MenuItem;
