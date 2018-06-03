import React from 'react';
import PropTypes from 'prop-types';
import defaultUserImg from '../user.png';
import axios from "axios/index";

export class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="/" className="logo">
                <span className="logo-lg"><b>{this.props.head}</b>{this.props.tail}</span>
                <span className="logo-mini"><b>{(this.props.head || ' ')[0]}</b>{(this.props.tail || ' ')[0]}</span>
            </a>
        );
    }
}

export class HeaderUserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userImageUrl: defaultUserImg, userName: 'unknown'};
    }

    render() {
        return (
            <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <img src={this.state.userImageUrl} className="user-image" alt="User Image"/>
                        <span className="hidden-xs">{this.state.userName}</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="user-header">
                            <img src={this.state.userImageUrl} className="img-circle" alt="User Image"/>
                            <p>
                                <span>{this.state.userName}</span>
                            </p>
                        </li>
                        <li className="user-footer">
                            <div className="pull-right">
                                <form action="/logout" method="POST">
                                    <button className="btn btn-default btn-flat">Logout</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default class Header extends React.Component {

    static propTypes = {
        header: PropTypes.element.isRequired
    };

    constructor(props) {
        super(props);
    }

    pushMenu() {
        var body = document.body;
        if (body.clientWidth > 768) {
            if (body.className.indexOf('sidebar-collapse') === -1) {
                body.className += ' sidebar-collapse';
            } else {
                body.className = body.className.replace(' sidebar-collapse', '');
            }
        } else {
            if (body.className.indexOf('sidebar-open') === -1) {
                body.className += ' sidebar-open';
            } else {
                body.className = body.className.replace(' sidebar-open', '');
            }
        }
    }

    render() {
        return (
            <header className="main-header">
                {this.props.header}
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button"
                       onClick={this.pushMenu}>
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        {this.props.children}
                    </div>
                </nav>
            </header>
        );
    }
}
