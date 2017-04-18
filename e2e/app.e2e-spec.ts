import { OtpappPage } from './app.po';

describe('otpapp App', () => {
  let page: OtpappPage;

  beforeEach(() => {
    page = new OtpappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
