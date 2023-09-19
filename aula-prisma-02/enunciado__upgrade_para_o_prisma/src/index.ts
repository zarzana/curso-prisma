import db from "./database/database";

(async () => {
  const result = await db.query(`
    SELECT * FROM posts
  `);

  const posts = result.rows;
  console.log("Posts encontrados no banco:", posts);
})();