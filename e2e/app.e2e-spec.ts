import { DbAnonymizerPage } from './app.po';

describe('db-anonymizer App', () => {
  let page: DbAnonymizerPage;

  beforeEach(() => {
    page = new DbAnonymizerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to db!!');
  });
});
