import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LandingPage from './components/pages/LandingPage';
import HomePage from './components/pages/HomePage';
import MoreDetailsPage from './components/pages/MoreDetailsPage';

const RouterComponent = () => {

    return (
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="all">

                    <Scene
                        key="LandingPage"
                        component={LandingPage}
                        hideNavBar
                        initial
                    />

                    <Scene
                        key="HomePage"
                        component={HomePage}
                        hideNavBar
                    />

                    <Scene
                        key="MoreDetaisPage"
                        component={MoreDetailsPage}
                        hideNavBar

                    />


                </Scene>

            </Scene>
        </Router>
    );

};

export default RouterComponent;