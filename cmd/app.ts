import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils';
import * as express from 'express'
import { Container } from 'inversify';
import { ReviewContainer } from '../src/modules/review/review.container';
import { Logger } from '../pkg/logger';
import { Config } from '../pkg/config';
import { DataBase } from '../pkg/db';
import morgan from 'morgan'
import { urlencoded, json } from 'express';
import * as swagger from 'swagger-express-ts'
import path from 'path';

function bootstrap() {
  const container = new Container();

  container.bind(Logger).toDynamicValue(() => new Logger())
  container.bind(Config).toDynamicValue(() => new Config(
    'localhost',
    5432,
    'reviews',
    'root',
    'root',
    false,
    path.join(__dirname, '../', 'src/entities/dao/**/postgres/**/*dao.{ts,js}'),
    path.join(__dirname, '../', 'migrations/postgres/**/*.{ts,js}'),
  ))
  container.bind(DataBase).toDynamicValue((ctx) => {
    const db = new DataBase(
      ctx.container.get<Config>(Config),
      ctx.container.get<Logger>(Logger)
    )

    Promise.resolve(db.connect());

    return db;
  })

  container.load(new ReviewContainer());

  return container;
}

const container = bootstrap();

const server = new InversifyExpressServer(container, null, {'rootPath': '/api'});

server.setConfig((app) => {
  const logger = morgan('combined')

  app.use(logger)
  app.use(urlencoded({
    'limit': '10mb',
    'extended': true,
  }))
  app.use(json({
    'limit': '10mb',
  }))
  app.use( '/swagger' , express.static( 'swagger' ) );
  app.use( '/swagger/assets' , express.static( 'node_modules/swagger-ui-dist' ) );
  app.use( swagger.express(
      {
          definition : {
              info : {
                  title : "Reviews API" ,
                  version : "1.0"
              } ,
              // Models can be defined here
          }
      }
  ) );
})

server.setErrorConfig((app) => {
  //@ts-ignore
  app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
  });
});

const app = server.build()

app.listen({ port: 3000 }, () => {})

export default container.get(DataBase).connection
