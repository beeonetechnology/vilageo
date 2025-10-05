export interface Package {
  id: string;
  title: string;
  destination: string;
  
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  
 
  rating: number;
  reviews: number;
}

// Import generated images
import lakshadweepImage from "@/assets/island-paradise.jpg";
import swissAlpsImage from "@/assets/andaman.jpg";
import japanImage from "@/assets/kerala.jpg";
import karnatakaImage from "@/assets/karnataka.jpg";
import tamilnaduImage from "@/assets/tamilnadu.jpg";
import goaImage from "@/assets/goa.jpg";
import hydrabadImage from "@/assets/hydrabad.jpg";
import nothindiaImage from "@/assets/northindia.jpg";
import norteastImage from "@/assets/north east.jpg";
import MalaysiaImage from "@/assets/Malaysia.jpg";
import SingaporeImage from "@/assets/Singapore.jpg"
import  ThailandImage from "@/assets/tailand.jpg" 
import  BaliImage from "@/assets/bali.jpg" 
import  DubaiImage from "@/assets/dubai.jpg" 
import  SriLankaImage from "@/assets/SriLanka.jpg" 
import  MaldivesImage from "@/assets/maldives.jpg"
import  MauritiusImage from "@/assets/Mauritius.jpg"


import lakshadweep01 from "@/assets/lakshadweep-01.jpg"
import lakshadweep02 from "@/assets/lakshadweep-02.jpg"
import lakshadweep03 from "@/assets/_Scuba-Diving-.jpg"
import lakshadweep04 from "@/assets/lakshadweep-03.jpg"
import andaman01 from "@/assets/andaman-01.jpg"
import andaman02 from "@/assets/andaman-02.jpg"
import andaman03 from "@/assets/andaman-03.jpeg"
import andaman04 from "@/assets/andaman-04.jpg"
import kerala01 from "@/assets/kerala-01.jpg"
import kerala02 from "@/assets/kerala-02.jpg"
import kerala03 from "@/assets/kerala-03.jpeg"
import kearal04 from "@/assets/kerala-04.jpg"
import karnataka01 from "@/assets/karnataka-01.jpg"
import karnataka02 from "@/assets/karnataka-02.jpg"
import karnataka03 from "@/assets/karnataka-03.jpg"
import karnataka04 from "@/assets/karnataka-04.jpg"
import tamilnadu01 from "@/assets/tamilnadu-01.jpg"
import tamilnadu02 from "@/assets/tamilnadu-02.jpg"
import tamilnadu03 from "@/assets/tamilnadu-03.jpg"
import tamilnadu04 from "@/assets/tamilnadu-04.jpg"
import goa01 from "@/assets/goa-01.jpg"
import goa02 from "@/assets/goa-02.jpg"
import goa03 from "@/assets/goa-03.jpg"
import goa04 from "@/assets/goa-04.jpg"
import hyderabad01 from "@/assets/hydhrabad-01.jpg"
import hyderabad02 from "@/assets/hydhrabad-02.jpg"
import hyderabad03 from "@/assets/hydhrabad-03.jpg"
import hyderabad04 from "@/assets/hydhrabad-04.jpg"
import nortindia01 from "@/assets/northindia-01.jpg"
import nortindia02 from "@/assets/northindia-02.jpg"
import nortindia03 from "@/assets/northindia-03.jpg"
import nortindia04 from "@/assets/northindia-04.jpg"
import norteast01 from "@/assets/norteast-01.jpg"
import norteast02 from "@/assets/norteast-02.jpg"
import norteast03 from "@/assets/norteast-03.png"
import norteast04 from "@/assets/norteast-04.jpg"

import Malaysia01 from "@/assets/Malaysia.jpg"
import Malaysia02 from "@/assets/malaysia-02.jpg"
import Malaysia03 from "@/assets/malaysia-03.jpg"
import Malaysia04 from "@/assets/malaysia-04.jpg"

import Singapore01 from "@/assets/Singapore-01.jpg"
import Singapore02 from "@/assets/Singapore-02.jpg"
import Singapore03 from "@/assets/Singapore-03.jpg"
import Singapore04 from "@/assets/Singapore-04.jpg"

