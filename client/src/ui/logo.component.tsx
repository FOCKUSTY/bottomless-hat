import React from "react";
import '../css/ui/logo-component.css';

import LinksComponent from './links.component';

class Component extends React.Component {
    public constructor(props: any) {
        super(props);
    };

    private readonly Component = () => {
        return (
            <>
                <div className="logo">
                    <div className="logo-main">
                        <img src="/logo.png" alt="logo" />

                        <div className="text">
                            <h1>Bottomless Hat</h1>
                            <LinksComponent />
                        </div>
                    </div>
                </div>
            </>
        );
    };

    public render(): React.ReactNode {
        return this.Component();
    };
};

export default Component;