import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCostumerController";
import { EditCustomerController } from "./controllers/EditCustomerController";
import { ReadCostumerController } from "./controllers/ReadCustomerController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get("/customers", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply)
    })

    fastify.get("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ReadCostumerController().handle(request, reply)
    })

    fastify.delete("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })

    fastify.patch("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new EditCustomerController().handle(request, reply)
    })
}