import React from 'react';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);
function Title({ title = '', hoverColor, hoverMove =false, onClick, customClass, ...passProps }) {
    const props = {
        onClick,
        ...passProps,
    };

    const classes = cx('wrapper', {
        [customClass]: customClass,
        hoverColor,
        hoverMove,
    });
    return (
        <h3 className={classes} {...props}>
            <div className={cx('title')}>{title}</div>
        </h3>
    );
}

export default Title;
