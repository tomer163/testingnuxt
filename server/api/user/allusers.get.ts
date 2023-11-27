export default defineEventHandler((event) =>{
    try{
        const res = event.context.sqlite
        .prepare('SELECT * FROM person;')
        .all()
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