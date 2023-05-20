import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import {z} from 'zod'
import { prisma } from "../lib/prisma";

export async function Products(app: FastifyInstance) {
  app.post('/products', async (request, reply) => {
    // Tipagem dos dados do produto
    const productSchema = z.object({
      name: z.string(),
      price: z.number(),
    })
  
    // Validação dos dados do produto
    const { name, price } = productSchema.parse(request.body);
  
    // Criação do produto
    const newProduct = await prisma.products.create({
      data: {
        id: randomUUID(),
        name,
        price,
      },
    })
    //  Retorno do produto criado
    return reply.status(201).send(newProduct)
  })
  app.get('/products', async () => {
    const products = await prisma.products.findMany()
    return products
  })
}