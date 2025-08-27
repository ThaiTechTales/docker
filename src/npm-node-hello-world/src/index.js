// src/index.js
// Purpose: minimal Express server to demonstrate npm deps, ports, and Docker

import express from "express";

const app = express();

// Respect PORT from env. Default to 3000 for local runs.
const PORT = process.env.PORT || 3000;

// Lightweight health endpoint for Docker HEALTHCHECKs and uptime probes
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

// Simple root endpoint
app.get("/", (_req, res) => {
    res.json({
        message: "Hello from Node + Docker + npm 👋",
        port: Number(PORT)
    });
});

// Bind to 0.0.0.0 so it is reachable from Docker networking
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
