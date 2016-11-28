import { Router } from 'express';
const johayoPvs = require('johayo-pvs');

/* 에러시 check를 하여 next(err)을 해준다. */
import { wrap } from '../module/utils.module';
import { LoginService } from '../service/login.service';

let router = Router();

/* 변수 체크 */
const loginVO = new johayoPvs({
    userId: {type: String, validate: {checkURL: ['!/api/login/token']}},
    password: {type: String, validate: {checkURL: ['/api/login']}},
    token: {type: String, validate: {checkURL: ['/api/login/token']}}
});
loginVO.setParams = (req: any, res: any, next: any) => {
    loginVO.set(req, res, next);
};

/**
 * 로그인 하기
 */
router.post('/', loginVO.setParams, wrap(async(req: any, res: any) => {
    const admin = await LoginService.login(loginVO.get.userId, loginVO.get.password);
    req.session.admin = admin;
    res.send(admin);
}));

/**
 * 로그인 정보 주기
 */
router.get('/', (req: any, res: any) => {
    res.json(req.session['admin']);
});

/**
 * 로그아웃
 */
router.get('/logout', wrap(async(req: any, res: any) => {
    req.session.destroy();
    res.end();
}));


export = router;