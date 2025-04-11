//Matheus Cardoso
import { Estado } from "../models/Estado.js";

class EstadoService {

    static async findAll() {
        return await Estado.findAll();
    }

    static async findByPk(req) {
        const { id } = req.params;
        return await Estado.findByPk(id);
    }

    static async create(req) {
        const { peso, altura, taxaGordura, circunferenciaCintura, circunferenciaBraco, comentarios, cliente, nutricionista } = req.body;

        if (cliente == null) throw 'Cliente invalido!';
        
        // Define o today pra checar se outro estado foi criado hoje, já retirando a hora
        const today = new Date().toISOString().split('T')[0];
        
        // Busca de um registro no dia de hoje
        const existingToday = await Estado.findOne({
            where: {
                data: today,
            },
        });
        
        // Faz a verificação em si
        if (existingToday) {
            throw new Error('Já existe um Estado criado hoje.');
        }
        
        if (nutricionista == null) throw 'Nutricionista invalido!';

        const obj = await Estado.create({ peso, altura, taxaGordura, circunferenciaCintura, circunferenciaBraco, comentarios, clienteId: cliente.id, nutricionistaId: nutricionista.id });
        return await Estado.findByPk(obj.id, { include: { all: true, nested: true } });   
    }

    static async update(req) {
        const { id } = req.params;
        const { peso, altura, taxaGordura, circunferenciaCintura, circunferenciaBraco, comentarios, clienteId, nutricionistaId } = req.body;
        let obj = await Estado.findOne({ where: { id } });

        Object.assign(obj, { peso, altura, taxaGordura, circunferenciaCintura, circunferenciaBraco, comentarios, clienteId, nutricionistaId });
        return await obj.save();
    }

    static async delete(req) {
        const { id } = req.params;
        let obj = await Estado.findByPk(id);
        return await obj.destroy();
    }
}

export { EstadoService };