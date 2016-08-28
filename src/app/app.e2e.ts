describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have <FarmersMarketList>', () => {
    let subject = element(by.css('farmers-market-list')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

});
