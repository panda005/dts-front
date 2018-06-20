import React from "react";
import Document from "./Document";
import axios from "axios/index";
import Collection from "./Collections";

class Analyze extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doc: [],
        }
        this.fetchCollections = this.fetchCollections.bind(this)
    }

    fetchCollections() {
        const url = "http://dts-api.dev.9rum.cc/v1/collections.json";
        axios.get(url)
            .then(response => {
                console.log(response.data);
            });
    }

    componentDidMount() {
        this.fetchCollections();
        // axios.get("http://dts-api.dev.9rum.cc/v1/collection/blog/document/22WHAUUKaff2m9E9rA/analyze.json?aggr=true")
        //     .then(response => {
        //         console.log(response.data);
        //         this.setState({doc: response.data})
        //     }).catch()
    }

    render() {
        const fields = this.state.doc;
        return (
            <div className="content-wrapper">
                <section className="content">
                    <Collection />
                </section>
            </div>
        );
    }
}
export default Analyze;