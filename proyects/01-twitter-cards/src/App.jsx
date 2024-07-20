import './assets/css/app.css'
import {TwCard} from './twCard'
export function App() {
    return (
        <>
            <section className="divCard">
                <TwCard user="Miguel Ángel Durán" username="midudev"/>
                <TwCard user="Pablo Hernández" username="pheralb"/>
                <TwCard user="Elon Musk" username="elonmusk"/>
                <TwCard user="Vanderhart" username="vxnder"/>
            </section>
        </>
    )
}