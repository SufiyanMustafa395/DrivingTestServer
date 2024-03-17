// routes/servicesRoute.js

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Fetch data for the services page
    const data = {
      services: {
        title: "Our Services",
        description: "Explore the variety of grooming services we offer.",
        servicesList: [
          {
            title: "Dog Full Groom",
            imageUrl: "https://static.wixstatic.com/media/70c179_4f764eb205b24f69be042ec076370b71~mv2_d_1328_1328_s_2.jpg/v1/fill/w_108,h_114,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/scissors_edited.jpg",
            text: "Includes a bath, blow-dry, nail trim, sanitary clip, bum and paws, ear cleaning & full haircut. \n \n Prices Starts at: \n \n Extra small (dogs under 10lbs) $120+ \n Small (10lbs - 20lbs) $130+ \n Medium (20lbs - 40lbs) $160+ \n Large (40lbs - 60lbs) $ 215+ \n Extra Large (61-90lbs) $260+ \n Giant (91lbs and up) $300+ \n **If you have a Samoyed please book under Samoyed Service \n \n **If you have a Chow Chow, please book a consult first before booking",
          },
          {
            title: "Dog Bath & Tidy",
            imageUrl: "https://static.wixstatic.com/media/70c179_c47043c7ef3340d4b80b3068af917f01~mv2_d_2700_2700_s_4_2.jpg/v1/fill/w_108,h_114,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled-2.jpg",
            text: "Includes a bath, blow-dry, nail trim, brush out/de-shedding, sanitary clip, bum and paws, ear cleaning & face trim. Great for in-between grooms to keep your pet’s coat matt-free. This is also the ideal booking for Puppy's First Groom, which allows for a proper puppy introduction to grooming. \n \n Prices Starts At: \n \n Extra small (dogs under 10lbs) $100+ \n Small (10lbs - 20lbs) $115+ \n Medium (20lbs - 40lbs) $140+ \n Large (40lbs - 60lbs) $ 190+ \n Extra Large (61-90lbs) $ 215+ \n Giant (91lbs and up) $260+ \n \n **If you have a Samoyed please book under Samoyed Service",
          },
          {
            title: "Dog Bath & Deshed for Natural Coat",
            imageUrl: "https://static.wixstatic.com/media/70c179_d938183e4df043429317bd0ae73c1077~mv2_d_1440_1440_s_2.jpg/v1/fill/w_108,h_114,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/brush%20icon.jpg",
            text: "Includes bath, blow dry, de-shedding/ brush out, nail trim, and ear cleaning. This service is for dogs that don't need their hair cut, such as chihuahuas, frenchies, american bulldogs etc, and smooth-coated dogs. \n \n Prices Starts At: \n \n Short coat: \n Extra small (dogs under 10lbs) $60+ \n Small (10lbs - 20lbs) $80+ \n Medium (20lbs - 40lbs) $100+ \n Large (40lbs - 60lbs) $ 125+ \n Extra Large (61-90lbs) $140 \n Giant (91lbs and up) $160+ \n \n **If you have a Samoyed please book under Samoyed Service",
          },
          {
            title: "Samoyed Service",
            imageUrl: "https://static.wixstatic.com/media/70c179_02733b79dc6947d999d9856112103011~mv2.jpg/v1/crop/x_326,y_291,w_1257,h_1327/fill/w_108,h_114,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/samoyed.jpg",
            text: "This service includes all services needed for Samoyeds. If your Samoyed is severely matted or impacted please let us know in the comments when you book to allow extra time. \n \n Bath & Paws prices start at:  $265 \n Bath with Trimming price: $300 \n \n ** Samoyeds that are on a regular grooming schedule of 6-8 weeks prices start at $265 \n \n Additional Charges: \n Deshedding / Dematting : $100/hr \n Handling Fee (for difficult dogs) minimum $30+ \n \n *All pricing is subject to change depending on age, coat density, temperament, quality of coat, etc. ",
          },
          {
            title: "Bath & Dry",
            imageUrl: "https://static.wixstatic.com/media/70c179_7d4c25f163b74ecf8e3dd6856212b972~mv2.png/v1/crop/x_90,y_102,w_364,h_369/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202023-08-08%20at%2011_42_58%20AM.png",
            text: "Includes a bath & blow-dry. \n \n Prices Starts at: \n \n Extra small (dogs under 10lbs) $60+ \n Small (10lbs - 20lbs) $65+ \n Medium (20lbs - 40lbs) $80+ \n Large (40lbs - 60lbs) $ 110+ \n Extra Large (61-90lbs) $130+ \n Giant (91lbs and up) $150+ \n \n **If you have a Samoyed please book under Samoyed Service \n \n **Only applicable for dogs that have been groomed recently and do not need any brushing. ",
          },
          {
            title: "Chow Chow Service",
            imageUrl: "https://static.wixstatic.com/media/70c179_02733b79dc6947d999d9856112103011~mv2.jpg/v1/crop/x_324,y_324,w_1260,h_1260/fill/w_101,h_101,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/samoyed.jpg",
            text: "This service includes all services needed for Chows. If your Chow is severely matted or impacted please let us know in the comments when you book to allow extra time. \n \n Chow Service prices start at: $240 \n \n ** Chows that are on a regular grooming schedule of 6-8 weeks prices start at $240 \n \n Additional Charges: \n Deshedding / Dematting : $100/hr \n Handling Fee (for difficult dogs) minimum $30+ \n \n *All pricing is subject to change depending on age, coat density, temperament, quality of coat, etc. ",
          },
          {
            title: "Add Ons",
            imageUrl: "https://static.wixstatic.com/media/70c179_6cd5192aa09c41c7874123952901ea86~mv2.jpg/v1/crop/x_307,y_302,w_746,h_725/fill/w_111,h_101,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/icon_edited_edited.jpg",
            text: "Teeth Brushing $10 \n \n Anal Glands $15 \n \n De-matting/De-shedding $120/hr \n \n Flea Bath $45 *only applicable if there are actual signs of flea infestation \n \n Skunk Bath $45 \n \n Pelt Removal $TBD Minimum of $30 \n \n Nagayu Co2 Bath (Small) $15 \n \n Nagayu Co2 Bath (Large) $30 \n \n Ear Plucking $20 \n \n Medicated Bath $30 \n \n Private Groom $100",
          },
          {
            title: "A la Carte Services",
            imageUrl: "https://static.wixstatic.com/media/70c179_6cd5192aa09c41c7874123952901ea86~mv2.jpg/v1/crop/x_307,y_302,w_746,h_725/fill/w_111,h_101,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/icon_edited_edited.jpg",
            text: "Nail trim $30 \n \n Ear Cleaning $15 \n \n Ear Plucking $25 \n \n Anal Glands $40 \n \n Teeth Brushing $15 \n \n Face Trim $40 \n \n Paw Trim $48 (Includes nail trimming) \n \n Sanitary Shave $30",
          },
          // Add more services as needed
        ],
      },
    };

    // Send the data as JSON in the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error handling services route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
