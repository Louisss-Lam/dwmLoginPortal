import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(`User visited: ${location.pathname}`);
    // You can replace this with the actual tracking code
  }, [location]); // This will track whenever the route changes
};

export default usePageTracking;
