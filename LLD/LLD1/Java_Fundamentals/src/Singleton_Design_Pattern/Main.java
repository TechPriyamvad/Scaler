package Singleton_Design_Pattern;

public class Main {
    public static void main(String[] args){
//        we can't create object of singleton class
//        Singleton s1 = new Singleton();
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();

        System.out.println(s1.toString());
        System.out.println(s2.toString());
    }
}
