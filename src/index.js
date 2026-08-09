
import pool from "./db.js";

app.get("/test-db", async (req, res) => {
    try {
        const resultado = await pool.query("SELECT * FROM authors");
        res.json(resultado.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error conectando a la base de datos"
        });
    }
});