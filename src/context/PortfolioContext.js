"use client";
import { createContext, useContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolio`
        );
        if (!res.ok) {
          throw new Error("Error fetching portfolio");
        }
        const data = await res.json();
        setPortfolio(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolio();
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
