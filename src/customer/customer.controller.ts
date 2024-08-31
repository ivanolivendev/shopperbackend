import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CustomersService } from './customer.service';
import { Customer } from './entities/customer.entity';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Post()
    create(@Body() customerData: { customer_code: string; name: string; email?: string }): Promise<Customer> {
        return this.customersService.create(customerData.customer_code, customerData.name, customerData.email);
    }

    @Get()
    findAll(): Promise<Customer[]> {
        return this.customersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Customer> {
        return this.customersService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateData: Partial<Customer>): Promise<Customer> {
        return this.customersService.update(id, updateData);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.customersService.remove(id);
    }
}
