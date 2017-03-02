import React from 'react'

const email = 'olivia@oliviacarpentier.be'
const defaultContent = 'Contactez-moi'

export default class Contact extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      emailVisible: false
    }
    this.setContent = this.setContent.bind(this)
  }
  setContent(e) {
    e.preventDefault()
    if (window) {
      this.setState({emailVisible: true})
      window.location = "mailto:somebody@example.com";
    }
  }
  render() {
    return (
      <div id="Contact" onClick={this.setContent} onMouseLeave={()=>{this.setState({emailVisible: false})}}>
        <span>@</span>
        {this.state.emailVisible ? <span>olivia@oliviacarpentier.be</span> : <span>Contactez-moi</span>}
      </div>
    )
  }
}