import Thailand01 from "@/assets/tailand-01.jpg"
import Thailand02 from "@/assets/tailand-02.jpg"
import Thailand03 from "@/assets/tailand-03.jpg"
import Thailand04 from "@/assets/tailand-04.jpg"

import Bali01 from "@/assets/bali-01.jpg"
import Bali02 from "@/assets/bali-02.jpg"
import Bali03 from "@/assets/bali-03.jpg"
import Bali04 from "@/assets/bali-04.jpg"

import Dubai01 from "@/assets/dubai-01.jpg"
import Dubai02 from "@/assets/dubai-02.jpg"
import Dubai03 from "@/assets/dubai-03.jpg"
import Dubai04 from "@/assets/dubai-04.jpg"

import SriLanka01 from "@/assets/SriLanka-01.jpg"
import SriLanka02 from "@/assets/SriLanka-02.jpg"
import SriLanka03 from "@/assets/SriLanka-03.jpg"
import SriLanka04 from "@/assets/SriLanka-04.jpg"

import Maldives01 from "@/assets/maldives-01.jpg"
import Maldives02 from "@/assets/maldives-02.jpg"
import Maldives03 from "@/assets/maldives-03.jpg"
import Maldives04 from "@/assets/maldives-04.png"

import Mauritius01 from "@/assets/Mauritius-01.jpg"
import Mauritius02 from "@/assets/Mauritius-02.jpg"
import Mauritius03 from "@/assets/Mauritius-03.jpg"
import Mauritius04 from "@/assets/Mauritius-04.jpg"




