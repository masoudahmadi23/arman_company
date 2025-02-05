"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} style={styles.scrollToTopBtn}>
        ↑
      </button>
    )
  );
}

const styles = {
  scrollToTopBtn: {
    position: "fixed",
    bottom: "30px",
    left: "30px",
    width: "40px",
    height: "40px",
    fontSize: "25px",
    fontWeight: 900,
    borderRadius: "50%",
    backgroundColor: "#ffd700",
    color: "#333",
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 999,
  },
};
