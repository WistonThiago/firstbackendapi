import prismaClient from "../prisma";

interface DeleteCostumerProps {
    id: string;
}

class DeleteCostumerService {
    async execute({ id }: DeleteCostumerProps) {
        if (!id) {
            throw new Error("Invalid request!");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Customer not found!");
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Deleted Successfully" }
    }
}

export { DeleteCostumerService };