import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import styles from './Sidebar.module.scss';
import {
    BlockquoteLeft,
    Boombox,
    Broadcast,
    CameraVideo,
    GraphUpArrow,
    MusicNoteBeamed,
    MusicPlayer,
    Pencil,
    PlusLg,
    QuestionCircle,
    Star,
} from 'react-bootstrap-icons';
import { Logo } from './Logo';
import { Menu, MenuItem } from './Menu';
import routes from '~/config';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function Sidebar() {
    const library = [
        {
            id: 1,
            icon: 'https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg',
            title: 'Bài hát',
            playOutLine: true,
            to: routes.favorite,
        },
        {
            id: 2,
            icon: '	https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg',
            title: 'Playlist',
            playOutLine: false,
            to: routes.playlist,
        },
        {
            id: 3,
            icon: '	https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-album.24e3332b.svg',
            title: 'Album',
            playOutLine: false,
            to: routes.album,
        },
        {
            id: 5,
            icon: '	https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg',
            title: 'Gần đây',
            playOutLine: false,
            to: routes.history,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <Logo />
            <div className={cx('sidebar-main')}>
                <div className={cx('')}>
                    <Menu>
                        <MenuItem to={routes.mymusic} title="Cá nhân" icon={<MusicPlayer />} playOutLine={true} />
                        <MenuItem to={routes.home} title="Khám phá" icon={<QuestionCircle />} />
                        <MenuItem to={routes.zingchart} title="#Zingchart" icon={<GraphUpArrow />} playOutLine={true} />
                        <MenuItem
                            to={routes.radio}
                            title="Radio"
                            icon={<Broadcast />}
                            playOutLine={true}
                            liveBtn={true}
                        />
                        <MenuItem to={routes.following} title="Theo dõi" icon={<Boombox />} />
                    </Menu>
                    <div className={cx('sidebar-divide')}></div>
                </div>

                <div className={cx('track-horizontal')}></div>

                <div className={cx('sidebar-scroll-box')}>
                    <div className={cx('sidebar-scroll')}>
                        <div className={cx('sidebar-scroll-list')}>
                            <MenuItem to={routes.news} title="Nhạc mới" playOutLine={true} icon={<MusicNoteBeamed />} />
                            <MenuItem to={routes.hub} title="Thể loại" icon={<BlockquoteLeft />} />
                            <MenuItem to={routes.top} title="Top 100" icon={<Star />} />
                            <MenuItem to={routes.mv} title="Mv" icon={<CameraVideo />} />
                        </div>

                        <div className={cx('sidebar-scroll-banner')}>
                            <div className={cx('banner-text')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</div>
                            <a className={cx('banner-btn')} href="/">
                                Nâng cấp vip
                            </a>
                        </div>

                        <div className={cx('sidebar-labrary')}>
                            <div className={cx('sidebar-labrary-header')}>
                                <span className={cx('header-title')}>Thư viện</span>
                                <Tippy content="Chỉnh sửa">
                                    <div className={cx('header-icon')}>
                                        <Pencil className={cx('icon')} />
                                    </div>
                                </Tippy>
                            </div>
                            <div className={cx('sidebar-labrary-list')}>
                                {library.map((item,index) => (
                                    <MenuItem
                                        key={index}
                                        noActive={true}
                                        to={item.to}
                                        title={item.title}
                                        playOutLine={item.playOutLine}
                                        icon={<Image src={item.icon} alt={item.title} />}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cx('sidebar-add-playlist')}>
                        <div className={cx('add-playlist-icon')}>
                            <PlusLg />
                        </div>
                        <span className={cx('add-playlist-title')}> Tạo playlist mới</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Sidebar;
