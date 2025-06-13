import prismaClient from "../prisma/";

interface CreateCustomerProps{
    name: string;
    email: string;
}

class CreateCustomerService {
    async execute({ name, email }: CreateCustomerProps) {

        if(!name || !email) {
            throw new Error("Fill in the fields");
        }

        const isEmailRepeated = await prismaClient.customer.findFirst({
            where: {
                email: email
            }
        })

        if (isEmailRepeated) { throw new Error("This e-mail cannot be used!") }
        
        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })

        return customer
    }
}

export { CreateCustomerService };