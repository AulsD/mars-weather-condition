const app  = require('./app')

const port = process.env.PORT || 5002

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

