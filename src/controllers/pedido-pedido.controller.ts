import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Pedido
} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoPedidoController {
  constructor(
    @repository(PedidoRepository)
    public pedidoRepository: PedidoRepository,
  ) { }

  @get('/pedidos/{id}/pedido', {
    responses: {
      '200': {
        description: 'Pedido belonging to Pedido',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pedido)},
          },
        },
      },
    },
  })
  async getPedido(
    @param.path.string('id') id: typeof Pedido.prototype.id,
  ): Promise<Pedido> {
    return this.pedidoRepository.pedido(id);
  }
}
