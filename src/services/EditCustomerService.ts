import prismaClient from "../prisma";

interface EditCustomerProps {
    id: string;
    name: string;
    email: string;
}

class EditCustomerService { 
    async execute({ id, name, email }: EditCustomerProps) {
        if (!id) { throw new Error("Invalid Request!"); }

        const findCostumer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCostumer) {
            throw new Error("Customer not found!");
        }

        await prismaClient.customer.update({
            where: {
                id: findCostumer.id
            },
            data: {
                name: name,
                email: email
            }
        })

        return { message: "Updated Successfully!" }
    }
}

export { EditCustomerService };