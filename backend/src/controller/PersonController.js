const pool = require('../startup/db');

class PersonController {
    static async create(req, res) {
        const { name, lastname, salary } = req.body;
        if (!name || !lastname || !salary)
            return res.status(400).send({ message: "Dados inválidos" });

        try {
            const [result] = await pool.execute(
                'INSERT INTO persons (name, lastname, salary) VALUES (?, ?, ?)',
                [name, lastname, salary]
            );

            return res.status(201).send({
                message: "Pessoa inserida com sucesso",
                body: { id: result.insertId, name, lastname, salary }
            });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    static async getAllPeople(req, res) {
        try {
            const [rows] = await pool.execute('SELECT * FROM persons');
            return res.status(200).json(rows);
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).send({ message: "No id provided" });

        try {
            const [rows] = await pool.execute('SELECT * FROM persons WHERE id = ?', [id]);
            if (rows.length === 0)
                return res.status(404).send({ message: "Pessoa não encontrada" });

            return res.status(200).json(rows[0]);
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    static async updateById(req, res) {
        const { id } = req.params;
        const { salary } = req.body;
        if (!salary) return res.status(400).send({ message: "Salário não informado" });

        try {
            const [result] = await pool.execute(
                'UPDATE persons SET salary = ? WHERE id = ?',
                [salary, id]
            );

            if (result.affectedRows === 0)
                return res.status(404).send({ message: "Pessoa não encontrada" });

            return res.status(200).send({ message: "Salário atualizado" });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    static async deleteById(req, res) {
        const { id } = req.params;

        try {
            const [result] = await pool.execute('DELETE FROM persons WHERE id = ?', [id]);

            if (result.affectedRows === 0)
                return res.status(404).send({ message: "Pessoa não encontrada" });

            return res.status(200).send({ message: "Pessoa removida com sucesso" });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}

module.exports = PersonController;
