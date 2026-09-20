const sampleRestaurants = [
  {
    title: "Domino's Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    description: "Delicious pizza and fast food",
    cuisine: "Pizza, Fast Food",
    price: 400,
    rating: 4.2,
    location: "Bhopal"
  },
  {
    title: "Burger King",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    description: "Best burgers and fast food",
    cuisine: "Burger, Fast Food",
    price: 350,
    rating: 4.1,
    location: "Bhopal"
  },
  {
    title: "Indian Coffee House",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    description: "Coffee and Indian snacks",
    cuisine: "Coffee, Indian",
    price: 200,
    rating: 4.0,
    location: "Bhopal"
  },
  {
    title: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    description: "Fresh and cheesy pizzas",
    cuisine: "Pizza, Italian",
    price: 500,
    rating: 4.3,
    location: "Indore"
  },
  {
    title: "KFC",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710",
    description: "Crispy chicken and fast food",
    cuisine: "Fast Food, Chicken",
    price: 450,
    rating: 4.2,
    location: "Bhopal"
  },
  {
    title: "McDonald's",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    description: "Burgers, fries and beverages",
    cuisine: "Burger, Fast Food",
    price: 350,
    rating: 4.3,
    location: "Indore"
  },
  {
    title: "Paradise Biryani",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    description: "Authentic and delicious biryani",
    cuisine: "Biryani, Indian",
    price: 400,
    rating: 4.5,
    location: "Hyderabad"
  },
  {
    title: "The Spice Kitchen",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    description: "Traditional Indian food with rich flavors",
    cuisine: "North Indian",
    price: 500,
    rating: 4.4,
    location: "Delhi"
  },
  {
    title: "South Indian Cafe",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    description: "Fresh dosa, idli and south Indian dishes",
    cuisine: "South Indian",
    price: 250,
    rating: 4.3,
    location: "Chennai"
  },
  {
    title: "Chinese Wok",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    description: "Delicious Chinese and Asian food",
    cuisine: "Chinese, Asian",
    price: 400,
    rating: 4.1,
    location: "Mumbai"
  },
  {
    title: "Roll Express",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
    description: "Tasty rolls and quick bites",
    cuisine: "Rolls, Fast Food",
    price: 220,
    rating: 4.0,
    location: "Bhopal"
  },
  {
    title: "Momos Point",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cee6a6",
    description: "Steamed and fried delicious momos",
    cuisine: "Chinese, Momos",
    price: 180,
    rating: 4.2,
    location: "Indore"
  },
  {
    title: "Sweet Nation",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c",
    description: "Traditional Indian sweets and desserts",
    cuisine: "Desserts, Sweets",
    price: 250,
    rating: 4.4,
    location: "Bhopal"
  },
  {
    title: "The Chocolate Room",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    description: "Chocolate desserts and delicious cakes",
    cuisine: "Desserts, Bakery",
    price: 350,
    rating: 4.3,
    location: "Indore"
  },
  {
    title: "Biryani Blues",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    description: "Spicy and flavorful biryani",
    cuisine: "Biryani, Mughlai",
    price: 450,
    rating: 4.4,
    location: "Delhi"
  },
  {
    title: "Punjab Grill",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    description: "Authentic Punjabi food",
    cuisine: "North Indian, Punjabi",
    price: 600,
    rating: 4.5,
    location: "Delhi"
  },
  {
    title: "Royal Cafe",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    description: "Coffee, snacks and delicious meals",
    cuisine: "Cafe, Fast Food",
    price: 300,
    rating: 4.1,
    location: "Bhopal"
  },
  {
    title: "Italian Delight",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    description: "Authentic pasta and Italian dishes",
    cuisine: "Italian, Pasta",
    price: 550,
    rating: 4.4,
    location: "Mumbai"
  },
  {
    title: "Tandoori Nights",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
    description: "Delicious tandoori and Indian food",
    cuisine: "North Indian, Tandoori",
    price: 500,
    rating: 4.2,
    location: "Bhopal"
  },
  {
    title: "Street Food Hub",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    description: "Popular Indian street food",
    cuisine: "Street Food, Indian",
    price: 150,
    rating: 4.0,
    location: "Indore"
  },
  {
    title: "Chai Sutta Bar",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
    description: "Tea, coffee and snacks",
    cuisine: "Cafe, Beverages",
    price: 120,
    rating: 4.2,
    location: "Bhopal"
  },
  {
    title: "The Dessert House",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    description: "Cakes, pastries and desserts",
    cuisine: "Desserts, Bakery",
    price: 300,
    rating: 4.3,
    location: "Indore"
  },
  {
    title: "Samosa Corner",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd3",
    description: "Fresh samosa and Indian snacks",
    cuisine: "Snacks, Indian",
    price: 100,
    rating: 4.0,
    location: "Bhopal"
  },
  {
    title: "Healthy Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    description: "Healthy salads and nutritious food",
    cuisine: "Healthy Food, Salad",
    price: 350,
    rating: 4.5,
    location: "Mumbai"
  },
  {
    title: "Green Leaf Restaurant",
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7",
    description: "Fresh vegetarian food",
    cuisine: "Vegetarian, Indian",
    price: 300,
    rating: 4.2,
    location: "Bhopal"
  },
  {
    title: "Maharaja Restaurant",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    description: "Royal Indian dining experience",
    cuisine: "North Indian, Mughlai",
    price: 700,
    rating: 4.6,
    location: "Jaipur"
  },
  {
    title: "Dosa Plaza",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    description: "Traditional and crispy dosas",
    cuisine: "South Indian",
    price: 250,
    rating: 4.3,
    location: "Bhopal"
  },
  {
    title: "Noodle House",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de",
    description: "Delicious noodles and Chinese dishes",
    cuisine: "Chinese, Noodles",
    price: 300,
    rating: 4.1,
    location: "Indore"
  },
  {
    title: "Grill Nation",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    description: "Grilled food and delicious starters",
    cuisine: "Grill, Barbecue",
    price: 650,
    rating: 4.4,
    location: "Delhi"
  },
  {
    title: "Food Factory",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    description: "Variety of delicious meals",
    cuisine: "Multi Cuisine",
    price: 400,
    rating: 4.2,
    location: "Bhopal"
  },
  {
    title: "Cafe Coffee Day",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    description: "Premium coffee and snacks",
    cuisine: "Cafe, Coffee",
    price: 300,
    rating: 4.0,
    location: "Mumbai"
  },
  {
    title: "Wrap House",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586",
    description: "Fresh wraps and quick meals",
    cuisine: "Wraps, Fast Food",
    price: 250,
    rating: 4.1,
    location: "Bhopal"
  },
  {
    title: "The Pizza Company",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    description: "Cheesy pizzas with fresh toppings",
    cuisine: "Pizza, Italian",
    price: 450,
    rating: 4.3,
    location: "Indore"
  },
  {
    title: "Taste of India",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    description: "Authentic Indian traditional dishes",
    cuisine: "Indian, North Indian",
    price: 400,
    rating: 4.4,
    location: "Bhopal"
  },
  {
    title: "Ocean Restaurant",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    description: "Fresh seafood and delicious dishes",
    cuisine: "Seafood, Chinese",
    price: 700,
    rating: 4.5,
    location: "Mumbai"
  },
  {
    title: "Punjabi Dhaba",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    description: "Traditional Punjabi dhaba food",
    cuisine: "Punjabi, North Indian",
    price: 300,
    rating: 4.3,
    location: "Indore"
  },
  {
    title: "Quick Bites",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description: "Fast and delicious food",
    cuisine: "Fast Food",
    price: 200,
    rating: 3.9,
    location: "Bhopal"
  },
  {
    title: "Royal Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    description: "Special royal style biryani",
    cuisine: "Biryani, Indian",
    price: 500,
    rating: 4.5,
    location: "Hyderabad"
  },
  {
    title: "Spice Garden",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    description: "Spicy and flavorful Indian cuisine",
    cuisine: "Indian, Multi Cuisine",
    price: 450,
    rating: 4.4,
    location: "Bhopal"
  },
  {
    title: "Foodie's Paradise",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description: "A paradise for food lovers",
    cuisine: "Multi Cuisine, Fast Food",
    price: 500,
    rating: 4.6,
    location: "Indore"
  }
];

module.exports = { data: sampleRestaurants };