import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/hello', (req, res) => {
    const lang = req.query.language;
    let data;
    if (lang === "English")
        data = "Hello World";
    else if (lang === "Hindi")
        data = "Namastey sansar";
    else if (lang === "French")
        data = "Bonjour le monde";
    else
        data = "Invalid input language."
    // console.log(data);
    res.send({
        message: `I have received your language through GET request. This is what you sent me: ${data}`,
        language: lang,
        data: data,
        success: true
    });
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));