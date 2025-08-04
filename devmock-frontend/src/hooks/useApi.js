import { useState, useCallback } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

export function useApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(async (endpoint, options = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err.message || 'Network error occurred';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { makeRequest, isLoading, error };
}