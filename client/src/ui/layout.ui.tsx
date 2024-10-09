import React from "react";

import Header from './header.ui';
import Footer from './footer.ui';

abstract class Layout extends React.Component {
    protected readonly Layout = (Page: () => JSX.Element) => {
        return (
            <div id="main-page">
                <Header />
                
                <Page />
                
                <Footer />
            </div>
        );
    };

    public abstract render(): React.ReactNode;
};

export default Layout;