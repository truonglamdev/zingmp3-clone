import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { BoxArrowLeft } from 'react-bootstrap-icons';

import { wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { Button } from '~/components/Buttons';

const cx = classNames.bind(styles);
function Menu({ children, items = [], placement = 'bottom-end', footer }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };


    return (
        <Tippy
            placement={placement}
            interactive={true}
            render={(attrs) => (
                <PopperWrapper className={cx('Menu-user')}>
                    <div className={cx('Menu-user-list')} tabIndex="-1" {...attrs}>
                        {renderItems()}
                        {footer && (
                            <>
                                <span className={cx('border-top')}></span>
                                <Button className={cx('logout')} leftIcon={<BoxArrowLeft />}>
                                    {footer}
                                </Button>
                            </>
                        )}
                    </div>
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
