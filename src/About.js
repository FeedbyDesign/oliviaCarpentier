import React from 'react'

export default (props) => {
  return (
    <div id="About" className={props.open ? "DrawerContent--open" : "DrawerContent--closed"}>
      <p>Artiste autodidacte et passionnée, j'ai eu l'opportunité de collaborer sur de nombreux projets très enrichissants.</p>
      <p>Ce parcours me permet d'être polyvalente et proactive, toujours prête à relever de nouveaux défis.</p>
      <p>Mes expériences:</p>
      <ul className="colorBright">
        <li><span className="colorWhite">Les médias chez RTL TVI, LN24 et BX1 en habillant les émissions, en créant des jingles et génériques.</span></li>
        <li><span className="colorWhite">La publicité chez "Nozon".</span></li>
        <li><span className="colorWhite">Le long métrage "Brendan and the Secret of Kells", réalisé par Tomm Moore.</span></li>
        <li><span className="colorWhite">Le court métrage avec "Dji vou veu volti", réalisé par Benoit Feroumont.</span></li>
        <li><span className="colorWhite">La série TV en 3D avec "Samsam", réalisée par Tanguy De Kermel, diffusée sur France 5.</span></li>
      </ul>
    </div>
  )
}
