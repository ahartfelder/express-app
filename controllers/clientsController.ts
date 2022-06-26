import { Request, Response } from "express";
import ClientRepository, { Clients } from "../models/clientsModel";

async function index(req: Request, res: Response){
    const clients = await ClientRepository.findAll()
    res.render('clients/index', { title: 'Clients', clients: clients })
}

async function show(req: Request, res: Response) {
    const client = await ClientRepository.findByPk(req.params.id);
    console.log(client)
    res.render('clients/show', { title: 'Client', client: client })
}

async function create(req: Request, res: Response) {
    res.render('clients/create', { title: 'New Client' })
}

async function store(req: Request, res: Response) {
    console.log(req.body)
    try {
        await ClientRepository.create(req.body as Clients)
        res.redirect('clients')
    } catch(error) {
        console.log(error)
        res.status(500).end()
    }
}

async function edit(req: Request, res: Response) {
    try {
        const client = await ClientRepository.findByPk(req.params.id)
        if(client === null){
            res.status(404).send('Not Found')
        } else {
            res.status(200).render('clients/edit', { title: 'Edit Client', client: client })
        }
    } catch(error) {
        console.log(error)
        res.status(500).end()
    }
}

async function update(req: Request, res: Response) {
    try {
        await ClientRepository.update(req.body as Clients, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/clients')
    } catch(error) {
        console.log(error)
        res.status(500).end()
    }
}

async function destroy(req: Request, res: Response) {
    try {
        await ClientRepository.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/clients')
    } catch(error) {
        console.log(error)
        res.status(500).end()
    }
}

export default { index, show, create, store, edit, update, destroy };