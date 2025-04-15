import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

const funFacts = [
    {
      id: 1,
      fact: "Honey never spoils. Archaeologists have found 3000-year-old honey and it was still good.",
      author: "Science Daily"
    },
    {
      id: 2,
      fact: "Octopuses have three hearts and blue blood.",
      author: "National Geographic"
    },
    {
      id: 3,
      fact: "A day on Venus is longer than a year on Venus.",
      author: "NASA"
    },
    {
      id: 4,
      fact: "Bananas are berries, but strawberries are not.",
      author: "Fruit Facts Weekly"
    },
    {
      id: 5,
      fact: "Your brain uses around 20% of your body’s total energy.",
      author: "Mind Matters"
    },
    {
      id: 6,
      fact: "There are more stars in the universe than grains of sand on Earth.",
      author: "Cosmic Times"
    },
    {
      id: 7,
      fact: "Sloths can hold their breath longer than dolphins can.",
      author: "Animal Planet"
    }
  ];




const PORT = "8000";
app.get("/api/funfact", (req, res)=>{
    res.json(funFacts);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} hehehe...`);
}
);