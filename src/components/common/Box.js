import React from "react";
import PropTypes from 'prop-types';

export default class BlankPage extends React.Component {
    static propTypes = {
        children: PropTypes.string.isRequired,
    };

    static defaultProps = {
        subtitle: ''
    };

    render() {
        return (
            <div className="box box-primary">
                <h3 className="box-title">{this.props.title}</h3>
                {this.props.children}
            </div>
        );
    }
}