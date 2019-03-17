import {classTest} from './classTest'
describe('Class test start >>', () =>{
    let city: classTest;

    // run before every each test
    beforeEach(() => {
        city = new classTest();
    });
     // run After every each test
    afterEach(() => {

    });

    it('Should check city which is available in array >>>', () =>{
        const cities = city.getCity();
        expect(cities).toContain("Mumbai");
        expect(cities).toContain("Bengaluru");
    });
});