import React from 'react';
import { connect } from 'react-redux'
import { Button, ButtonToolbar } from 'react-bootstrap'
import ReactJson from 'react-json-view'
import Select2 from 'react-select2-wrapper';

import axios from 'axios'

import BlankPage from '../common/BlankPage'
import Box from '../common/Box'

export default class Analyze extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            collections: [],
            dsid: "",
            selectedCollection: "",
            collectionInfo: {},
            bifJson: {}
        }
        this.handleSelectCollection = this.handleSelectCollection.bind(this)
        this.handleDsidText = this.handleDsidText.bind(this)
        this.handleGoBtn = this.handleGoBtn.bind(this)
        this.loadAllCollectionInfo = this.loadAllCollectionInfo.bind(this)
        this.loadCollectionInfo = this.loadCollectionInfo.bind(this)
    }

    componentDidMount(){
        console.log("componentDidMount!!!")

        this.loadAllCollectionInfo()
    }

    handleSelectCollection(e) {
        let selectedCollection = e.target.value
        this.loadCollectionInfo()

        this.setState({selectedCollection: selectedCollection})
    }

    handleDsidText(e) {
        let dsidText = e.target.value
        this.setState({dsid: dsidText})
    }

    handleGoBtn() {
        // todo: Use state values
        let dsid = '20740490'
        let selectedCollection = 'poi'

        let bifUrl = 'http://dts-api.dev.9rum.cc/v1/collection/' + selectedCollection + '/document/' + dsid + '/bif.json'

        axios.get(bifUrl)
            .then(response => {
                console.log(response)

                this.setState({bifJson: response.data.objects[0]})
            })
            .catch(function (error) {
                console.log(error)

                // todo: error handling
            })
    }

    loadCollectionInfo() {
        let collectionsUrl = 'http://dts-api.dev.9rum.cc/v1/collection/poi.json'

            axios.get(collectionsUrl)
                .then(response => {
                    this.setState({collectionInfo: response.data})
                })
                .catch(function (error) {
                    console.log(error)

                    // todo: error handling
                })
    }

    loadAllCollectionInfo() {
        let collectionsUrl = 'http://dts-api.dev.9rum.cc/v1/collections.json'

        axios.get(collectionsUrl)
            .then(response => {
                var collections = response.data.map(function(col) {
                    var collection = {}
                    collection["id"] = col
                    collection["text"] = col
                    return collection
                })

                this.setState({collections: collections})
            })
            .catch(function (error) {
                console.log(error)

                // todo: error handling
            })
    }

    render() {
        return (
            <BlankPage
                title="분석해보아요"
                subtitle="" >

                <Box>
                    <form className="form-horizontal">
                        <div className="box-body">
                            <div className="col-sm-2">
                                <Select2
                                    style={{width:'100%'}}
                                    value={this.state.selectedCollection}
                                    data={this.state.collections}
                                    options = {{
                                         placeholder: '컬렉션을 선택해주세요',
                                    }}
                                     onSelect = {
                                        this.handleSelectCollection
                                    }
                                />
                            </div>
                            <div className="col-sm-2">
                                <label>
                                    <input type="text"
                                           value={this.state.dsid}
                                           placeholder="DSID"
                                           onChange={this.handleDsidText}
                                    />
                                </label>
                            </div>
                            <div className="col-sm-2">
                                 <Button
                                    bsStyle="primary"
                                    onClick={this.handleGoBtn}
                                 >
                                 Go
                                </Button>
                            </div>
                        </div>
                    </form>
                </Box>

                <Box
                    title="Collection Info">
                    <ReactJson src={this.state.collectionInfo} />
                </Box>

                 <Box
                    title="bifJson">
                    <ReactJson src={this.state.bifJson} />
                 </Box>

            </BlankPage>
        );
    }
}