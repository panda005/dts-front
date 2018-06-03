 import React from 'react';
 import PropTypes from 'prop-types';
 import {Link} from 'react-router-dom';

 export class NavItem extends React.Component {
     render() {
         return (
             <li>
                 <Link to={this.props.link}>
                     {this.props.fa && <i className={"fa " + this.props.fa}/>}&nbsp;
                     <span>{this.props.children}</span>
                 </Link>
             </li>
         );
     }
 }

 export class TreeItem extends React.Component {
     static propsTypes = {
         name: PropTypes.string,
         fa: PropTypes.string,
         active: PropTypes.bool
     };

     static defaultProps = {
         name: "-",
         fa: "fa-user",
         active: false
     };

     constructor(props) {
         super(props);
         this.state = {active: props.active};

         this.handleToggle = this.handleToggle.bind(this);
     }

     handleToggle() {
         this.setState({active: !this.state.active})
         return false;
     }

     render() {
         return (
             <li className={"treeview " + (this.state.active ? "active" : "")}>
                 <a href="#" onClick={this.handleToggle}>
                     {this.props.fa && <i className={"fa " + this.props.fa}/>}&nbsp;
                     <span>{this.props.name}</span>
                     <i className="fa fa-angle-left pull-right"></i>
                 </a>
                 <ul className="treeview-menu">
                     {this.props.children}
                 </ul>
             </li>
         );
     }
 }

 export class NavMenu extends React.Component {
     render() {
         return (
             <ul className="sidebar-menu">
                 {this.props.header && <li className="header">{this.props.header}</li>}
                 {this.props.children}
             </ul>
         );
     }
 }

 export class Nav extends React.Component {
     render() {
         return (
             <aside className="main-sidebar">
                 <section className="sidebar">
                     {this.props.children}
                 </section>
             </aside>
         );
     }
 }

