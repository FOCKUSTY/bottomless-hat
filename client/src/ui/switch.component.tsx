import React from "react";

import Handler from '../handlers/switch-theme.handler';

type Props = {
    className: string;
    id: string;
};

const handler = new Handler();

class Component extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    };

    componentDidMount = () => handler.OnLoad(this.props.id);

    public render(): React.ReactNode {
        return (
            <div className={`${this.props.className} noselect`}>
                <input
                    className="input-switch"
                    type="checkbox"
                    id={this.props.id}
                    onChange={handler.Handler}
                />
                <label className="label-switch" htmlFor={this.props.id}>Toggle</label>
            </div>
        );
    }
};

export default Component;