export default defineEventHandler(async (event) => {


    // handle query params

    const { route } = getQuery(event)

    const { code, text } = await readBody(event)


    return {
        message: `testing. route: ${route}, code: ${code}, ${text}`,
    }

})