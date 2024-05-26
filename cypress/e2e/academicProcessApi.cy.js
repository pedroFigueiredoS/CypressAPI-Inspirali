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
      expect(response.body.data).to.have.property('academicProcessSelectList').that.is.an('array').and.not.empty; //Garante que o Array não está vazio
    });
  });
});
