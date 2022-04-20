import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
        //Replace this line with the one Cluster > Connect > Connect your Application
        `http://127.0.0.1:27017/`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
