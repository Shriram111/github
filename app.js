const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("🚀 GitHub Actions + Docker + AWS ECR + EC2");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
