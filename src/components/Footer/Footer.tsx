import styles from './Footer.module.scss';

export const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div>Left footer element</div>
            <div>Right footer element</div>
        </footer>
    )
};
