import { RequestUserDto } from './dto/request-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    create(createUserDto: RequestUserDto): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, updateUserDto: Partial<RequestUserDto>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
