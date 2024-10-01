import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { main, auth, users, accounts, transactions } from '@/routes'

const port = process.env.API_PORT || 3030
const app = new Hono()

app.use('*', cors())

app.route('/', main)
app.route('/auth', auth)
app.route('/users', users)
app.route('/accounts', accounts)
app.route('/transactions', transactions)

export default { port, fetch: app.fetch } 
