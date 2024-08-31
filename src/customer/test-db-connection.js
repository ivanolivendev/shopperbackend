const { createConnection } = require('typeorm');
const { Customer } = require('./src/customer/customer.entity'); // Ajuste o caminho conforme necessário

async function testDatabaseConnection() {
  try {
    // Configuração de conexão com o banco de dados
    const connection = await createConnection({
      type: 'postgres',
      host: 'localhost', // Altere para 'db' se estiver usando Docker e o nome do serviço
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Customer],
      synchronize: true,
    });

    console.log('Conexão bem-sucedida com o banco de dados!');

    // Teste uma consulta simples
    const customerRepository = connection.getRepository(Customer);
    const customers = await customerRepository.find();
    console.log(`Número de clientes encontrados: ${customers.length}`);

    // Fechar a conexão
    await connection.close();
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
  }
}

testDatabaseConnection();