export const mockPackages: Package[] = [
  
  {
    id: "1",
    title: "Tropical Paradise Escape",
    destination: "Lakshadweep",
  
    price: 2499,
    originalPrice: 2999,
    image: lakshadweepImage,
    images: [
      lakshadweep01,
      lakshadweep02,
      lakshadweep03,
      lakshadweep04
    ],
   description: "Discover the untouched beauty of Lakshadweep with pristine white-sand beaches, turquoise lagoons, and vibrant coral reefs. Relax in cozy beachfront cottages, explore the islands by kayak, snorkel with colorful marine life, and enjoy traditional island cuisine under starlit skies.",
   
   
    rating: 4.9,
    reviews: 234
  },
  {
    id: "2",
    title: "Crystal Water Dreams",
    destination: "Andaman",
    
    price: 3299,
    originalPrice: 3799,
    image: swissAlpsImage,
    images: [
      andaman01,
      andaman02,
      andaman03,
      andaman04
    ],
    description: "Embark on an extraordinary journey through Andaman’s most breathtaking landscapes. From serene beach walks to island-hopping adventures, this trip combines luxury comfort with thrilling water activities.",
  
    
    rating: 4.8,
    reviews: 189
  },
  {
    id: "3",
    title: "Lush Kerala Trails",
    destination: "Kerala",
  
    price: 4299,
    originalPrice: 4899,
    image: japanImage,
    images: [
      kerala01,
      kerala02,
      kerala03,
      kearal04
    ],
    description: "Immerse yourself in Kerala’s rich cultural heritage with visits to ancient temples, traditional art performances, and authentic houseboat experiences. A perfect blend of history, culture, and natural beauty.",

   
    rating: 4.9,
    reviews: 156
  },
  {
    id: "4",
    title: "Discover Karnataka Magic",
    destination: "Karnataka",

    price: 3799,
    originalPrice: 4299,
    image: karnatakaImage,
    images: [
     karnataka01,
     karnataka02,
     karnataka03,
     karnataka04
    ],
    description: "Witness Karnataka’s rich wildlife and explore its famous national parks. Stay in luxury jungle lodges and enjoy guided safaris with expert wildlife guides.",
   
    
    rating: 4.7,
    reviews: 203
  },
  {
    id: "5",
    title: "Coastal Village Hopping",
    destination: "Tamilnadu",
    
    price: 2899,
    originalPrice: 3399,
    image: tamilnaduImage,
    images: [
       tamilnadu01,
       tamilnadu02,
       tamilnadu03,
       tamilnadu04
    ],
    description: "Explore the vibrant coastal villages of Tamil Nadu, with their colorful temples, serene beaches, and rich cultural heritage. Journey along the Bay of Bengal, visit traditional fishing communities, and experience authentic South Indian cuisine and local traditions.",
   

    rating: 4.8,
    reviews: 267
  },
  {
    id: "6",
    title: "Golden Beach Escape",
    destination: "Goa",
    
    price: 3599,
    originalPrice: 4099,
    image: goaImage,
    images: [
     goa01,
     goa02,
     goa03,
     goa04
    ],
   description: "Relax on Goa’s golden beaches, soak up the vibrant coastal culture, and enjoy lively beach parties and serene sunsets. Explore historic Portuguese forts, indulge in fresh seafood, and unwind with watersports and river cruises along the Arabian Sea.",
 

    rating: 4.9,
    reviews: 178
  },
  {
    id: "7",
    title: "Royal Hyderabad Charm",
    destination: "Hyderabad",
    
    price: 3599,
    originalPrice: 4099,
    image: hydrabadImage,
    images: [
     hyderabad01,
     hyderabad02,
     hyderabad03,
     hyderabad04
    ],
   description: "Experience the royal charm of Hyderabad with its majestic palaces, bustling bazaars, and rich culinary heritage. Explore iconic landmarks like Charminar and Golconda Fort, savor authentic Hyderabadi biryani, and immerse yourself in the city’s blend of history, culture, and modern vibrancy.",
   
   
    rating: 4.9,
    reviews: 178
  },
  {
    id: "8",
    title: "Royal North Trails",
    destination: "North india",
 
    price: 3599,
    originalPrice: 4099,
    image: nothindiaImage,
    images: [
     nortindia01,
     nortindia02,
     nortindia03,
     nortindia04
    ],
   description: "Explore the majestic landscapes of North India, from the snow-capped Himalayas to vibrant cultural cities. Discover historic forts and palaces, enjoy traditional cuisine, and experience scenic trekking, river excursions, and colorful local festivals along the way.",
  
    
    rating: 4.9,
    reviews: 178
  },
  {
    id: "9",
    title: "Enchanting Northeast India",
    destination: "North east india",
    
    price: 3599,
    originalPrice: 4099,
    image: norteastImage,
    images: [
     norteast01,
     norteast02,
     norteast03,
     norteast04
    ],
  description: "Discover the enchanting beauty of North East India with its lush valleys, serene rivers, and vibrant tribal cultures. Explore scenic landscapes in Assam, Meghalaya, and Arunachal Pradesh, enjoy local festivals, and immerse yourself in the region’s unique traditions and natural wonders.",
 
    rating: 4.9,
    reviews: 178
  },
   {
  id: "10",
  title: "Malaysian Days",
  destination: "Malaysia",
  price: 2499,
  originalPrice: 2999,
  image: MalaysiaImage,
  images: [Malaysia01, Malaysia02, Malaysia03, Malaysia04],
  description: "Experience the vibrant culture, stunning beaches, and lush rainforests of Malaysia. Enjoy city tours in Kuala Lumpur, relax on Langkawi's pristine beaches, and savor authentic Malaysian cuisine.",
  rating: 4.9,
  reviews: 234
},
{
  id: "11",
  title: "Singapore Explorer",
  destination: "Singapore",
  price: 2499,
  originalPrice: 2999,
  image: SingaporeImage,
  images: [Singapore01, Singapore02, Singapore03, Singapore04],
  description: "Discover Singapore's futuristic skyline, cultural neighborhoods, and world-class attractions. Visit Marina Bay Sands, Gardens by the Bay, Sentosa Island, and enjoy diverse street food experiences.",
  rating: 4.9,
  reviews: 234
},
{
  id: "12",
  title: "Thailand Adventure",
  destination: "Thailand",
  price: 2499,
  originalPrice: 2999,
  image: ThailandImage,
  images: [Thailand01, Thailand02, Thailand03, Thailand04],
  description: "Explore Thailand's tropical islands, bustling markets, and ancient temples. Relax on Phuket's beaches, visit Chiang Mai’s cultural sites, and savor authentic Thai cuisine.",
  rating: 4.9,
  reviews: 234
},
{
  id: "13",
  title: "Bali Getaway",
  destination: "Bali",
  price: 2499,
  originalPrice: 2999,
  image: BaliImage,
  images: [Bali01, Bali02, Bali03, Bali04],
  description: "Experience the serene beaches, lush rice terraces, and vibrant culture of Bali. Enjoy beachfront resorts, yoga retreats, Balinese ceremonies, and explore Ubud’s art scene.",
  rating: 4.9,
  reviews: 234
},
{
  id: "14",
  title: "Dubai Luxury Escape",
  destination: "Dubai",
  price: 2499,
  originalPrice: 2999,
  image: DubaiImage,
  images: [Dubai01, Dubai02, Dubai03, Dubai04],
  description: "Discover Dubai's futuristic skyline, luxury shopping, and desert adventures. Visit Burj Khalifa, enjoy desert safaris, relax at Palm Jumeirah, and experience world-class dining.",
  rating: 4.9,
  reviews: 234
},
{
  id: "15",
  title: "Sri Lanka Highlights",
  destination: "Sri Lanka",
  price: 2499,
  originalPrice: 2999,
  image: SriLankaImage,
  images: [SriLanka01, SriLanka02, SriLanka03, SriLanka04],
  description: "Explore Sri Lanka’s pristine beaches, lush tea plantations, and ancient ruins. Visit Colombo, Galle, Kandy, and enjoy wildlife safaris in national parks.",
  rating: 4.9,
  reviews: 234
}
,
{
  id: "16",
  title: "Maldives Paradise Escape",
  destination: "Maldives",
  price: 2499,
  originalPrice: 2999,
  image: MaldivesImage,
  images: [Maldives01, Maldives02, Maldives03, Maldives04],
  description: "Experience the Maldives’ pristine white-sand beaches, crystal-clear waters, and overwater villas. Enjoy snorkeling, diving, relaxing on secluded islands, and breathtaking sunsets over the Indian Ocean.",
  rating: 4.9,
  reviews: 234
},
{
  id: "17",
  title: "Mauritius Tropical Retreat",
  destination: "Mauritius",
  price: 2499,
  originalPrice: 2999,
  image: MauritiusImage,
  images: [Mauritius01, Mauritius02, Mauritius03, Mauritius04],
  description: "Discover Mauritius’ turquoise lagoons, volcanic landscapes, and vibrant culture. Relax on golden beaches, explore nature parks, enjoy water sports, and savor Creole cuisine.",
  rating: 4.9,
  reviews: 234
}
,
];

