import { Link } from 'react-router-dom';
// import './PageNotFound.scss';

export const PageNotFound = () => (
  <div className="page-not-found">
    <h1 className="title">Page not found</h1>
    <p>
      <Link className="link" to="/">
        Go to the home page
      </Link>
    </p>
  </div>
);
