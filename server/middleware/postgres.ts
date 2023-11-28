// import Database from "better-sqlite3"
import postgres from 'postgres'

export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    event.context.sql = postgres(config.postgresUrl)
})