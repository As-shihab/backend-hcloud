import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import Database from "./src/Config/database";
dotenv.config();

class Server {
  private app: Application;
  private port: number;
  private mysql = new Database();

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3000;
    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public start(): void {
    this.app.listen(this.port, () => {
      this.mysql.Mysql().connect((err: any, good: any) => {
        if (err) {
          console.log("Somthing went wrong during conncect mysql");
        }

        if (good.connectionId) {
          console.log("MYSQL DATABASE CONNECTED with id ->", good.connectionId);
        }
      });
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
