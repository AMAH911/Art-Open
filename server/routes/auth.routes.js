import express from 'express'
import authDtrl from '../controllers/auth.controller'


const router = express.Router()

router.route('auth/signin')
.post(authCtrl.signin)
router.route('/auth/signout')
.get(authCtrl.signout)

export default router

