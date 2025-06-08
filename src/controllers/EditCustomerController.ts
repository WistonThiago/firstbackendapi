import { FastifyRequest, FastifyReply } from "fastify";
import { EditCustomerService } from "../services/EditCustomerService";

class EditCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) { 
        const editCustomer = new EditCustomerService();

        const { id } = request.query as { id: string };
        const { name, email } = request.body as { name: string, email: string };

        const customer = await editCustomer.execute({ id, name, email });
        
        reply.send(customer)
    }
}

export { EditCustomerController };