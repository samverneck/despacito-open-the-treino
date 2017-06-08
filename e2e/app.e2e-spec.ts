import { DespacitoPage } from './app.po';

describe('despacito App', () => {
  let page: DespacitoPage;

  beforeEach(() => {
    page = new DespacitoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
