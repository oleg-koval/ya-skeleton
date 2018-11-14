describe('General tests, remove later', () => {
  it('/debug/test: should return 200', () => {
    return request(app)
      .post('/debug/test')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(({ body }) => {
        expect(body.another).to.equal(1);
      });
  });

  it('/debug/error: should return 500', () => {
    return request(app)
      .post('/debug/error')
      .expect(500)
      .expect('Content-Type', /json/);
  });
});
