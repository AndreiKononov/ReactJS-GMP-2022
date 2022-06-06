import { PropsWithChildren } from 'react';
import './Footer.scss';

export const Footer = ({ children }: PropsWithChildren<{}>) => <footer className="footer">{children}</footer>;
