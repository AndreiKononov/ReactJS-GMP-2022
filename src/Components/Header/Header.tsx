import { PropsWithChildren } from 'react';
import styles from './Header.module.scss';

export const Header = ({ children }: PropsWithChildren<{}>) => <header className={styles.header}>{children}</header>;
