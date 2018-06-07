import React from 'react';
import { connect } from 'react-redux'
import { Button, ButtonToolbar } from 'react-bootstrap'
import BlankPage from '../common/BlankPage'
import axios from "axios/index";
import Document from "./Document";

export default class Analyze extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            doc: {},
            isLoading: true
        }
    }

    componentDidMount(){

        axios.get("http://dts-api.dev.9rum.cc/v1/collection/blog/document/22WHAUUKaff2m9E9rA/analyze.json?aggr=true")
            .then(response => {
                this.setState({doc: response.data[0], isLoading: false})
            }).catch()
    }

    render() {
        console.log(this.state.doc);
        const {inputFieldName, input} = this.state.doc;
        return (
            <Document
                fieldName={inputFieldName}
                fieldValue={input} >
            </Document>
        );
    }
}