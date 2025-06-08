import prismaClient from "../prisma";

interface ReadCustomerProps {
    id: string;
}

class ReadCustomerService {
    async execute({ id }: ReadCustomerProps) {
        if (!id) { throw new Error("Invalid request!") }

        const catchCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!catchCustomer) {
            throw new Error("Customer not found!");
        }

        return catchCustomer;
    }
}

export { ReadCustomerService };