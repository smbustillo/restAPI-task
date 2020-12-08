//para dar orden a la aplicación
import {Router} from 'express'

const router = Router()


router.get('/', (req,res) => {
    res.send('Tasks')
})

// para poder ser usado en el proyecto
export default router;
