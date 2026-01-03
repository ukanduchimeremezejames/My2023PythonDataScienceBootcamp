import express from 'express';
import { Request, Response } from 'express';
import { MyType } from './types/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// Additional routes and middleware can be set up here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});