import styles from "./footerComponent.module.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const handlePrivatePolicyPageClick = () => navigate("/datenschutz");
  const handleImprintPageClick = () => navigate("/imprint");

  return (
    <footer className={styles.footer}>
      <a onClick={handlePrivatePolicyPageClick}>Datenschutz</a>
      <a onClick={handleImprintPageClick}>Impressum</a>
    </footer>
  );
}
