package Interface.looseCouplingDemo.CarMusicSystem;

public class JBL implements MusicSystem{
    public void startMusic(){
        System.out.println("Staring JBL music system");
    }

    @Override
    public void stopMusic() {
        System.out.println("Stopping JBL music system");
    }
}
