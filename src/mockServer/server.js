import express from "express";
const app = express();
import cors from "cors";
const PORT = 3000;
import { companies } from "../utils/mockData.js";


//allowing to access the resoource  for the only endpoint specified
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

//Api endpoints
app.get("/api/:companyId/employees", (req, res) => {
  const { companyId } = req.params;

  if (companies[companyId]) {
    const employeeData = companies[companyId].employees;

    return res.json(employeeData);
  }
  res.status(404).json({ error: "Company not found" });
});

app.get("/api/:companyId/leaves", (req, res) => {
  const { companyId } = req.params;
  if (companies[companyId]) {
    return res.json(companies[companyId].leaves);
  }
  res.status(404).json({ error: "Company not found" });
});

app.get("/api/:companyId/announcements", (req, res) => {
  const { companyId } = req.params;
  if (companies[companyId]) {
    return res.json(companies[companyId]?.announcements);
  }
  res.status(404).json({ error: "Company not found" });
});

app.listen(PORT, () =>
  console.log(`Mock API server running on http://localhost:${PORT}`)
);
