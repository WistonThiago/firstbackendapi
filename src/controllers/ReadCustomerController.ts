import { FastifyRequest, FastifyReply } from "fastify";
import { ReadCustomerService } from "../services/ReadCustomerService";

class ReadCostumerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const readCustomer = new ReadCustomerService();

        const { id } = request.query as { id: string };
        const customer = await readCustomer.execute({ id });
        
        reply.send(customer);
    }
}

export { ReadCostumerController };