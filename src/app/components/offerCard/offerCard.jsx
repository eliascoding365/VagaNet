'use client';
import logoMock from "@/assets/images/microsoft.jpg";
import Image from "next/image";
import styles from "./offerCard.module.css";
import React, { useState, useEffect } from "react";
import api from '@/app/api';
import DeleteBtn from "../deleteBtn/deleteBtn";

const OfferCard = ({}) => {
  const [vaga, setVaga] = useState([]);
  const [data, setData] = useState({
    id: '',
    name: '',
    description: '',
  });

  const fetchVaga = async () => {
    try {
      const response = await api.get('/user');
      // Verifica se response.data é um array antes de definir o estado
      if (Array.isArray(response.data.data)) {
        setVaga(response.data.data);
      } else {
        console.error('A resposta da API não é um array:', response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  const getData = () => {
    setData({
      ...data,
    });
  };

  useEffect(() => {
    fetchVaga();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/user/${id}`);
      fetchVaga();
    } catch (error) {
      console.error("Error deleting offer:", error);
    }
  };

  const renderVagaList = () => {
    return (
    <div className={styles.container}>

      <div className={styles.cardDirection} >
        {vaga.map((item) => (
            <div className={styles.grid} key={item.id}>
              <div className={styles.headButton}>
                <div className={styles.delBtn}>
                <DeleteBtn id={item.id} onDelete={fetchVaga} />
                </div>
                <div className={styles.companyLogo}>
                  <Image src={logoMock} alt="Company" width={150} height={150} />
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.title}>Title: {item.name}</h3>
                <h1 className={styles.description}>Id: {item.id}</h1>
                <p>Description: {item.description}</p>
              </div>
              <div className={styles.button}>
                <button>Saiba Mais</button>
              </div>
            </div>
        ))}
      </div>
    </div>
    
    );
  };

  return (
    < >
      {renderVagaList()}
    </>
  );
}

export default OfferCard;
