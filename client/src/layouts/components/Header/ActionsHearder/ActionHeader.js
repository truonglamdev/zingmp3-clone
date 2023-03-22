import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ActionHeader.module.scss';

import { Gem, Person, Upload } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTShirt } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';

import { Button } from '../../../../components/Buttons';
import Image from '../../../../components/Image/Image';
import Menu from '~/components/Popper/Menu';
import MenuSetting from '../MenuSetting';
import ThemeModal from '~/components/Modal/ThemeModal';
const cx = classNames.bind(styles);

const ActionHeader = () => {
    const menuUser = [
        {
            title: 'Nâng cấp VIP',
            icon: <Gem />,
        },
        {
            title: 'Mua code VIP',
            icon: <Gem />,
        },
    ];
    const [userLogin, setUserLogin] = useState(false);
    const [isOpenThemeModal, setIsOpenThemeModal] = useState(false);

    //fake user login

    useEffect(() => {
        setUserLogin(true);
    }, [userLogin]);

    // Handle event

    return (
        <>
            <div className={cx('wrapper')}>
                <Tippy content="Chủ đề" placement="bottom">
                    <Button onClick={() => setIsOpenThemeModal(true)} circle>
                        {<FontAwesomeIcon icon={faTShirt} />}
                    </Button>
                </Tippy>
                <Tippy delay={[0, 300]} content="Nâng cấp Vip">
                    <Button circle>{<Gem />}</Button>
                </Tippy>
                <Tippy delay={[0, 300]} content="Tải lên">
                    <Button circle>{<Upload />}</Button>
                </Tippy>
                <MenuSetting />
                {userLogin ? (
                    <Menu items={menuUser} footer="Đăng xuất">
                        <div>
                            <Image
                                className={cx('avatar')}
                                src="https://lh3.googleusercontent.com/ogw/ADea4I4fvDqiFt4dh1hv6v0EpC8TgZfdN7W5csPcODaM=s64-c-mo"
                                alt="avatar"
                            />
                        </div>
                    </Menu>
                ) : (
                    <Button circle>{<Person />}</Button>
                )}
            </div>
            <ThemeModal isOpen={isOpenThemeModal} setIsOpen={setIsOpenThemeModal} />
        </>
    );
};

export default ActionHeader;
