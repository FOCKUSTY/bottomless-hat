import React from "react";

import LinksComponent from './links.component';

import '../css/ui/footer.css';

class Component extends React.Component {
    public constructor(props: any) {
        super(props);
    };

    private readonly Component = () => {
        return (
            <>
                <footer>
                    <div>
                        <h2>FOCKUSTY</h2>
                        <h2>© 2024</h2>
                    </div>

                    <LinksComponent text={true} />
                </footer>
            </>
        );
    };

    public render(): React.ReactNode {
        return this.Component();
    };
};

export default Component;