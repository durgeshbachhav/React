import express from 'express'

const app = express();

// http://localhost:3000/api/product?search=wooden
// ?= query parameter

app.get('/api/products', (req, res) => {
     const products = [
          {
               id: 1,
               name: "table wooden",
               price: 200,
               image: 'https://picsum.photos/200/300',
          },
          {
               id: 2,
               name: "chair leather",
               price: 50,
               image: 'https://picsum.photos/200/300',
          },
          {
               id: 3,
               name: "lamp desk",
               price: 30,
               image: 'https://picsum.photos/200/300',
          },
          {
               id: 4,
               name: "bookshelf",
               price: 150,
               image: 'https://picsum.photos/200/300',
          },
          {
               id: 5,
               name: "couch sectional",
               price: 500,
               image: 'https://picsum.photos/200/300',
          },
          {
               id: 6,
               name: "coffee table",
               price: 80,
               image: 'https://picsum.photos/200/300',
          },
          {
               id: 7,
               name: "mirror wall",
               price: 40,
               image: 'https://picsum.photos/200/300',
          },
          {
               id: 8,
               name: "desk wooden",
               price: 120,
               image: 'https://picsum.photos/200/300',
          },
          {
               id: 9,
               name: "bed frame",
               price: 300,
               image: 'https://picsum.photos/200/300',
          },
          {
               id: 10,
               name: "sofa fabric",
               price: 450,
               image: 'https://picsum.photos/200/300',
          },
          // Add more products as needed
     ];

     //    query kar raha hai
     if (req.query.search) {
          const fitlerproducts = products.filter(products => products.name.includes(req.query.search))

          res.send(fitlerproducts)
          return;
     }

     setTimeout(() => {
          res.send(products)
     }, 3000)
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
     console.log(`applistening on port:${port}`);
})