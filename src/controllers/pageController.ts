import { Request, Response} from 'express';
import { createMenuObejct } from '../helpers/createMenuObject'
import { Pet } from '../models/Pet'

export const home = (req: Request, res: Response) => {
    
    let list = Pet.getAll();
    
    res.render('pages/pages', {
        menu: createMenuObejct('all'),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        list
    })
};

export const dogs = (req: Request, res: Response) => {
    
    let list = Pet.getFromType('dog');
    
    res.render('pages/pages', {
        menu: createMenuObejct('dog'),
        banner: {
            title: "Todos os cachorros",
            background: "banner_dog.jpg"
        },
        list
    })
};

export const cats = (req: Request, res: Response) => {
    
    let list = Pet.getFromType('cat');

    res.render('pages/pages', {
        menu: createMenuObejct('cat'),
        banner: {
            title: "Todos os gatos",
            background: "banner_cat.jpg"
        },
        list
    })
};

export const fishes = (req: Request, res: Response) => {
   
    let list = Pet.getFromType('fish');
   
    res.render('pages/pages', {
        menu: createMenuObejct('fish'),
        banner: {
            title: "Todos os peixes",
            background: "banner_fish.jpg"
        },
        list
    })
};

