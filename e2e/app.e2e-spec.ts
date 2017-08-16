import { AtrisFrontPage } from './app.po';

describe('atris-front App', function() {
  let page: AtrisFrontPage;

  beforeEach(() => {
    page = new AtrisFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
