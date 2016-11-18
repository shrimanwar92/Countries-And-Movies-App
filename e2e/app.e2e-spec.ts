import { CountriesAppClientPage } from './app.po';

describe('countries-app-client App', function() {
  let page: CountriesAppClientPage;

  beforeEach(() => {
    page = new CountriesAppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
