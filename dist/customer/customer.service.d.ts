import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
export declare class CustomersService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    create(customer_code: string, name: string, email?: string): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    update(id: number, updateData: Partial<Customer>): Promise<Customer>;
    remove(id: number): Promise<void>;
}
