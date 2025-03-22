import styles from './Perfil.module.css' // Importa o arquivo de estilos do componente

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Avatar no GitHub" />
                <h1 className={styles.name}>
                    {nomeUsuario}
                </h1>
            </div>
        </header>
    )
}

export default Perfil // Exporta o componente para ser utilizado em outros arquivos

