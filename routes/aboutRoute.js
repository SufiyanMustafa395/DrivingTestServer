// routes/aboutRoute.js
const express = require('express');
const router = express.Router();
const React = require('react');


router.get('/', async (req, res) => {
  try {
    // Include an array of objects, each representing a tile with text and an image
    const data = {
      about: {
        title: "Welcome to Our Grooming Shop",
        description: "We are dedicated to providing top-notch grooming services for your furry friends.",
        tiles: [
          {
            text:  "Proudly serving the Greater Toronto Area since 2004, Our Grooming shop is dedicated to making your pet feel comfortable and at home while in our salon. We want your pet to have a good time with us and always be happy to come back.",
            title: "Putting Your Pets at Ease Since 2004",
            imageUrl: "https://spiritdogtraining.com/wp-content/uploads/2021/03/how-long-does-grooming-take.jpg",
          },
          {
            title: "Quality Hand-Scissored Grooming for Best Results",
            text: "Our second priority is for your pet to leave Paw Pals looking his or her best. We specialize in quality hand-scissored grooming and always give your pet the time it takes for the best hair-do possible. All of our groomers are trained in the art of pet styling. Whether you are looking for a simple, short haircut or a fancy, elaborate style, our groomers are qualified.",
            imageUrl: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/dog-grooming-logo.jpg",
          },
          {
            title: "Professional Awards",
            text: "Nominated & celebrated as a 2013 “ Gem of the Lakeshore” awarded by the Toronto Groomers Association",
            imageUrl: "https://img1.wsimg.com/isteam/ip/ce2b4146-5501-47e1-bd69-e3c207d09e67/blob-4fa8201.png/:/cr=t:10.39%25,l:0%25,w:100%25,h:79.22%25/rs=w:388,h:388,cg:true",
          },
          
          // Add more tiles as needed
        ],
      },
    };

    // Send the data as JSON in the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error handling about route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
