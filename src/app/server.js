const app = require('./app');

const port = 8082;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});