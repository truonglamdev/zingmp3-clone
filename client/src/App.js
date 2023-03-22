import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { useSelector } from 'react-redux';
function App() {
    const themes = useSelector((state) => state.themeGlobal);
    const stylesBackground = {
        backgroundImage: `url(${themes.bgImg})`,
        width: '100%',
        height: 'calc(100vh + 90px)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' center center',
        backgroundSize: 'cover',
        backgroundColor: 'var(--primary-bg)',
    };
    return (
        <Router>
            <div className="App" style={stylesBackground}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return <Route key={index} path={route.path} element={<Layout>{route.component}</Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
