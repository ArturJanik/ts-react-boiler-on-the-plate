import { Menu } from './Menu/Menu';
import styles from './Header.module.css';

export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <div>I'm header</div>
            <Menu />
        </header>
    )
};
