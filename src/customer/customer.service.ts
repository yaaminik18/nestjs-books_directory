import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/Create.customer.dto';

@Injectable()
export class CustomerService {
    
    private users=[{
        name:"yamini",id:1,email:"yamini@gmail.com"
    },
    {
        name:"bhumik",id:2,email:"bhumik@gmail.com"
    }, {
        name:"judi",id:3,email:"judi@gmail.com"
    }]

findByname(username:string){
    return this.users.find((user)=>
        user.name===username
    )
}
CreateCustomer(customerDto:CreateCustomerDto){
    this.users.push(customerDto);
}
getCustomer(){
    return this.users;
}
}

