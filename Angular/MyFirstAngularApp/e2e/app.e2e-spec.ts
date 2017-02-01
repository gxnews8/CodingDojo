import { MyFirstAngularAppPage } from './app.po';

describe('my-first-angular-app App', function() {
  let page: MyFirstAngularAppPage;

  beforeEach(() => {
    page = new MyFirstAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
