import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// function CapsLock(props){
//     const textoInserido = props.children;
//     const textoModificado = textoInserido.toUpperCase();
//     return (
//         <div>
//             {textoModificado}<br/>
//         </div>
//         )
    
// }

function Home(){
    return (
        <div className={styles.conteiner}>

            <Head>
                <title>Jefferson</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Bem vindo ao meu <a href="#">Portifólio</a><br/>
                    <code className={styles.code}>Versão 1.0</code>
                </h1>

                <p className={styles.description}>
                    Conheça-me :)
                </p>

                <div className={styles.grid}>
                    <Link href="/habilidades">
                        <a className={styles.card}>
                            <h3>Habilidades</h3>
                            <p>Página em desenvolvimento...</p>
                        </a>
                    </Link>

                    <Link href="/projetos">
                        <a className={styles.card}>
                            <h3>Projetos</h3>
                            <p>Página em desenvolvimento...</p>
                        </a>
                    </Link>

                    <Link href="/sobre">
                        <a className={styles.card}>
                            <h3>Sobre</h3>
                            <p>Página em desenvolvimento...</p>
                        </a>
                    </Link>

                    <Link href="/contato">
                        <a className={styles.card}>
                            <h3>Contato</h3>
                            <p>Página em desenvolvimento...</p>
                        </a>
                    </Link>                    
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Developed by <b>: Jefferson Barros Vieira</b>.
                    {/* <img className={styles.logo} src="/vercel.svg" alt="Vercel logo" /> */}
                    
                </a>
            </footer>

        </div>
        )
}

export default Home