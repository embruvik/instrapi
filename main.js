const express = require('express');
const app = express();
const port = 8091;

app.get("/instr/:instrname", (req, res) => {
    res.send(`Hello from instrument ${req.params.instrname}`);
});

app.listen(port, () => {
    console.log(`Instr running on port ${port}`);
});
