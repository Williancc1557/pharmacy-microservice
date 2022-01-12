import { app } from "./app";

const portaLocal = 3000;
const portaHost = process.env.PORT;
const PORTA = portaHost || portaLocal;

app.listen(PORTA);