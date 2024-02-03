import React from 'react';
import Image from 'next/image';
import removeSvg from '@/assets/images/delete(1).png';
import axios from 'axios';
import api from '@/app/api';

const DeleteBtn = ({ id, onDelete }) => {
  const handleDelete = async () => {

    await api.delete(`/user?id=${id}`);
    onDelete();
    console.log('aqui')
      // Assuming your API endpoint to delete a specific item is '/user/:id'
      // Callback to parent component to refresh the list or perform additional actions


  };

  return (
    <button onClick={handleDelete}>
      <Image src={removeSvg} width={22} />
    </button>
  );
};

export default DeleteBtn;
