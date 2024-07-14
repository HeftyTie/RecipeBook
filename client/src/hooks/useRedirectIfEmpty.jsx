import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirectIfEmpty = (item) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!item || Object.keys(item).length === 0) {
      navigate("/not-found");
    }
  }, [item, navigate]);
};
