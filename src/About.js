import React from 'react'

export default (props) => {
  return (
    <div id="About" className={props.open ? "DrawerContent--open" : "DrawerContent--closed"}>
      <p>Diplomée de la Haute Ecole Albert Jacquart de Namur en 2005, j'ai gagné en expérience durant ces 12 années en explorant de nombreux domaines de production:</p>
      <ul>
        <li>La série TV en 3D avec "Samsam", réalisée par Tanguy De Kermel, diffusée sur France 5.</li>
        <li>Le court métrage avec "Dji vou veu volti", réalisé par Benoit Feroumont.</li>
        <li>Le long métrage "Brendan and the Secret of Kells", réalisé par Tomm Moore.</li>
        <li>La publicité chez "Nozon".</li>
        <li>La TV chez RTL TVI en participant régulièrement aux infographies pour le journal comme "Le Grand Baromètre Politique", des jingles pub, les jingles des fêtes de fin d'année, des émissions telles que "Tout s'explique", des génériques comme "Place Royale". J'ai été également en charge de l'habillage des plateaux de "Belgium's Got Talent" et du "Televie".</li>
      </ul>
      <p>Actuellement, je travaille également comme freelance pour la création de vidéos d'entreprises, promotionnelles, de publicités, de jingles, ...</p>
    </div>
  )
}
