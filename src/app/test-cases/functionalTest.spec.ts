import { add } from './functionalTest';
describe('Functional Test >>>', () => {

    it('get -ve values and return 0', () =>{
        var result = add(-1);
        expect(result).toBe(0);
    });
    it('get +ve values and return sum', () =>{
        var result = add(3);
        expect(result).toBe(5);
    });
});