// 'use client';

import React, { useState } from "react";
import styles from './modal.module.css';
import api from '@/app/api';

// Modal component
const Modal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // Handle input changes in the form
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await api.post('/user', {
        name: formData.name,
        description: formData.description,
      });

      if (response) {
        window.location.reload();
        <strong>Sucesso</strong>
        console.log('Dados enviados com sucesso');
        // Add any additional logic here after successful submission, if needed
      } else {
        console.log('Erro ao enviar os dados');
      }
    } catch (error) {
      console.error('Erro ao enviar dados para a API:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.modalWindow}>
      {/* ... (existing code) */}
        <h1 className={styles.titleModal}>Descreva sua vaga</h1>
      <form className={styles.formModal} onSubmit={handleSubmit}>
        <div className={styles.nameForm}>
          <label htmlFor="name">Nome</label>
          <br />
          <input
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.descForm}>
          <div>
            <label htmlFor="description">Descrição</label>
          </div>
          <textarea
            id="description"
            className={styles.descriptionArea}
            placeholder="Digite aqui"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
      </form>

      <div className={styles.actionsModal}>
        <>
          <div className={styles.saveModal}>
            <button onClick={handleSubmit} onSubmit={handleSubmit}>Salvar</button>
          </div>
          <div className={styles.closeModal}>
            <button onClick={onClose}>Fechar</button>
          </div>
        </>
      </div>
    </div>
  );
};

// Button component
const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    // Button to open modal
    <>
      <button className={styles.button} onClick={handleOpenModal}>Adicionar Vaga</button>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </>
  );
};

export default Button;
