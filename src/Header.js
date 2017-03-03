import React from 'react'

import olivia from './img/olivia.webp'

const email = 'olivia@oliviacarpentier.be'

export default () => {
  return (
    <div id="Header">
      <img src={olivia} alt="Olivia Carpentier" />
      <div>
        <h1>Olivia Carpentier</h1>
        <h2>Infographiste 3D & Motion Design</h2>
        {window ? <a className="Header__email" href={"mailto:" + email}>{email}</a> : null}
        <div className="Header__links">
          <a href="https://www.linkedin.com/in/olivia-carpentier-2913258/" target="_blank">in</a>
          <a href="#" target="_blank">cv</a>
        </div>
      </div>
    </div>
  )
}
