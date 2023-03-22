import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import styles from './MenuList.module.scss';
import classNames from 'classnames/bind';

import '~/../node_modules/input-switch/src/input-switch.scss';

import { wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
function MenuSwitch({ children, placement = 'left-start' }) {
    return (
        <Tippy
            placement={placement}
            interactive={true}
            render={(attrs) => (
                <PopperWrapper className={cx('menu-wrapper')}>
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <div className={cx('menu-item')}>
                            <div className={cx('menu-option')}>Luôn phát nhạc toàn màn hình</div>
                            <div className={cx('menu-switch')}>
                                <label className="has-switch">
                                    <input type="checkbox" />
                                    <span className="switch is-round"></span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('menu-item')}>
                            <div className={cx('menu-option')}>Hiệu ứng</div>
                            <div className={cx('menu-switch')}>
                                <label className="has-switch">
                                    <input type="checkbox" />
                                    <span className="switch is-round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

MenuSwitch.propTypes = {
    children: PropTypes.node.isRequired,
    placement: PropTypes.string,
};

export default MenuSwitch;
