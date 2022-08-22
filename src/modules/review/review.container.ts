import { DataBase } from '@pkg/db';
import { Container, ContainerModule } from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { ReviewController, ReviewControllerSymbol } from './delivery/http/controllers/review/review.controller';
import { ReviewDaoEntitySymbol, ReviewDaoEntity } from './repository/review/postgres/dao/review.dao-postgres';
import { ReviewRepositoryImpl } from './repository/review/postgres/review.postgres-repository';
import { ReviewRepositorySymbol } from './repository/review/review.interface-repository';
import { ReviewUseCase, ReviewUseCaseSymbol } from './use-case/review/review.use-case';

Container
export class ReviewContainer extends ContainerModule {
  constructor() {
    super((bind) => {
      bind<interfaces.Controller> (TYPE.Controller)
        .to(ReviewController).inSingletonScope().whenTargetNamed(ReviewControllerSymbol);

      bind<ReviewUseCase>(ReviewUseCaseSymbol).toDynamicValue((ctx) => {
          return new ReviewUseCase(
            ctx.container.get(ReviewRepositorySymbol)
          )
      }).inSingletonScope();
      bind(ReviewDaoEntitySymbol).toDynamicValue((ctx) => {
        return ctx.container.get<DataBase>(DataBase).getRepository(ReviewDaoEntity)
      })
      bind(ReviewRepositorySymbol).to(ReviewRepositoryImpl)
      bind(ReviewControllerSymbol).to(ReviewController)
    })
  }
}
