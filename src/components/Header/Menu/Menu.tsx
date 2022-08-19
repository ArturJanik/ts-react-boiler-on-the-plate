import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
    return (
        <div className={styles.menu}>
            <Link to="/">Home</Link> |{" "}
            <Link to="/listing">Products</Link>
        </div>
    )
};
