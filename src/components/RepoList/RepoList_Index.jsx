import { useState, useEffect } from 'react';

import styles from './RepoList.module.css';

const RepoList = ({ nomeUsuario }) => {

    const [repos, setRepos] = useState([]);
    const [Carregando, setCarregando] = useState(true);

    useEffect(() => {
        setCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)  // fetch é uma função nativa do JavaScript que faz requisições HTTP
            .then(res => res.json())                                   // .then é uma função que é executada quando a requisição é finalizada
            .then(resJson => {                                         // res.json() é uma função que converte o conteúdo da resposta em JSON
                setTimeout(() => {
                    setCarregando(false);
                    setRepos(resJson);                                      // setRepos é uma função que atualiza o estado repos
                }, 2000);
            })
    }, []);


    return (
        <div className="container">
            {Carregando ? (
                <h1>Carregando...</h1>
            ) : (
            <ul className={styles.list}>
                {/* {repos.map(repositorio => ( */}
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> 
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                        <b>Linguagem:</b>
                        {language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Github</a>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default RepoList;