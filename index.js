const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Server is running!');
});

// ye kisi aur ka kaam h jo tumhare pull ke bad aya 

app.post('/api/data', (req, res) => {
  res.json({ message: 'Data received', data: req.body });
  console.log("ankur ka 2nd work")
});

// ankur ka 2nd work


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// ankur ka jira ka kaam chal raha hai
