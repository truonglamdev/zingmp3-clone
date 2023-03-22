import classNames from 'classnames/bind';
import types from './Logo.module.scss';

const cx = classNames.bind(types);
function Logo() {
    return <div className={cx('wrapper')}>
        <div className={cx('logo-box')}>
            <a href='/'>
                <div className={cx('logo-img')}></div>
            </a>
        </div>
    </div>;
}

export default Logo;
