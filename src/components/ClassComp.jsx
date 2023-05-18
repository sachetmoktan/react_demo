import { Component } from "react";

class ClassComp extends Component {
    constructor() {
        super();
        this.state = {
            name: "Class Component"
        }
    }
    render() {
        return (
            <>
                <p>This is {this.state.name}</p>
            </>
        )
    }

}

export default ClassComp