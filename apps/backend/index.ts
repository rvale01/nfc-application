import express, { Express, Request, Response } from 'express';
import cors from 'cors'

const app = express()
const port = 5000

app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/workspaces', (_, response) => {
  const workspaces = [
    { name: 'api', version: '1.0.0' },
    { name: 'types', version: '1.0.0' },
    { name: 'web', version: '1.0.0' },
  ]
  response.json({ data: workspaces })
})