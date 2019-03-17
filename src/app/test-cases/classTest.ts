export class classTest {
    public cities = ['Belgaum', 'Bengaluru', 'Mumbai', 'Satara'];

    getCity() {
        return this.cities;
    }

    setCity(city) {
        this.cities.push(city);
    }
}