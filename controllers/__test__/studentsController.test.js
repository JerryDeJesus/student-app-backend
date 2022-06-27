const app = require('../../app');
const supertest = require('supertest');

describe('returns json data for all students', () => {
    it('return an obj with all students', async () => {
        await supertest(app).get('/students')
        .expect(200)
        .then((response) => {
            expect(response.body.students[0].firstName).toBeInstanceOf(Array)
        })
    } )
})