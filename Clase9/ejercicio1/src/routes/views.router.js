import {Router} from "express";

const router = Router();

const food = [
    { name: "Pizza", price: 1000},
    { name: "Hamburguesa", price: 500},
    { name: "Pollo frito", price: 1500},
    { name: "Sanguche de vacio", price: 2000},
    { name: "Papas fritas", price: 300}

];

router.get('/', (req,res) =>{
    const user = {
        name: 'Noelia',
        role: 'admin'        
    };
    res.render('index', {
        user,
        isAdmin: user.role==='admin',
        food

    });
});
 
router.get('/register', (req, res) =>{
    res.render('register');
});

export default router;