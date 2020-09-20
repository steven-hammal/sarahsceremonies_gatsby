import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-heart"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Sarah's Ceremonies</h1>
                <h3>Your wedding, your way</h3>
                <p>
                   My name is Sarah Hammal and I am a trained Humanist UK wedding celebrant. 
                   My work can vary from very traditional wedding ceremonies, to the weird and wonderful. 
                   I love helping a couple craft their experiences into a highly personal ceremony that wows their guests.                   
                </p>
                <ul className="icons">
                    <li>
                    <a href="https://www.facebook.com/pages/category/Product-Service/Sarahs-Ceremonies-624155291254686/" className="icon fa-facebook">
                        <span className="label">Facebook</span>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/sarahshumanistceremonies/" className="icon fa-instagram">
                        <span className="label">Instagram</span>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#!" onClick={() => {props.onOpenArticle('humanistWeddings')}}>Cermonies</a></li>
                <li><a href="#!" onClick={() => {props.onOpenArticle('aboutMe')}}>Sarah</a></li>
                <li><a href="#!" onClick={() => {props.onOpenArticle('unique')}}>Make It Yours</a></li>
                <li><a href="#!" onClick={() => {props.onOpenArticle('testimonials')}}>Testimonials</a></li>
                <li><a href="#!" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
