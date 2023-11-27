import Database from "better-sqlite3"

export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    event.context.sqlite = new Database(config.dbPath)
})