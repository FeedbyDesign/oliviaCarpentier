import React from 'react'

import olivia from './img/olivia.webp'

export default () => {
  return (
    <div id="Header">
      <img src={olivia} alt="Olivia Carpentier" />
      <div>
        <h1>Olivia Carpentier</h1>
        <h2>Infographiste 3D & Motion Design</h2>
        {window ? <p className="Header__email">olivia@oliviacarpentier.be</p> : null}
        <a className="fa fa-linkedin" href="https://www.linkedin.com/in/olivia-carpentier-2913258/" target="_blank"></a>
        <a href="#"> CV</a>
      </div>
    </div>
  )
}
