import { IsEmail , IsNotEmpty,  IsNumberString, IsString} from "class-validator";


 export class CreateCustomerDto{
   @IsEmail()
    email:string;

    @IsNumberString()
    @IsNotEmpty()
    id:number;

    @IsString()
    name:string;
 }