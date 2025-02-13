import React from 'react';
import usePageTracking from './usePageTracking';

const PageTrackingWrapper = ({ children }) => {
  usePageTracking(); // This will track page visits

  return <>{children}</>; // Render the app's children components
};

export default PageTrackingWrapper;
