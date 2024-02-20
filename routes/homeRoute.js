// routes/homeRoute.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    // Fetch data for the home page
    const data = {
      title: "Special Discount!",
      message: "Limited-time offer: Get 10% off on all grooming services booked on next Monday!",
      servicePics: [
        {
          title: "\nGROOMING",
          imageUrl: "https://www.hippiehoundsgrooming.com/images/sections/grooming.jpg",
        },
        {
          title: "BATHING",
          imageUrl: "https://www.dailypaws.com/thmb/yrcQejz6nwH1Nt_a4TzqDzbnJLk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-bathe-a-dog-in-winter-1397320357-2000-796ff337e6534b2c86648b3343b71f81.jpg",
        },
        {
          title: "BRUSHING",
          imageUrl: "https://www.dogingtonpost.com/wp-content/uploads/2020/07/andisgroom1-min.jpg",
        },
      ],
      galleryPics: [
        {
          imageUrl: "https://cdn.hswstatic.com/gif/brush-dog-teeth-1.jpg",
        },
        {
          imageUrl: "https://www.woofreport.com/wp-content/uploads/2020/03/Woof-Dog-bath-850-500.jpg",
        },
        {
          imageUrl: "https://c8.alamy.com/comp/2JCN2P1/a-professional-female-groomer-is-air-drying-and-brushing-a-beautiful-siberian-samoyed-white-husky-dog-in-a-pet-salon-2JCN2P1.jpg",
        },
        {
          imageUrl: "https://www.marthastewart.com/thmb/ZwlY1ju2yTc7NUk8W7UDisnHr7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/yorkshire-terrier-dog-groomed-0520-0db70c9164634e94a26c5ae700e79101.jpg",
        },
        {
          imageUrl: "https://www.shutterstock.com/image-photo/grooming-maltipu-puppy-combing-purebred-600nw-2274369143.jpg",
        },
        {
          imageUrl: "https://petcube.com/blog/content/images/2017/07/brushing-a-dog.jpg",
        },
      ],
    };

    // Send the data as JSON in the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error handling home route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
