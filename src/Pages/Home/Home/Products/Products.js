import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';



// const products = [
//   {
//     "name": "Dhaka to Colombo",
//     "img": "https://i.ibb.co/zmrt6xm/dhaka-colombo-nepal-tour-package.jpg",
//     "description": "On arrival welcome and transfer to hotel in Colombo. After breakfast make a half day city tour of Colombo. Colombo like many capital cities in developing countries is fast changing its face. Almost overnight, skyscrapers arise from where old buildings once stood. Yet in some parts, the old world charm is retained. For example, there is a 100-year-old clock tower and several British built colonial buildings"
//   },
//   {
//     "name": "Dhaka to Denpasar Bali",
//     "img": "https://i.ibb.co/C9McWCZ/dhaka-bali-tour-package.jpg",
//     "description": "Depart from Dhaka Airport. Pick up from airport and transfer to Hotel/resort. Overnight.Breakfast at hotel restaurant. Full day free for own activity. Overnight stay at hotel.Breakfast at hotel restaurant. Full day free for own activity. Overnight stay at hotel.Breakfast at hotel restaurant. At leisure till your transfer to the airport. Check out time 1200 hrs."
//   },
//   {
//     "name": "Dhaka to Bangkok",
//     "img": "https://i.ibb.co/mFB7tW7/dhaka-bangkok-tour.jpg",
//     "description": "Depart from Dhaka Airport. Met upon arrival and transfer to Hotel. Overnight at Hotel Legacy Express.Full day free in Bangkok. Overnight at hotel Legacy Express.At leisure till your transfer to the airport. Check out time 1200 hrs"
//   },
//   {
//     "name": "Dhaka to Bangkok -Pattaya",
//     "img": "https://i.ibb.co/QYYs453/dhaka-pattaya-tour.jpg",
//     "description": "Depart from Dhaka Airport. Meet upon arrival and transfer to Pattaya. Overnight at Hotel in Pattaya.Morning free at Pattaya. Afternoon transfer to Bangkok. Overnight at hotel in Bangkok.Full day free in Bangkok. Overnight at Hotel."
//   },
//   {
//     "name": "Dhaka – Beijing",
//     "img": "https://i.ibb.co/B2yYLMt/dhaka-beijing-china-tour-package.jpg",
//     "description": "Depart from Dhaka Airport. Meet upon arrival in Beijing and transfer to Hotel. Overnight at Hotel.Pick-up from your hotel between 7:00am and 7:30am, and then drive to Ming Tombs (50 miles away from downtown about one hour driving). The thirteen Ming Tombs are the best-preserved Chinese imperial tombs with 500 years history. You will visit Changling, the head and the largest tomb of Ming Tombs, where Emperor Yongle (the first emperor in Beijing) and his Empress Xu were buried. The sightseeing on the Ming Tombs takes about 1 hour"
//   },
//   {
//     "name": "DHAKA TO HANOI",
//     "img": "https://i.ibb.co/5YB3mtb/halong-bay-vietnum-tour.jpg",
//     "description": "Depart from Dhaka Airport. Pick up from Hanoi airport and transfer to Hotel. Overnight at hotel.Depart to Halong Bay (3.5 hrs drive), one of the most magnificent scenic spots in all of Vietnam and was designated by UNESCO as a World Natural Heritage in 1994. Enjoy a 4-hour private boat cruise, visit 2 limestone caves with colorful stalagmites & stalactites and enjoy a lunch of fresh seafood on board.Back to Hanoi in the evening. Overnight at hotel."
//   },
//   {
//     "name": "BHUTAN TOUR PACKAGE FORM DHAKA BANGLADESH",
//     "img": "https://i.ibb.co/S3kvPc8/dhaka-thimpu-bhutan-tour.jpg",
//     "description": "Journey will be started from Dhaka International Airport. Tourists will be received at Paro Airport, Visit Museum & Airport View Point. Transfer to Thimphu Hotel. It’s 1.5 hours scenic drive. After having lunch visit Archery Ground, Memorial Chorten. In the evening strolling/ shopping. After having dinner night halt at Hotel Thimphu. After having breakfast visit Sangay view point/ BBS Tower & Zigmey Doorje National Park. A beautiful traditional wooden bridge is there, where you will get an attractive view of Thimphu river. On the way back visit Stupa. In the afternoon visit SAARC Building & Tashicho Dzong. In the evening free to enjoy Thimphu nightlife. Dinner & Night halt at Hotel, Thimphu."
//   },
//   {
//     "name": "Dhaka - Paro - Thimphu",
//     "img": "https://i.ibb.co/S3kvPc8/dhaka-thimpu-bhutan-tour.jpg",
//     "description": "Arrive at Paro and transfer to Thimphu. Once you arrive, our representative will receive you and transfer to Thimphu. En route enjoy the scenic beauty of nature. Overnight in ThimphuThimphu which is one of the twenty districts and currently it is our Capital City. Thimphu houses both political and spiritual head quarter. It is located in inner Himalaya and is situated in western part about 2,320 meters above sea level. It falls in temperate zone which has rich flora and fauna content. The core of city functions as commercial hub and people are engaged in business activities. It is surrounded by educational institutes, personal residence and offices of different agencies like government, private, cooperate and international organizations too.Thimphu has given shelter to mixture of population from different parts of the country. This makes capital city busiest and populated as compared to other Dzongkhags (Districts) in the country. People are engrossed in business, transport, agriculture, livestock, horticulture and white collar profession both in private and government organizations."
//   },
//   {
//     "name": "SINGAPORE TOUR PACKAGE FROM DHAKA",
//     "img": "https://i.ibb.co/6gQyChg/dhaka-singapore-tour.jpg",
//     "description": "Depart from Dhaka Airport. Pick up from Singapore airport and transfer to Hotel. Overnight at hotel.Morning half day Singapore city tour. Afternoon free for own activity. Overnight at hotel.At leisure till your transfer to the airport. Check out time 1200 hrs."
//   },
//   {
//     "name": "Dhaka - Kuala Lumpur - Singapore",
//     "img": "https://i.ibb.co/MncjLPf/dhaka-kuala-lumpur-tour.jpg",
//     "description": "Depart from Dhaka Airport. Met upon arrival and transfer to Hotel. Overnight at Hotel.Full day free in Singapore. Overnight at hotel.On thime transfer to Singapore airport for flight to Kuala Lumpur. Pick up from Kuala Lumpur airport and transfer to hotel. Overnight at hotel."
//   }
// ]



const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/bikes')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (

    <div>
      <h1>Our Products</h1>
      <Row xs={1} md={3} className="g-4 mx-4 my-4">

        {products.slice(0, 6).map(product => <Product  product={product} ></Product>)}


      </Row>
    </div>
  );
};

export default Products;

