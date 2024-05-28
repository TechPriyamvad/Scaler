package Access_modifier;

public class B {
    void getValue(){
        A a1 = new A();
        a1.x = 20;
        a1.y = 30;
        System.out.println(a1.getX());
        System.out.println(a1.getY());
    }
}
