package Access_modifier.pkg1;

public class Client{
    public static void main(String[] args) {
        A obj = new A();
        System.out.println(obj.a);
//        System.out.println(obj.b);
        System.out.println(obj.c);
        System.out.println(obj.d);
    }
}
