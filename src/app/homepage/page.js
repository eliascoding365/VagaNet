"use client"
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { getCards } from "@/app/apis/cards";
import OfferCard from "../components/offerCard";

const Homepage = () => {
    const [ cards , setCards] = useState([{
      id: '',
      name: '',
    }]);
  
    const [error , setError ] = useState([null])
    
    useEffect(() => {
      const loadAPI = async () => {
        try {
          const apiData = await getCards();
          setCards(apiData);
          console.log(getCards)
        } catch (error) {
          setError(error.message);
        }
      };
  
      loadAPI();
    }, []);
    return (
      <div>
        <OfferCard/>
      </div>
    )
  }

  


export default Homepage;