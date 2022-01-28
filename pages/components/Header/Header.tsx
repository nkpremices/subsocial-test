import styles from './header.module.scss';
import Image from "next/image";
import SubIdLogo from '../../../public/id-logo.png'
import MenuLogo from '../../../public/menu-bars.png'

const Header = () => {
    return (<div className={styles.nav}>
        <Image src={SubIdLogo} alt="logo" width={55} height={55} className={styles.navLogo} />
        <span>&nbsp;</span>
        <button type="button" className={styles.button}>
           <Image src={MenuLogo} alt="menu" width={45} height={45}/>
        </button>
    </div>)
}

export default Header;