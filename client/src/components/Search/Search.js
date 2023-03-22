//import API

import { useEffect, useState, useRef } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/themes/light.css';
import { X } from 'react-bootstrap-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import AccountItem from '~/components/AccountItem';
import { SearchIcon, TrendArrow } from '~/components/icons';
import { wrapper as PopperWrapper } from '~/components/Popper';
import { search } from '~/servers/index';
import { useDebounce } from '~/hooks';
import SongCard from '../SongCard';
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState({});
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounce = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const res = await search(debounce);
            setSearchResult(res.data);
            if (res.msg === 'Success' && res.err === 0) {
                setLoading(true);
            }
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce]);

    // function handle
    const handleClearValue = () => {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleClickOutside = () => {
        setShowResults(false);
    };

    const handleFocus = () => {
        setShowResults(true);
    };

    const handleSearchSong = (e) => {
        setSearchValue(e.target.value);
    };

    const classes = cx('Search-container', {
        active: showResults,
    });

    return (
        <div className={classes}>
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
            <>
                <HeadLessTippy
                    visible={showResults ? true : false}
                    onClickOutside={handleClickOutside}
                    interactive={true}
                    render={(attrs) => (
                        <PopperWrapper className={cx('custom-search-result')}>
                            {loading && searchResult ? (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <div className={cx('suggest-title')}>Đề xuất cho bạn</div>
                                    <ul className={cx('suggest-list')}>
                                        <li className={cx('suggest-item')}>
                                            <div className={cx('suggest-icon')}>{<TrendArrow />}</div>
                                            <span className={cx('suggest-name')}>{searchValue}</span>
                                        </li>

                                        <span className={cx('behavior')}></span>
                                    </ul>
                                    <div className={cx('suggest-list')}>
                                        <div className={cx('suggest-title')}>Gợi ý kết quả</div>
                                        <div>
                                            {searchResult &&
                                                searchResult.artists &&
                                                searchResult.artists.map(
                                                    (item, index) =>
                                                        !item.link.startsWith('/nghe-si') && (
                                                            <AccountItem key={index} data={item} />
                                                        ),
                                                )}
                                            {searchResult &&
                                                searchResult.songs &&
                                                searchResult.songs.map((item, index) => (
                                                    <SongCard data={item} key={index} />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={cx('not-found')}>Không tìm thấy kết quả nào vui lòng nhập từ khoá khác!</div>
                            )}
                        </PopperWrapper>
                    )}
                >
                    <div className={cx('search-input')}>
                        <input
                            value={searchValue}
                            placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
                            ref={inputRef}
                            onChange={(e) => handleSearchSong(e)}
                            onFocus={handleFocus}
                        ></input>
                    </div>
                </HeadLessTippy>
            </>
            {!!searchValue && (
                <button className={cx('clear-btn')} onClick={handleClearValue}>
                    <X />
                </button>
            )}
        </div>
    );
}

export default Search;
