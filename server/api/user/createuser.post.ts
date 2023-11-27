export default defineEventHandler(async(event) =>{
    try{
        const body = await readBody(event)
        event.context.sqlite
        .prepare('INSERT INTO person(name, last_name) VALUES (@name, @last_name)')
        .run({ name:body.name, last_name:body.lastname })
        return { message:'created!' };
    }
    catch(err){
        throw createError({
            statusCode: 400,
            statusMessage:'bad request',
            message: "Could not create user :("
        })
    }
})