import React from "react";
import PropTypes from 'prop-types';

export default class BlankPage extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
    };

    static defaultProps = {
        subtitle: ''
    };

    render() {
        return (<div className="content-wrapper">
            <section className="content-header">
                <h1>{this.props.title}
                    <small>{this.props.subtitle}</small>
                </h1>
            </section>

            <section className="content">
                {this.props.children}
            </section>
        </div>);
    }
}