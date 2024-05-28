package Access_modifier;

public class Client {
    public static void main(String[] args) {
        A a1 = new A();
        a1.x = 20;
        a1.y = 30;
        System.out.println(a1.getX());
        System.out.println(a1.getY());
    }
}
