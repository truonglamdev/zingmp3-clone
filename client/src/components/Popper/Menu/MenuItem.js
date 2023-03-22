import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import { Button } from '~/components/Buttons';

const cx = classNames.bind(styles)
function MenuItems({ data }) {
    return <Button className={cx('menu-user-item')} leftIcon={data.icon}>{data.title}</Button>;
}

export default MenuItems;
