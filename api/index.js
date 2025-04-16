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

app.get("/", (req, res)=>{
    res.send(`
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        line-height: 1.6;
                    }
                    .endpoint {
                        color: #2980b9;
                        font-family: monospace;
                        padding: 5px;
                        background: #f5f5f5;
                        border-radius: 4px;
                    }
                </style>
            </head>
            <body>
                <h2>Welcome to Fun Facts API</h2>
                <p>Use the endpoint:</p>
                <p class="endpoint">/api/funfact</p>
                <p>to display the list of fun facts</p>
            </body>
        </html>
    `);
});

app.get("/api/funfact", (req, res)=>{
    res.json(funFacts);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} hehehe...`);
}
);