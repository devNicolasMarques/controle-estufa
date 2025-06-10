const pool = require('../startup/db');

class SensorController {
    static async create(req, res) {
        const { luminosidade, temperatura, umidade } = req.body;
        if (luminosidade === undefined || temperatura === undefined || umidade === undefined) {
            return res.status(400).send({ message: "Dados inválidos" });
        }

        try {
            const [result] = await pool.execute(
                'INSERT INTO sensors (luminosidade, temperatura, umidade) VALUES (?, ?, ?)',
                [luminosidade, temperatura, umidade]
            );

            return res.status(201).send({
                message: "Dados do sensor inseridos com sucesso",
                body: { id: result.insertId, luminosidade, temperatura, umidade }
            });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const [rows] = await pool.execute('SELECT * FROM sensors');
            return res.status(200).json(rows);
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    static async sensorTest(req, res) {
        const { nome, valor } = req.body
        try {
            await pool.execute(
                'INSERT INTO sensor (nome, valor) VALUES (?, ?)',
                [nome, valor]
            );

            return res.status(200).json({response: `Sensor ${nome} cadastrado com sucesso!`});
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    static async deleteById(req, res) {
        const { id } = req.params;

        try {
            const [result] = await pool.execute('DELETE FROM sensors WHERE id = ?', [id]);

            if (result.affectedRows === 0) {
                return res.status(404).send({ message: "Dados do sensor não encontrados" });
            }

            return res.status(200).send({ message: "Dados do sensor removidos com sucesso" });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}

module.exports = SensorController;