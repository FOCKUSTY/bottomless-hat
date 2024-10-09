import React from "react";
import '../css/ui/header.css';

import LogoComponent from './logo.component';
import SwitchComponent from './switch.component';

class Component extends React.Component {
    public constructor(props: any) {
        super(props);
    };

    private readonly Component = () => {
        return (
            <>
                <header>
                    <LogoComponent />

                    <div className="logo">
                        <SwitchComponent className="switcher" id="switch"/>
                        <h2>The Void</h2>
                    </div>
                </header>
            </>
        );
    };

    public render(): React.ReactNode {
        return this.Component();
    };
};

export default Component;