import get from 'utils/get';

it('get() works as expected', () => {
  const title = 'This is a test title';
  const object = {
    entries: [
      {
        title: title
      }
    ]
  };

  expect(get(object, 'entries[0].title')).toEqual(title);
});
