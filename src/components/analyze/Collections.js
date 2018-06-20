import React from "react";
import Select2 from 'react-select2-wrapper';
import { connect } from 'react-redux';

class Collections extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className="col-sm-2">
                <Select2
                    style={{width:'100%'}}
                    // value={}

                    options = {{
                        placeholder: '컬렉션을 선택해주세요',
                    }}
                    onSelect = {
                        this.props.onSelectCollection()
                    }
                />
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSelectCollection: (coll) => dispatch(setCollection(coll))
    }
};

Collections = connect(undefined, mapDispatchToProps)(Collections);
export default Collections;