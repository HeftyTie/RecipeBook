import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirectIfEmpty = (item, loading) => {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateIfEmpty = () => {
      if (!item || Object.keys(item).length === 0) {
        navigate('/not-found');
      }
    };

    if (!loading) {
      navigateIfEmpty();
    }
  }, [item, loading, navigate]); 
};
