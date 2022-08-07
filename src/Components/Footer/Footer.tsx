import { PropsWithChildren } from 'react';
import styles from './Footer.module.scss';

const Footer = ({ children }: PropsWithChildren<{}>) => <footer className={styles.footer}>{children}</footer>;

export default Footer;
