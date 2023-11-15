import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../icons';

export const AccessoriesPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const timerId = useRef(0);

  useEffect(() => {
    setIsLoading(true);
    window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="accessories-page App__accessories-page">
        <div className="page-navigation">
          <Link to="/" className="page-navigation__link">
            <img src={ICONS.home_icon} alt="to home page" className="icon" />
          </Link>

          <img src={ICONS.arrow} alt="icon" className="icon icon--right" />

          <p
            className="page-navigation__text"
          >
            Accessories
          </p>
        </div>

        <div className="accessories-page__title">
          <h1 className="title title--h1">Accessories Page</h1>
        </div>

        {isLoading}
        <h2 className="title title--h2 title--empty-page">
          <strong>This page is under development</strong>
        </h2>
      </div>
    </div>
  );
};
