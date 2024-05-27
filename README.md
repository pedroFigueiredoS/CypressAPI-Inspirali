Projeto Cypress para Teste de API
Este projeto utiliza o Cypress para realizar testes automatizados em uma API RESTful. Ele verifica o status da API e a estrutura da resposta para garantir que os dados estejam corretos.

Pré-requisitos
Antes de iniciar, certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

Node.js
npm (gerenciador de pacotes do Node.js)
Configuração do Projeto
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-projeto-cypress.git
cd seu-projeto-cypress
Instale as dependências do projeto:

bash
Copiar código
npm install
Configuração do Cypress
Certifique-se de que o Cypress está configurado corretamente para acessar a API. Você pode configurar variáveis de ambiente ou ajustar as configurações no arquivo cypress.json.

Exemplo de cypress.json:

json
Copiar código
{
  "baseUrl": "https://cloudapp-dev.animaeducacao.com.br/inspira-sv-backend/api",
  "env": {
    "CYPRESS_TOKEN": "seu-token-de-autorizacao"
  }
}
Executando os Testes
Para rodar os testes, execute o seguinte comando:

bash
Copiar código
npx cypress run
Este comando executa todos os testes no modo headless (sem interface gráfica). Os resultados serão exibidos no terminal.

Teste de Exemplo
O teste de exemplo abaixo verifica o endpoint GetAllProcessList da API:

javascript
Copiar código
describe('Appointment API Tests', () => {
  const baseUrl = 'https://cloudapp-dev.animaeducacao.com.br/inspira-sv-backend/api/AcademicProcess/GetAllProcessList';
  const token = Cypress.env('CYPRESS_TOKEN');

  it('Deve retornar status 200 e verificar estrutura da resposta', () => {
    cy.request({
      method: 'GET',
      url: baseUrl,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('success', true);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.property('hasMoreProcess', true);
      expect(response.body.data).to.have.property('academicProcessSelectList').that.is.an('array').and.not.empty;
    });
  });
});
Este teste verifica se a API retorna status 200, se a resposta contém um campo success verdadeiro, se existe a propriedade data na resposta, se hasMoreProcess é verdadeiro e se academicProcessSelectList é um array não vazio.

// Banco de dados

npm install pg

// Env

npm install dotenv
