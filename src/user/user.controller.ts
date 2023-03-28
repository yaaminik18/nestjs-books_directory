/*import { Body, Controller, Get, Post ,Param, Req} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { Patch } from '@nestjs/common/decorators';


@Controller('user')
export class UserController {
      private userService;
            constructor(userService:UserService){
            this.userService=userService;
                      OR
            constructor(){
            this.userService=new userService();
                      }
     }
    this code above is exactly similar to code below if.e., dependency injection*/
    /*constructor(private userService:UserService){};
   
    @Get()
    getUser(){
        return this.userService.get();
    }

    
    @Get(':id')
    findOne(@Param() param): string {
    return this.userService.find(param);
    //return `This action returns a ${params.id} cat`;
}
}*/
