export default defineEventHandler(async(event) =>{
    try{
        const res = await event.context.sql`SELECT * FROM users;`
        return res;
    }
    catch(err){
        throw createError({
            statusCode: 400,
            statusMessage:'bad request',
            message: "no users found!"
        })
    }
})