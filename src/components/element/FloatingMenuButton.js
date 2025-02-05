"use client";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingMenuButton.module.css";
import Link from "next/link";

export default function FloatingMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.floatingContainer}>
      <div className={styles.floatingButton} onClick={toggleMenu}>
        +
      </div>
      {isOpen && (
        <div className={styles.elementContainer}>
          <Link href="tel:+1234567890" className={styles.floatElement}>
            <FaPhone size={24} />
          </Link>
          <Link
            href="mailto:example@example.com"
            className={styles.floatElement}
          >
            <FaEnvelope size={24} />
          </Link>
          <Link
            href="https://wa.me/yourwhatsapplink"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.floatElement}
          >
            <FaWhatsapp size={24} />
          </Link>
        </div>
      )}
    </div>
  );
}
