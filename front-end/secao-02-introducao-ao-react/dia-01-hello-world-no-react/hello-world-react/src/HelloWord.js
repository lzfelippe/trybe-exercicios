import React, { Component } from "react";

class HelloWorld extends Component {
    render() {
        let textJSX = 'Hello, JSX';
        return (<h1>{ textJSX }</h1>)
    }
}

export default HelloWorld;