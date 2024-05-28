package Interface.looseCouplingDemo;

import com.sun.security.jgss.GSSUtil;

public class Harman implements MusicSystem{
    public void startMusic(){
        System.out.println("Staring Harman music system");
    }

    @Override
    public void stopMusic() {
        System.out.println("Stopping Harman music system");
    }
}
