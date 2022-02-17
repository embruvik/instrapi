const express = require('express');
const app = express();
const port = 3000;

app.get("/instr", (req, res) => {
    res.send('Hello from instrument');
});

app.listen(port, () => {
    console.log(`Instr running on port ${port}`);
});
