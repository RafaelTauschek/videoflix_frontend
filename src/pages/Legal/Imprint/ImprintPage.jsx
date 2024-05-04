import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Imprint.module.css";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ImpressumPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.imprintPage}>
        <div className={styles.CardContainer}>
          <div className={styles.cardHeaderLine}>
            <div
              className={styles.arrowBackButton}
              onClick={() => navigate(-1)}
            >
              <IconButton aria-label="delete" size="large">
                <ArrowBackIosIcon
                  fontSize="inherit"
                  className={styles.arrowBackButton}
                />
              </IconButton>
              <div />
            </div>
            <h1 className={styles.flex1}>Impressum</h1>
          </div>
          <div className={styles.ImprintContainer}>
            <p>
              <strong>Firmenname:</strong> Beispiel GmbH
            </p>
            <p>
              <strong>Adresse:</strong> Musterstraße 1, 12345 Musterstadt
            </p>
            <p>
              <strong>Geschäftsführer:</strong> Max Mustermann
            </p>
            <div>
              <strong>Kontakt:</strong>
              <ul>
                <li>Telefon: 01234 567890</li>
                <li>Email: info@beispielgmbh.de</li>
              </ul>
            </div>

            <p>
              <strong>Handelsregister:</strong> Amtsgericht Musterstadt, HRB
              12345
            </p>
            <p>
              <strong>Umsatzsteuer-ID:</strong> DE123456789 AT123456789
            </p>
            <p>
              <strong>Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV:</strong>{" "}
              Max Mustermann
            </p>

            <h2>Haftungsausschluss</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>
            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
