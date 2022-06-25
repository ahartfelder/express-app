import { Request, Response } from "express";

function index(req: Request, res: Response){
    res.render('clients/index', { title: 'Clients' })
}

function show(req: Request, res: Response) {
    res.render('clients/show', { title: 'Client' })
}

export default { index, show };