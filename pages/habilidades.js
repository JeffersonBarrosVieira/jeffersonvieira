import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Habilidades() {
    return(
        <div className={styles.conteiner}>
            <h1>Habilidades</h1><br/>
            <h3>Página em desenvolvimento...</h3>
            
            <Link href="/">
                <a>Home-Page</a>
            </Link>
        </div>
    )
}

export default Habilidades