"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import OfferCard from "../components/offerCard";
import TableVaga from "../components/tableVaga";
import { getCards } from "../apis/cards";
import ProfileLink from "../components/profileLink/profileLink";
const Homepage = () => {
  
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const loadApi = async () => {
      try {
        const apiData = await getCards();
        setCards(apiData);
        console.log(apiData);
        // Extract the array from the object, assuming apiData.cards is the array
        const cardsArray = apiData.cards || [];
  
        setCards(cardsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    loadApi();
  }, []);


return (
  <div>
        <ProfileLink/>
        <OfferCard/>
  </div>
);
} 

export default Homepage;