export const destinations = [
  { name: "Kerala",  },
  { name: "Lakshadweep", },
  { name: "Andaman",  },
  { name: "Karnataka", },
  { name: "Tamilnadu",},
  { name: "Goa", },
  { name: "Hyderabad",},
  { name: "North india", },
  { name: "North east india", },
  { name: "Malaysia",  },
  { name: "Singapore", },
  { name: "Thailand",  },
  { name: "Bali", },
  { name: "Sri lanka",},
  { name: "Maldives", },
  { name: "Mauritius",},
  
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah",
    location: "Kerala,kozikode",
    rating: 5,
    comment: "Absolutely incredible experience! The attention to detail and level of service exceeded all expectations. Our trip to Lakshadweep was pure magic, with crystal-clear waters, serene beaches, and unforgettable memories.",
    image: "/api/placeholder/80/80",
    package: "Tropical Paradise Escape"
  },
  {
    id: "2",
    name: "josaph",
    location: "karnataka",
    rating: 5,
    comment: "The Andaman Island experience was breathtaking. Crystal-clear lagoons, pristine beaches, and warm hospitality made it truly unforgettable. A perfect blend of relaxation and adventure—worth every moment!",
    image: "/api/placeholder/80/80",
    package: "Crystal Water Dreams"
  },
  {
    id: "3",
    name: "Aleena",
    location: "kerala,kochi",
    rating: 5,
    comment: "“My coastal journey through Goa was transformative. Every detail was perfectly planned, from the vibrant beach stays to the soulful cultural experiences.",
    image: "/api/placeholder/80/80",
    package: "Golden Beach Escape"
  }
];