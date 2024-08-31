# Projeto de Gestão de Consumo de Água e Gás

## Problema Proposto

O desafio proposto consistia em desenvolver um serviço de back-end para gerenciar a leitura individualizada de consumo de água e gás. O sistema deveria permitir a coleta de dados através de imagens de medidores, utilizando uma API de inteligência artificial (IA) para extrair as medições. O objetivo era criar uma API RESTful que pudesse receber, processar e armazenar essas informações de forma eficiente e segura.

## Escolha de Tecnologias

Para a implementação deste projeto, optei por utilizar NestJS, PostgreSQL e Docker:

- **NestJS**: Escolhi o NestJS por ser um framework robusto e escalável para Node.js, que facilita a construção de aplicações server-side. Sua arquitetura modular e suporte a TypeScript proporcionam uma base sólida para o desenvolvimento, além de facilitar a manutenção e a testabilidade do código.

- **PostgreSQL**: A escolha do PostgreSQL se deu por sua confiabilidade, robustez e suporte a recursos avançados, como transações e integridade referencial. Ele é ideal para aplicações que requerem um banco de dados relacional com alta performance e escalabilidade.

- **Docker**: A utilização de containers Docker permite a criação de um ambiente isolado e consistente para a aplicação, facilitando o desenvolvimento, testes e implantação. Com o Docker, é possível garantir que a aplicação funcione da mesma forma em diferentes ambientes, evitando problemas de configuração.

## Recursos Criados

Durante o desenvolvimento, foram criados os seguintes recursos (endpoints) para lidar com os desafios da aplicação:

- **POST `/upload`**:  
  Este endpoint é responsável por receber uma imagem em base64, consultar a API de IA (Google Gemini) e retornar a medida lida. Ele valida os dados recebidos e verifica se já existe uma leitura para o mês atual, garantindo que não haja duplicidade.

- **PATCH `/confirm`**:  
  Este endpoint permite confirmar ou corrigir o valor lido pelo LLM. Ele valida os dados dos parâmetros enviados, verifica se o código de leitura existe e se já foi confirmado, e então salva o novo valor no banco de dados. Isso assegura a integridade dos dados e evita confirmações duplicadas.

- **GET `/<customer_code>/list`**:  
  Este endpoint lista as medidas realizadas por um cliente específico. Ele filtra as leituras com base no código do cliente e, opcionalmente, permite filtrar por tipo de medição (água ou gás). Isso proporciona uma maneira eficiente de acessar as informações de consumo.

## Melhores Práticas e Desafios

Durante o desenvolvimento, implementei as melhores práticas, como a validação de dados, tratamento de erros e a utilização de um padrão de arquitetura modular. No entanto, enfrentei um pequeno problema relacionado à conexão da aplicação com o banco de dados, o que me impediu de prosseguir com a finalização do projeto.

Como analista de sistemas com mais de 3 anos de experiência, estou em transição para a área de programação. O tempo disponível para este desafio foi curto, e se eu tivesse mais uma semana, não apenas resolveria o problema de conexão, mas também implementaria melhorias adicionais na aplicação, como testes automatizados e otimizações de performance.

## Conclusão

Em resumo, o projeto foi uma excelente oportunidade para aplicar conhecimentos em desenvolvimento de back-end, utilizando tecnologias modernas e práticas recomendadas. Estou ansioso para continuar aprimorando minhas habilidades e contribuir de forma significativa em projetos futuros.

---

**Meu LinkedIn:** [Ivan Oliveira](https://www.linkedin.com/in/ivanolivendev/)
