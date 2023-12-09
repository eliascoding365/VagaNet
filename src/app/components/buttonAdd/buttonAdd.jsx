'use client';
import styles from "./buttonAdd.module.css";
import modal from "../modal";
import React from 'react';

// o botao esta sendo acessado da modal
const ButtonAdd = () => {
  return (
    <div >
      {modal()} 
    </div>     

  );
};

export default ButtonAdd;
