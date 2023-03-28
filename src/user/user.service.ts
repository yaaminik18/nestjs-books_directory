import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './user.dto';
import { USER_REPOSITORY } from 'src/constants';

@Injectable()
export class UserService {

    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

    async create(user: UserDto): Promise<User> {
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { email } });
    }

    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { id } });
    }
}
/*import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    get(){
        return{"name":"yamini","email":"yami@gmail.com"}
    }
    create(body:any){
        console.log(body);
        return body;
    }
    find(param:string){
        return param;
    }
    
}*/


