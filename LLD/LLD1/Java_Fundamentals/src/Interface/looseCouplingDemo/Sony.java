package Interface.looseCouplingDemo;

public class Sony implements MusicSystem{
   public void startMusic(){
        System.out.println("Staring Sony music system");
    }

    @Override
    public void stopMusic() {
        System.out.println("Stopping Sony music system");
    }
}
