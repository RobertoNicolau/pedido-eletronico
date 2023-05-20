import  Fastify  from 'fastify';
import { Products } from './routes/products';

const app = Fastify();
app.register(Products);

app.listen({
  port: 2469,
  host: '0.0.0.0',
}).then(() => {
  console.log('\n🚀 Server started');
})