import request from 'supertest'
import app from '../../../';

describe('Character Controller', () => {
    it('get /characters should return 200', async done => {
      request(app)
        .get(`/api/characters`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })

    it('get /character/:id should return 200', async done => {
        request(app)
          .get(`/api/characters/1234`)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            done()
          })
      })
  })