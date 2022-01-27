import styles from "../../../styles/Home.module.scss";

const Footer = () => {
    return (<footer className={styles.footer}>
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
        >
            &copy; {new Date().getFullYear()}
        </a>
    </footer>)
}

export default Footer;