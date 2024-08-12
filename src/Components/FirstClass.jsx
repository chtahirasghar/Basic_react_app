import { Component } from "react"
import StudentClassR from "./StudentClassR";

export default class FirstClass extends Component {
    constructor() {
        super();
        this.state = {
            name: "Tahir",
            add: "Sabzazar"
        }
    }
    changeName() {
        this.setState({ name: "Asghar" });
    }
    changeAdd() {
        this.setState({ add: "Lahore" })
    }
    render() {
        return (
            <>
                <h2>This is Class Components</h2>
                <h2>Name : {this.state.name}</h2>

                <button onClick={() => { this.changeName() }}>ChangeName</button>
                <StudentClassR data={this.state.add} />

                <button onClick={() => { this.changeAdd() }}>ChangeAddress</button>
            </>
        )
    }
}
