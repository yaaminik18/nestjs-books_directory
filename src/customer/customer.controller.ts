import { Controller, HttpException, HttpStatus, Param, Get, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/Create.customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private customerService:CustomerService){}
     @Get()
     getAllCustomers(){
    return this.customerService.getCustomer();}

    @Post()
    postAll(@Req() req:Request){
        return req.body;
    }
     

    @Get(':username')
    getCustomer(@Param('username')username:string){
        const customer=this.customerService.findByname(username);
        if(customer)
        return customer
        else throw new HttpException('Customer not found!! oh hello',HttpStatus.BAD_REQUEST)
    }
    @Post('/post/create')
    createCustomer(@Body() createCustomerDto:CreateCustomerDto){
console.log(createCustomerDto);
return createCustomerDto;

this.customerService.CreateCustomer(createCustomerDto);
    }
con
}
