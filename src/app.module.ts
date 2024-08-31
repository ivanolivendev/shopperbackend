import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customer/customer.module';
import { MeasureModule } from './measure/measure.module';
import { ReadingModule } from './reading/reading.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true, // Carrega todas as entidades automaticamente
      synchronize: true, // Sincroniza o banco de dados com as entidades
    }),
    UsersModule,
    CustomersModule,
    MeasureModule,
    ReadingModule, // Removida a duplicação
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}