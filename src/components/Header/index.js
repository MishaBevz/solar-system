import React from 'react'
import { Nav, NavLink, Route } from 'react-router-dom'
import './style.scss'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: { 
                logo: {
                    text: 'Solar system',
                },
                menu: {
                    list: {
                        title: 'Planets',
                        hover:[
                            {engName: 'mercury', rusName: 'меркурий'}, 
                            {engName: 'venus', rusName: 'венера'}, 
                            {engName: 'earth', rusName: 'земля'}, 
                            {engName: 'mars', rusName: 'марс'},
                            {engName: 'asteroid belt', rusName: 'пояс астероидов'},
                            {engName: 'jupiter', rusName: 'юпитер'},
                            {engName: 'saturn', rusName: 'сатурн'},
                            {engName: 'uranus', rusName: 'уран'},
                            {engName: 'neptune', rusName: 'нептун'},
                        ]},
                    },

                }
            }
        }
    render() {
        return(
            <header className="header">
                <div className="header-logo">
                    <span className="header-logo__first-text">S</span><div className="uranus"></div><div className="header-logo__second-text">lar system</div> 
                </div>
                <div className="header-menu">
                    <NavLink className="header-menu__solar-system" activeClassName="active" to="/" exact>2d</NavLink>
                    <NavLink className="header-menu__solar-system" activeClassName="active" to="/3d">3d</NavLink>     
                </div>                
            </header>
        )
    }
}