import { CustomersService } from './customer.service';
import { Customer } from './entities/customer.entity';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(customerData: {
        customer_code: string;
        name: string;
        email?: string;
    }): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    update(id: number, updateData: Partial<Customer>): Promise<Customer>;
    remove(id: number): Promise<void>;
}
