import Grafcan from '../src/grafcanProvider';

describe('Grafcan Provider', () => {

  it('Should get an array of results from grafcan API', (done) => {
    let provider = new Grafcan();
    provider.search({ query: "tenerife" }).then(response => {
      expect(response.length).toEqual(20);
      done();
    });
  });

  it('Should return results with "label", "x" and "y" properties', (done) => {
    let provider = new Grafcan();
    provider.search({ query: "tenerife" }).then(response => {
      let result = response[0];
      expect(result.label).toEqual(jasmine.any(String));
      expect(result.x).toEqual(jasmine.any(Number));
      expect(result.y).toEqual(jasmine.any(Number));
      done();
    });
  });

});
