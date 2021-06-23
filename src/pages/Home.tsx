import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire suas duvidas de audiência em tempo-real.</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                </div>
            </main>
        </div>
    )
}