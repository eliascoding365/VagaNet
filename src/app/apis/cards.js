import axios from "axios";

const getCards = async () => {
  const getCardsOptions = {
    method: "get",
    url: "http://127.0.0.1:8000/user",
  };
  const getCardResponse = await axios.request(getCardsOptions);
  let cardData = getCardResponse.data
  return cardData
}
export { getCards }