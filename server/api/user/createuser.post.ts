export default defineEventHandler(async(event) =>{
    try{
        const body = await readBody(event)
        await event.context.sql`INSERT INTO users(name, password) VALUES (${body.name}, ${body.password});`
        return { message:'created!' };
    } catch(err){

        throw createError({
            statusCode: 400,
            statusMessage:`${err}`,
            message: "Could not create user :("
        })
    }
})