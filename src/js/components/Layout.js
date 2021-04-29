import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    render() {
        let components = [<Header />, <Footer />]
        return (
            <div>
                {components}
            </div>
        );
    }
}
