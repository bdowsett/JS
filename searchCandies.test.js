const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns Maltesers, Mars and Mentos', () => {
    expect(searchCandies('M', 10)).toEqual([ 'Maltesers', 'Mars', 'Mentos' ])
  });

    it('returns Mars', () => {
      expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
    });

        it('returns Skitties, Skittles and Starburst', () => {
          expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
        });

            it('returns Skitties and Skittles', () => {
              expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
            });
});