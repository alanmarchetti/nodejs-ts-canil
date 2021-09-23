import { Request, Response} from 'express';
import  { Pet } from '../models/Pet';
import { createMenuObejct } from '../helpers/createMenuObject'


export const search = (req: Request, res: Response) => {

    let query: string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    let list  = Pet.getFromName(query)

    res.render('pages/pages', {
        menu: createMenuObejct(''),
        list,
        query
    });

};