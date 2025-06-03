import prismaClient from "../prisma";

class CreateCustomerService {
    async execute() {
        console.log("Route called! 200 OK")

        return { ok: true }
    }
}

export { CreateCustomerService };