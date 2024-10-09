import React from "react";
import { Link } from "react-router-dom";

import Layout from "../ui/layout.ui";

import '../css/Home.css';

class Page extends Layout {
    public constructor(props: any) {
        super(props);
    };

    private readonly Page = () => {
        return (
            <div className="page">
                <main>
                    <div id="last-news"></div>

                    <div className="navigation">
                        <Link to="/news">Новости</Link>
                        <Link to="/rules">Правила</Link>
                    </div>
                </main>
            </div>
        );
    };

    public render(): React.ReactNode {
        return this.Layout(this.Page);
    };
};

export default Page;