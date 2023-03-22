import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import Player from '~/layouts/components/Player';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>
                    <div className={cx('content-scroll')}>{children}</div>
                </div>
                <Player />
            </div>
        </div>
    );
}

export default DefaultLayout;
