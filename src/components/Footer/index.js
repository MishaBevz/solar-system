import React from 'react'
import './style.scss'
import githubLogo from './GitHub-Mark-32px.png'
import githubLogoLight from './GitHub-Mark-Light-32px.png'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footer: {
                githubLogo: '../../img/github-logo.png',
                copyright: 'Сopyright © 2018',
            }
        }
    }
    render() {
        return(
            <footer className="footer">
                <a className="footer__link-github-author" href="https://github.com/MishaBevz/solar-system"><img src={githubLogo}></img><img src={githubLogoLight}></img></a>
                <span className="footer__copyright">{this.state.footer.copyright}</span>
            </footer>
        )
    }
}