import express from "express";
import {profiles} from "./routes/profiles.js"

const app = express();

app.use(express.json())

app.get('/test', (_, res) => res.send('This Works'));

app.use('/api/profiles', profiles);

const port = process.env.PORT || 5000;
const callback = () => console.log(`Server is running on port ${port}`);

app.listen(port, callback);
