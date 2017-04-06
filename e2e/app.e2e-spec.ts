import { AnimateOnScrollTestPage } from './app.po';

describe('animate-on-scroll-test App', function() {
  let page: AnimateOnScrollTestPage;

  beforeEach(() => {
    page = new AnimateOnScrollTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
