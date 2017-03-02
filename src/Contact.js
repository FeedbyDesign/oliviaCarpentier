import React from 'react'

const email = 'olivia@oliviacarpentier.be'

export default class Contact extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      emailVisible: false
    }
    this.setContent = this.setContent.bind(this)
  }
  componentDidMount() {
    if (window && window.innerWidth < 501) {
      this.setState({emailVisible: true})
    }
  }
  setContent(e) {
    e.preventDefault()
    if (window) {
      this.setState({emailVisible: true})
      window.location = "mailto:" + email
    }
  }
  render() {
    return (
      <div id="Contact" onClick={this.setContent} onMouseLeave={()=>{this.setState({emailVisible: false})}}>
        <span>@</span>
        {this.state.emailVisible ? <span>{email}</span> : <span>Contactez-moi</span>}
      </div>
    )
  }
}
