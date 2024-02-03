'use client';

import api from '@/app/api'
import React, {useState, useEffect } from "react";
import styles from './tableVaga.module.css'

const TableVaga = () => {
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
      /*  console.log(response.data.data)  */
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

  const renderVagaList = () => {
    
    return (
      <div className={styles.positionCard}>
          {vaga.map((item) => (
            <div key={item.id} className={styles.divId}>
              <p>Id:{item.id}</p>
              <p>Name:{item.name}</p>
              <p>Description:{item.description}</p>
            </div>
          ))}
      </div>
    );
  };


  return (
        <>
        {renderVagaList()}
        </>

)
    
}
export default TableVaga