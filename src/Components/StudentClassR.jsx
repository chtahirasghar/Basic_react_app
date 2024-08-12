import React, { Component } from 'react'

export default class StudentClassR extends Component {
    render() {
        return (
            <>
                <h2>Student Class Reciver</h2>
                <h3>Address: {this.props.data}</h3>
            </>
        )
    }
}
