import axios from "axios";

const getCards = async () => {
  const getCardsOptions = [{
    method: "GET",
    
    url: "http://localhost:8000/user",
  }];
  const getCardResponse = await axios.request(getCardsOptions);
  let cardData = getCardResponse.data
  return cardData
}
export {getCards}