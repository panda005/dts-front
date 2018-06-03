import React from 'react'
import {Nav, NavMenu, NavItem} from '../components/Nav'
import HomePage from './Home'
import Analyze from '../components/Analyze/Analyze'
import Debug from '../components/Debug/Debug'

export default class PageNav extends React.Component {
    render() {
        return (
            <Nav>
                <NavMenu header='Menu'>
                    <NavItem fa='fa-send' link='/analyze'>Analyze</NavItem>
                    <NavItem fa='fa-send' link='/debug'>Debug</NavItem>
                </NavMenu>
            </Nav>
        );
    }
}

export const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/analyze',
        component: Analyze
    },
    {
        path: '/debug',
        component: Debug
    }
];
