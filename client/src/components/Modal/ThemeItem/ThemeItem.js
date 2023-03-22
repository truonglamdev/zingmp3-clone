import { memo } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './ThemeItem.module.scss';
import { setTheme } from '~/state';

const cx = classNames.bind(styles);
const Items = memo(({ item }) => {
    const dispatch = useDispatch();
    const handleAddNewTheme = (theme) => {
        dispatch(setTheme(theme));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('theme-img')}>
                <img src={item.itemS} alt="" />
            </div>
            <div className={cx('theme-btn')}>
                <button onClick={() => handleAddNewTheme(item)} className={cx('button-hover')}>
                    Áp dụng
                </button>
                <button>Xem trước</button>
            </div>
        </div>
    );
});

function ThemeItem({ item }) {
    const { title, items } = item;
    return (
        <>
            <h3 className={cx('title')}>{title}</h3>
            <div className={cx('container')}>
                {items.map((item, index) => {
                    return <Items item={item} key={index} />;
                })}
            </div>
        </>
    );
}

export default ThemeItem;
