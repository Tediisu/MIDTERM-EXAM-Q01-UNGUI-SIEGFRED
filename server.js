const express = require(`express`);

const app = express();
const PORT = 8000;

const toys = [
    {
        id: 1,
        name: "Gundam Freedom",
        price: 2790
    },
    {
        id: 2,
        name: "Gundam Barbatos",
        price: 2790
    },
    {
        id: 3,
        name: "Gundam RX78-2",
        price: 1890
    },
    {
        id: 4,
        name: "Gundam Exia",
        price: 2290
    },
    {
        id: 5,
        name: "Gundam Freedom-EX",
        price: 19990
    }
];

// Retrieve all
app.get('/api/toys', (req, res) => {
    res.json(toys);
});

// Retrieve by id
app.get('/api/toys:id', (req, res) => {
    const id = Number(req, params.id);

    const toy = toys.find(toy => {
        toy.id === id
    });

    if (!toy) {
        return res.status(404).json({ message: "Toy not found"});
    }

    res.json(toy);
})

// Insert new
app.post('/api/toys', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            error: "Missing fields are required"
        });
    }

    const newToy = {
        id: toy.length + 1,
        name,
        price
    };

    toy.push(newToy);
    res.status(201).json(newToy);
});

// Delete by id
app.delete('/api/toys:id', (req, res) => {
  const toyId = Number(req.params.id); 

  const toy = toys.find(toy => {
    toy.id === id
  });
  
  if (!toy) {
        return res.status(404).json({ message: "Toy not found"});
  }

  toys = toys.filter(toy => toy.id !== parseInt(id));
  res.status(200).json({ message: `Item with ID ${itemId} deleted successfully.` });

})

app.use(express.static(__dirname));
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
