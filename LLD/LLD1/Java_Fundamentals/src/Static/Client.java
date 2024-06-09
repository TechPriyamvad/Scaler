package Static;

import Access_modifier.pkg1.A;

public class Client {
    public static void main(String[] args){
        Static s1 = new Static();
        A a1 = new A();
        s1.fun();
        System.out.println(Static.sFun());
    }
}
