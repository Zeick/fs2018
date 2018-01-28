import React from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ value, text, unit }) => <tr><td>{text}</td><td>{value} {unit}</td></tr>
const Statistics = ({ state }) => (
    <div>
        <h2>Tilastotietoja</h2>
        <table border="1">
            <tbody>
            <Statistic value={state.hyva} text="Hyvä"/>
            <Statistic value={state.neutraali} text="Neutraali"/>
            <Statistic value={state.huono} text="Huono"/>
            <Statistic value={state.keskiarvo} text="Keskiarvo"/>
            <Statistic value={state.osuusHyvia} text="Positiivisia" unit="%"/>
            </tbody>
        </table>
    </div>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            hyva: 0,
            neutraali : 0,
            huono: 0,
            keskiarvo: 0,
            osuusHyvia: 0
        }
    }

    /* Voi lisätä kerralla esimerkiksi 2 hyvää, 5 neutraalia ja 8 huonoa arviota kutsulla lisaaArvio(2,5,8) */
    lisaaArvio = (yksiHyva, yksiNeutraali, yksiHuono) => {
        return () => {
            this.setState({
                hyva: this.state.hyva + yksiHyva,
                neutraali: this.state.neutraali + yksiNeutraali,
                huono: this.state.huono + yksiHuono,
                keskiarvo: ((this.state.hyva + yksiHyva - this.state.huono - yksiHuono)/(this.state.hyva + this.state.neutraali + this.state.huono + yksiHyva + yksiNeutraali + yksiHuono)).toPrecision(2),
                osuusHyvia: (100*(this.state.hyva + yksiHyva)/(this.state.hyva + this.state.neutraali + this.state.huono + yksiHyva + yksiNeutraali + yksiHuono)).toPrecision(3)
            })
        }
    }

/*    lisaaHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1,
            keskiarvo: ((1 + this.state.hyva - this.state.huono)/(1 + this.state.hyva + this.state.neutraali + this.state.huono)).toPrecision(2),
            osuusHyvia: (100*(1+this.state.hyva)/(this.state.hyva + this.state.neutraali + this.state.huono + 1)).toPrecision(3)
        })
    }
    
    lisaaNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1,
            keskiarvo: ((this.state.hyva - this.state.huono)/(1 + this.state.hyva + this.state.neutraali + this.state.huono)).toPrecision(2),
            osuusHyvia: (100*(this.state.hyva)/(this.state.hyva + this.state.neutraali + this.state.huono + 1)).toPrecision(3)
        })
    }
    
    lisaaHuono = () => {
        this.setState({
            huono: this.state.huono + 1,
            keskiarvo: ((this.state.hyva - this.state.huono - 1)/(1 + this.state.hyva + this.state.neutraali + this.state.huono)).toPrecision(2),
            osuusHyvia: (100*(this.state.hyva)/(this.state.hyva + this.state.neutraali + this.state.huono + 1)).toPrecision(3)
        })
    } */

    render(){
        const tilastot = () => {
            if(this.state.huono + this.state.neutraali + this.state.hyva === 0){
                return(
                    <div>
                        <b>Palautetta ei ole vielä annettu.</b>
                    </div>
                )
            }
            return(
                <div>
                    <Statistics state={this.state}/>
                </div>
            )
        }
    return(
        <div>
            <h1>Anna asiakaspalautetta Unicafélle!</h1>
            <div>
                <Button handleClick={this.lisaaArvio(1,0,0)} text="Hyvä :)"/>
                <Button handleClick={this.lisaaArvio(0,1,0)} text="Neutraali :|"/>
                <Button handleClick={this.lisaaArvio(0,0,1)} text="Huono :("/>
            </div>
            <div>{tilastot()}</div>
        </div>
    )}
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

