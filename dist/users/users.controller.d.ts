import { UsersService } from './users.service';
import { RequestUserDto } from './dto/request-user.dto';
import { ResponseUserDTO } from './dto/response-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: RequestUserDto): Promise<ResponseUserDTO>;
    findAll(): Promise<ResponseUserDTO[]>;
    findOne(id: string): Promise<ResponseUserDTO>;
    update(id: string, updateUserDto: Partial<RequestUserDto>): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
