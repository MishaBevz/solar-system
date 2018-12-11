import React from 'react'
import './style.scss'


export default class Orbits2d extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Orbits',
            sun: {engName: 'sun', rusName: 'солнце', className: 'sun'},
            planets:[ 
                {engName: 'neptune', rusName: 'нептун', className: 'neptune'},
                {engName: 'uranus', rusName: 'уран', className: 'uranus'},
                {engName: 'saturn', rusName: 'сатурн', className: 'saturn'},
                {engName: 'jupiter', rusName: 'юпитер', className: 'jupiter'},
                {engName: 'asteroid belt', rusName: 'пояс астероидов', className: 'asteroid-belt'},
                {engName: 'mars', rusName: 'марс', className: 'mars'},
                {engName: 'earth', rusName: 'земля', className: 'earth'}, 
                {engName: 'venus', rusName: 'венера', className: 'venus'}, 
                {engName: 'mercury', rusName: 'меркурий', className: 'mercury'},   
                {engName: 'sun', rusName: 'солнце', className: 'sun'},             
            ],
        }
    }
    render() {
        return(
            <div className="orbits2d">
                {this.state.planets.map((object, index) => {
                    return (
                        <div key={index} className={object.className}><div className={`${object.className}__description`}></div></div>
                    )                             
                })}
            </div>
        )
    }
}