import React from "react";

class Page extends React.Component {
    public constructor(props: any) {
        super(props);
    };

    private readonly Page = () => {
        return (
            <></>
        );
    };

    public render(): React.ReactNode {
        return this.Page();
    };
};

export default Page;