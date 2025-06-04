import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCostumerService } from "../services/DeleteCostumerService";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const costumerService = new DeleteCostumerService();

        const { id } = request.query as { id: string }
        const customer = await costumerService.execute({ id });

        reply.send(customer);
    }
}

export { DeleteCustomerController };