describe('Testes com DB', () => {
    it('deve executar uma query no banco de dados', () => {
      cy.task('queryDb', 'select * from ingressar_gvc."Users" u order by "Name" ').then((result) => {
        expect(result).to.have.length(17);
      });
    });
  });
  