import React from 'react';
import { connect } from 'react-redux'
import { Button, ButtonToolbar } from 'react-bootstrap'
import BlankPage from '../common/BlankPage'

export default class Debug extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        console.log("componentDidMount!!!")
    }

    render() {
        return (
            <BlankPage
                title="Debug"
                subtitle="" >


            </BlankPage>
        );
    }
}