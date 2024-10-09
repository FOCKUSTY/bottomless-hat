import React from "react";
import '../css/ui/logo-component.css';

import {
    FaDiscord,
    FaVk,
    FaTelegramPlane
} from 'react-icons/fa'; 

type Props = {
    text?: boolean;
}

class Component extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    };

    private readonly Component = () => {
        return (
            <>
                <div className="links">
                    <a href="https://discord.gg/pw8HgBs2yE">
                        <FaDiscord />
                        {
                            this.props.text
                                ? <span>Discord</span>
                                : <></>
                        }
                    </a>
                    <a href="https://t.me/BottomlessHat">
                        <FaTelegramPlane />
                        {
                            this.props.text
                                ? <span>Telegram</span>
                                : <></>
                        }
                    </a>
                    <a href="https://vk.com/bottomlesshat">
                        <FaVk />
                        {
                            this.props.text
                                ? <span>Vkontakte</span>
                                : <></>
                        }
                    </a>
                </div>
            </>
        );
    };

    public render(): React.ReactNode {
        return this.Component();
    };
};

export default Component;