
import express from 'express';
import { newMessage ,getMessages} from '../controller/message-controller.js';

import { newConversation ,getConversation} from '../controller/conversation-controller.js';

import { addUser ,getUsers} from '../controller/user-controller.js';
import { uploadImage ,getImage} from '../controller/Image-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();





router.post('/add',addUser);
router.get('/users',getUsers);

router.post('/conversation/add',newConversation);
router.post('/conversation/get',getConversation);

router.post('/message/add',newMessage);
router.get('/message/get/:id',getMessages);

router.post('/file/upload',upload.single("file"),uploadImage);

router.get('/file/:filename',getImage);

export default router;
