import express, { Router } from 'express';
import connectToDatabase from './connection';
import errorMiddleware from './middlewares/error.middleware';
import carRouter from './routes/car.routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.configure();
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  private configure() {
    this.app.use(carRouter);
    this.app.use(errorMiddleware);
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
