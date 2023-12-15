'use client';

import React, {useState } from "react";
import styles from './modal.module.css'

const Modal = ({ isOpen, onClose }) => {
    return (
      // Botao dentro da modal e conteudo
      <div  className={styles.modalWindow}>
        <div className={styles.titleModal}>
          <h2 >Descreva sua vaga</h2>
        </div>
        <form className={styles.formModal}>
            <div className={styles.nameForm}>
            <label>Nome</label>
            <br></br>
            <input></input>
            </div>
            <div className={styles.descForm}>
              <div className="">

              <label>Descricao</label> {/* quebra de linha pelo tamanho */}
              </div>
              <textarea 
              className={styles.descriptionArea}
              placeholder="Digite aqui"
              >
              </textarea>
            </div>
          </form>

        
      <div className={styles.actionsModal}>
        <>
            <div className={styles.saveModal}>
            <button  >Salvar</button>
            </div>
            <div className={styles.closeModal}>
            <button onClick={onClose}>Fechar</button>
            </div>
        </>
      </div>
        </div>
      
    );
  };
  
  const Button = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      //Botao para acessar model
      < >     
        <button className={styles.button}onClick={handleOpenModal}>Adicionar Vaga</button>
  
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
      </>
    );
  };
  
  export default Button