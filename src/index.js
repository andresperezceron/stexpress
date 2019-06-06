import express from 'express'
import favicon from 'serve-favicon'
import path from 'path'
import morgan from 'morgan'
import routes from './routes.js'

const srv = express();
const port = 7000;

srv.use(express.static("public"));
srv.use(morgan("dev"));
srv.use(favicon(path.join(__dirname, "../public", "favicon.ico")));
srv.use(routes);

srv.listen(port,() => {
    console.log(`Server working, listening on port: ${port}`);
});
