import React from 'react';
import PropTypes from 'prop-types';

export default class Document extends React.Component {
    static propTypes = {
        fieldName: PropTypes.string.isRequired,
        fieldValue: PropTypes.string,
    }

    static defaultProps = {
        fieldValue: ''
    }

    render() {
        return (
            <div className="document">
            <p>{this.fieldName} : {this.fieldValue}</p>
            </div>
        )
    }
};