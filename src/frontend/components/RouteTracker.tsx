/**
 * RouteTracker — fires a Firebase Analytics page_view event on every
 * route change. Renders nothing; pure side-effect component.
 *
 * Place this inside <BrowserRouter> so that useLocation() works.
 * The logAnalyticsEvent() call is a safe no-op in development.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logAnalyticsEvent } from '../../backend/firebase/analytics';

export const RouteTracker = (): null => {
  const location = useLocation();

  useEffect(() => {
    logAnalyticsEvent('page_view', {
      page_path: location.pathname,
    });
  }, [location.pathname]);

  return null;
};
