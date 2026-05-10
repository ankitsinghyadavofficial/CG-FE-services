const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Server is running!');
});

// ye kisi aur ka kaam h jo tumhare pull ke bad aya 



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// ankur ka jira ka kaam chal raha hai
