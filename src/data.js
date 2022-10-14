import image1 from "./assets/images/home/image1.jpg"
import image2 from "./assets/images/home/image2.jpg"
import image3 from "./assets/images/home/image3.png"
import image4 from "./assets/images/home/image4.webp"
import image5 from "./assets/images/home/image5.jpg"
import image6 from "./assets/images/home/image6.webp"
// importing about image
import about_image from "./assets/images/about/amrit.png";
const data={
     name: "Amrit Acharya",
     header:{
          navItems:['Home','About','Skills','Contact']
     },
     home:{
          images:{

               image1,
               image2,
               image3,
               image4,
               image5,
               image6,
          }

     },
     about:{
          image:about_image,
          text:{
               subtitle:"Available for small freelance projects.",
               name:"Amrit Acharya.",
               work:"Graphic Designer based in Dallas, TX.",
               desc:"I live in a world of infinite possibilities, preferring to see things not as they are, but as they could be. I'm a problem solver with a keen interest in contributing to society through design.",
               btn_text:"Contact Me"
          }
     },
     skills:{
          web:{
               title:"Websites",
               skills:["Webflow","Wordpress","WIX+Squarespace"]
          },
          design:{
               title:"Design",
               skills:["Logos","Invitations","Social Media Graphics","infographics"]
          },
          management:{
               title:"Management(CRM+CMS)",
               skills:["Hubspot","Salesforce","Bynder","Unbounce","Shopify"]
          }
     }
     

}
export default data;