import { MandatoryWebProPage } from './app.po';

describe('mandatory-web-pro App', function() {
  let page: MandatoryWebProPage;

  beforeEach(() => {
    page = new MandatoryWebProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
