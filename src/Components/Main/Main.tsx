import { PropsWithChildren } from 'react';
import './Main.scss';

export function Main({ children }: PropsWithChildren<{}>) {
  return <div className="main">{children}</div>;
}
