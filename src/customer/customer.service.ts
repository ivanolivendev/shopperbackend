import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) {}

    async create(customer_code: string, name: string, email?: string): Promise<Customer> {
        const customer = this.customerRepository.create({ customer_code, name, email });
        return this.customerRepository.save(customer);
    }

    async findAll(): Promise<Customer[]> {
        return this.customerRepository.find();
    }

    async findOne(id: number): Promise<Customer> {
        return this.customerRepository.findOne({ where: { customer_id: id } });
    }

    async update(id: number, updateData: Partial<Customer>): Promise<Customer> {
        await this.customerRepository.update(id, updateData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.customerRepository.delete(id);
    }
}
