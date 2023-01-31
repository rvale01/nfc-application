import { app } from "../..";
import { Request, Response } from 'express';


app.get('/login', (req: Request, res: Response) => {
    const username = req.body.username
    const password = req.body.password

    
  })