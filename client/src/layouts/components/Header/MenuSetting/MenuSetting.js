import { Fragment } from 'react';
import { useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import styles from './MenuSetting.module.scss';
import classNames from 'classnames/bind';

import {
    BadgeAd,
    BadgeSd,
    ChevronRight,
    ExclamationCircle,
    FileEarmarkText,
    Flag,
    Gear,
    PlayCircle,
    ShieldCheck,
    SlashCircle,
    Telephone,
} from 'react-bootstrap-icons';

import { wrapper as PopperWrapper } from '~/components/Popper';
import MenuList, { MenuSwitch } from './MenuList';
import { Button } from '~/components/Buttons';

const cx = classNames.bind(styles);
function MenuSetting({ placement = 'bottom-end' }) {
    const [visible, setVisible] = useState(false);

    const handleOnclick = () => {
        setVisible(true);
    };

    const handleOnClickOutSide = () => {
        setVisible(false);
    };

    return (
        <Fragment>
            <TippyHeadless
                onClickOutside={handleOnClickOutSide}
                visible={visible}
                placement={placement}
                interactive={true}
                render={(attrs) => (
                    <PopperWrapper className={cx('menu-setting')}>
                        <div className={cx('menu-setting-item')} tabIndex="-1" {...attrs}>
                            <ul className={cx('menu-list')}>
                                <li className={cx('menu-item')}>
                                    <div className={cx('menu-icon-left')}>
                                        <SlashCircle />
                                    </div>
                                    <div className={cx('menu-title')}>Danh sách chặn</div>
                                </li>

                                <MenuList>
                                    <li className={cx('menu-item')}>
                                        <div className={cx('menu-icon-left')}>
                                            <BadgeSd />
                                        </div>
                                        <div className={cx('menu-title')}>Chất lượng nhạc</div>
                                        <div className={cx('menu-icon-right')}>
                                            <ChevronRight />
                                        </div>
                                    </li>
                                </MenuList>

                                <MenuSwitch>
                                    <li className={cx('menu-item')}>
                                        <div className={cx('menu-icon-left')}>
                                            <PlayCircle />
                                        </div>
                                        <div className={cx('menu-title')}>Giao diện</div>
                                        <div className={cx('menu-icon-right')}>
                                            <ChevronRight />
                                        </div>
                                    </li>
                                </MenuSwitch>
                            </ul>
                            <div className={cx('border')}></div>
                            <ul className={cx('menu-list')}>
                                <li className={cx('menu-item', 'overlay')}>
                                    <div className={cx('menu-icon-left')}>
                                        <ExclamationCircle />
                                    </div>
                                    <div className={cx('menu-title')}>Giới thiệu</div>
                                </li>
                                <li className={cx('menu-item', 'overlay')}>
                                    <div className={cx('menu-icon-left')}>
                                        <Flag />
                                    </div>
                                    <div className={cx('menu-title')}>Góp ý</div>
                                </li>
                                <li className={cx('menu-item', 'overlay')}>
                                    <div className={cx('menu-icon-left')}>
                                        <Telephone />
                                    </div>
                                    <div className={cx('menu-title')}>Liên hệ</div>
                                </li>
                                <li className={cx('menu-item', 'overlay')}>
                                    <div className={cx('menu-icon-left')}>
                                        <BadgeAd />
                                    </div>
                                    <div className={cx('menu-title')}>Quảng cáo</div>
                                </li>
                                <li className={cx('menu-item', 'overlay')}>
                                    <div className={cx('menu-icon-left')}>
                                        <FileEarmarkText />
                                    </div>
                                    <div className={cx('menu-title')}>Thoả thuận sử dụng</div>
                                </li>
                                <li className={cx('menu-item', 'overlay')}>
                                    <div className={cx('menu-icon-left')}>
                                        <ShieldCheck />
                                    </div>
                                    <div className={cx('menu-title')}>Chính sách bảo mật</div>
                                </li>
                            </ul>
                        </div>
                    </PopperWrapper>
                )}
            >
                <Tippy delay={[0, 300]} content="Cài đặt">
                    <Button onClick={handleOnclick} circle>
                        {<Gear />}
                    </Button>
                </Tippy>
            </TippyHeadless>
        </Fragment>
    );
}

export default MenuSetting;
