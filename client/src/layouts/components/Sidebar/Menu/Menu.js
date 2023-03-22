import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import types from './Menu.module.scss'

const cx = classNames.bind(types)
function Menu({ children }) {
    return (
        <div className={cx('wrapper')}>{children}</div>
    );
}

Menu.propTypes = {
    children : PropTypes.node.isRequired,
}
export default Menu;