import React from "react";
import Document from "./Document";
import axios from "axios/index";

class Analyze extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doc: [],
        }
    }

    componentDidMount() {
        axios.get("http://dts-api.dev.9rum.cc/v1/collection/blog/document/22WHAUUKaff2m9E9rA/analyze.json?aggr=true")
            .then(response => {
                console.log(response.data);
                this.setState({doc: response.data})
            }).catch()
    }

    render() {
        const fields = this.state.doc;
        return (
            <div className="content-wrapper">
                <section className="content">
                    <Document fields={fields} />
                </section>
            </div>
        );
    }
}
export default Analyze;