'use client';
import logoMock from "@/assets/images/microsoft.jpg";
import Image from "next/image";
import styles from "./offerCard.module.css";
import React, { useState, useEffect } from "react";
import { getCards } from "@/app/apis/cards";


const OfferCard = ({ company, description, data }) => {


  return (
    


    <div className={styles.grid}>
      <div className={styles.companyLogo}>
        <Image src={logoMock} alt="Company" width={150} height={150} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{company}</h1>
        <h2 className={styles.description}>{description}</h2>

      </div>
      <div className={styles.button}>
        <button>Saiba Mais</button>
      </div>
    </div>
  );
};

export default OfferCard;
