import db from '../../lib/db';

export default function handler(req, res) {
  const { search } = req.query;
  const query = `SELECT * FROM products WHERE name LIKE ?`;
  const values = [`%${search}%`];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      return res.status(500).json({ error: 'Failed to fetch products' });
    }
    res.status(200).json(results);
  });
}
