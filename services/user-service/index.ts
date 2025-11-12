import {Context} from "hono";
import app from './src/app'

app.onError((err: Error, c: Context) => {
	console.error(err.message)
	return c.json({ ok: false, message: 'Internal Server Error', statusCode: 500, time: new Date().toISOString() })
})


// Route not found errors
app.notFound((c:Context) =>{
	console.log(c.req.url)
	return c.json({ ok: false, message: 'This path doesnt exist' +
			' in time',statusCode:400, time: new Date().toISOString() })
})


export default {
	port: 4000,
	fetch: app.fetch
}