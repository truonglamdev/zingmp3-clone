import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import Image from '~/components/Image';
import formattedNumber from '~/utils/formatedNumber';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.thumbnail} alt="avatar" />
            <div className={cx('content')}>
                <h3 className={cx('title')}>{data.name}</h3>
                <h3 className={cx('subtitle')}>Nghệ sĩ •{formattedNumber(data.totalFollow, 1)} quan tâm</h3>
            </div>
        </div>
    );
}

export default AccountItem;
