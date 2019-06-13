import * as express from "express";
import * as cors from "cors";
import {pingController} from "./controllers/ping";
const app = express();

app.use(cors());
app.use(pingController);

// error handler
app.use(function (err: any, req: any, res: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({err: err.message});
});


export default app;
