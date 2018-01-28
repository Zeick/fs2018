import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    const kaikki = props.osat
    return (
        <div>
            <Osa osa={kaikki[0].nimi} maara={kaikki[0].tehtavia}/>
            <Osa osa={kaikki[1].nimi} maara={kaikki[1].tehtavia}/>
            <Osa osa={kaikki[2].nimi} maara={kaikki[2].tehtavia}/>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.maara}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    const osat = props.osat
    return (
        <div>
            <p>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} tehtävää</p>
        </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }    
    return (
    <div>
        <Otsikko kurssi = {kurssi.nimi}/>
        <Sisalto osat = {kurssi.osat}/>
        <Yhteensa osat = {kurssi.osat}/>
    </div>
)}

ReactDOM.render(<App />, document.getElementById('root'))