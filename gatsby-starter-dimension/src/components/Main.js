import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/ceremonyImg.jpg'
import pic02 from '../images/aboutImg.jpg'
import pic03 from '../images/michael-prewett-126900-unsplash-min.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Humanist weddings are, in a nutshell, completely unique. 
            Each ceremony is made specifically for the couple and explores what 
            they want from their celebration so that the couple and their guests 
            have the best day imaginable. 
            Humanism is a stand point that does not believe in God. 
            The focus in both Humanism and in a Humanist wedding 
            is that we should try to be the best people that 
            we can be in the here and now. 
            Humanist weddings are not yet legally binding in England,
            but hopefully will be soon. 
            We can build in the legal element of the marriage 
            through joint ventures or the this can be carried out on another day, 
            enabling the focus to remain on the celebration of the union.
          </p>
          <p>
            Every humanist wedding is unique but often couples ask what 
            the process is and what to expect. It is essential that we 
            meet a few times so that the wedding that I write for you reflects 
            you properly. 
            It is usual to have an initial meeting, 
            a detailed planning meeting and a rehearsal. 
            As well as the ceremony itself, 
            you will recieve a presentation copy of your wedding script and 
            certificate. Since each Humanist wedding is tailored to the couple, 
            the process is very flexible. 
            I generally charge £400 for these services as a guide.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I have lived in Sunderland all my life, 
            apart from brief forays into the 'Toon'. 
            I have a fantastic, supportive family and 
            a little boy who is a source of constant education 
            about the meaning of love and happiness (and stickiness). 
            I am happy to travel to locations that fit with your dream wedding 
            as far as the Lake District and North Yorkshire. 
            My passions include attempting to bake, 
            reading graphic novels and horse riding. 
            I'd love to hear about your inspirations as a couple
            and learn how we can use them to build a unique wedding ceremony for you.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Some couples like to include within their ceremony 
            a gesture that symbolises their relationship. 
            For example, traditional handfasting ceremonies celebrate two 
            individuals becoming one and can be tailored to reflect the couples 
            by asking different groups of family members to come and perform 
            the binding. Sand blending can enable extended families with children 
            to include everyone and blend them together as one big new family. 
            Outdoor ceremonies lend themselves to the blanket ceremony or 
            flower ceremonies. Please ask how you could incoprate a symbolic 
            gesture into your big day.
          </p>
          <p>
            A wedding is not only about two people but also about 
            the joining of two or more families. 
            Invite them to participate and share the joy of the day. 
            Children can be a wealth of entertainment, particularly if 
            the thought of your big day is stressful, so call forth our 
            youth and utilise their charm. Additionally, there is no greater 
            honour than to be asked to read or perform at a 
            loved one's ceremony. With a humanist wedding you can give that 
            honour to those you love to the extent that you wish.
          </p>
          <p>
            Humanism is all about making ethical choices, 
            so why not build that into your wedding and shout proudly that 
            you wish the best for mankind and our planet? Do this through your 
            venue choice, your wedding favours, 
            donations to charities and the inclusion of ethical readings.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
