import { render } from "@testing-library/react";
import React from "react";
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h2>
                    It is {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        );
    }
}

export default Timer;