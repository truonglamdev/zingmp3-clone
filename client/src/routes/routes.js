import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Mv from '~/pages/MV';
import Radio from '~/pages/Radio';
import Zingchart from '~/pages/Zingchart';
import News from '~/pages/News';
import Top from '~/pages/Top';
import MyMusic from '~/pages/MyMusic';
import History from '~/pages/MyMusic/History';
import Hub from '~/pages/Hub';

import routes from '~/config'
//public routes
const publicRoutes = [
    { path: routes.home, component: <Home /> },
    { path: routes.following, component: <Following /> },
    { path: routes.mv, component: <Mv /> },
    { path: routes.radio, component: <Radio /> },
    { path: routes.zingchart, component: <Zingchart /> },
    { path: routes.news, component: <News /> },
    { path: routes.top, component: <Top /> },
    { path: routes.mymusic, component: <MyMusic /> },
    { path: routes.hub, component: <Hub /> },

    { path: routes.favorite, component: <MyMusic /> },
    { path: routes.album, component: <MyMusic /> },
    { path: routes.playlist, component: <MyMusic /> },
    { path: routes.history, component: <History /> },
];

const privateRoutes = [{ path: routes.mymusic, component: <MyMusic /> }];

export { publicRoutes, privateRoutes };