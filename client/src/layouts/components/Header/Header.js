import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '~/components/Search';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import { useState } from 'react';
import ActionHeader from '~/layouts/components/Header/ActionsHearder';

const cx = classNames.bind(styles);

function Header() {
    // eslint-disable-next-line no-unused-vars
    const [active, setActive] = useState(false);
    //Handle change theme

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('level-left')}>
                    <div className={cx('control')}>
                        <button className={cx('control-icon')}>
                            <ArrowLeft />
                        </button>
                        <button className={cx('control-icon')}>
                            <ArrowRight />
                        </button>
                    </div>
                    <Search active={active} />
                </div>
                <div className={cx('level-right')}>
                    <ActionHeader />
                </div>
            </div>
        </header>
    );
}

export default Header;
