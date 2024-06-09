package Interface.looseCouplingDemo.CarMusicSystem;

public class Client {
    public static void main(String[] args) {
        Car car = new Car();
        //plugging harman music system in car
        car.mS = new Harman();
        car.startCarMusic();
        car.stopCarMusic();

        //plugging JBL music system in car
        car.mS = new JBL();
        car.startCarMusic();
        car.stopCarMusic();

        //plugging Sony  music system in car
        car.mS = new Sony();
        car.startCarMusic();
        car.stopCarMusic();
    }

}
