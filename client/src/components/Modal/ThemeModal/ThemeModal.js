import React from 'react';
import Modal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './ThemeModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { themes } from '~/theme';
import ThemeItem from '../ThemeItem';

const cx = classNames.bind(styles);
function ThemeModal({ isOpen, setIsOpen }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '400px',
            maxWidth: '74%',
            maxHeight: '99vh',
            zIndex: 100,
            padding: 0,
            borderRadius: '10px',
            backgroundColor: 'var(--primary-bg)',
        },
    };
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={() => setIsOpen(false)}
            onRequestClose={() => setIsOpen(false)}
            ariaHideApp={false}
            style={customStyles}
            contentLabel="Example Modal"
            overlayClassName={cx('overlay')}
        >
            <div className={cx('modal-header')}>
                <span>Giao Diện</span>
                <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(false)} />
            </div>
            <div className={cx('container')}>
                <div>
                    {themes.map((theme, index) => {
                        return <ThemeItem item={theme} key={index} />;
                    })}
                </div>
            </div>
        </Modal>
    );
}

export default ThemeModal;
