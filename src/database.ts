import Database from 'better-sqlite3'
import path from 'path'

const DB_PATH = path.resolve(__dirname, '../dict.db')
const db = new Database(DB_PATH)

export const getIdiom = (str: string) =>
  db.prepare('SELECT * FROM idiom WHERE word = ?').get(str)
