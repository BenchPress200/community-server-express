import express from 'express'; 
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';

import { FRONTEND_IP_PORT } from './global.js';
import userRouter from './routes/userRouter.js';
import postRouter from './routes/postRouter.js';


const app = express();
const port = 8081; 

app.use(cors({
    origin: `${FRONTEND_IP_PORT}`,
    credentials: true 
}));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(port, () => { 
    console.log(`====================================== COMMUNITY BACKEND SERVER START ! ======================================`);
    console.log(`PORT NUMBER -> ${port}`);
});
