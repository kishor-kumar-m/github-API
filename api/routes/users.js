import express from 'express'
const router = express.Router();

import { commits, repos, userinfo } from '../controllers/users';

router.get('/github/userinfo/:user',userinfo);

router.get('/github/repos/:user/:reponame',repos);

router.get('/github/commits/:user/:reponame',commits);




module.exports = router;