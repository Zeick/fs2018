import React from 'react'

const Otsikko = ({ nimi }) => {
    return(
        <div>
            <h2>{ nimi }</h2>
        </div>
    )
}

const Sisalto = ({ osat }) => {
    return(
        <div>
            {
                osat.map((eras) => {
                    return(
                        <Osa key={eras.id} osa={eras.nimi} maara={eras.tehtavia}/>
            )})}
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

const Yhteensa = ({osat}) => {
    let summa = 0
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const pisteet = []
    return (
        <div>
            <div>
            {
                osat.forEach((osa) => {
                    pisteet.push(osa.tehtavia)
                })
            }
            </div>
            <p>Tehtäviä on yhteensä {pisteet.reduce(reducer)} kpl</p>
        </div>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko nimi = {kurssi.nimi}/>
            <Sisalto osat = {kurssi.osat}/>
            <Yhteensa osat = {kurssi.osat}/>
        </div>
    )    
}

export default Kurssi