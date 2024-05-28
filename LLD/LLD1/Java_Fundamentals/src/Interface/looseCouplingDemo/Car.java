package Interface.looseCouplingDemo;

public class Car {

    //loosely coupled: we can plug music system of any class
    MusicSystem mS;

    void startCarMusic(){
        mS.startMusic();
    }

    void stopCarMusic(){
        mS.stopMusic();
    }
}
