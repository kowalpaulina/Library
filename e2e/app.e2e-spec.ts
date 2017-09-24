import { PaulinaAppPage } from './app.po';

describe('paulina-app App', () => {
  let page: PaulinaAppPage;

  beforeEach(() => {
    page = new PaulinaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
