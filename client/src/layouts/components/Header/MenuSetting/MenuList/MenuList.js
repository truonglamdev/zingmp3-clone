import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import styles from './MenuList.module.scss';
import classNames from 'classnames/bind';

import { wrapper as PopperWrapper } from '~/components/Popper';
import { CheckLg } from 'react-bootstrap-icons';

const cx = classNames.bind(styles);
function MenuList({ children, placement = 'left-start' }) {
    return (
        <Tippy
            placement={placement}
            interactive={true}
            render={(attrs) => (
                <PopperWrapper className={cx('menu-wrapper')}>
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <div className={cx('menu-item')}>
                            <div>
                                <div className={cx('menu-title')}>SQ.128</div>
                                <span>Giảm sử dụng cho các kết nối chậm hơn.</span>
                            </div>
                            <div className={cx('menu-icon')}>{<CheckLg />}</div>
                        </div>
                        <div className={cx('menu-item')}>
                            <div>
                                <div className={cx('menu-title')}>SQ.128</div>
                                <span>Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng âm thanh.</span>
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
MenuList.propTypes = {
    children: PropTypes.node.isRequired,
    placement: PropTypes.string,
};

export default MenuList;
