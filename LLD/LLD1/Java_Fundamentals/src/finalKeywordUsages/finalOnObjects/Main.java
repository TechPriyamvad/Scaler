package finalKeywordUsages.finalOnObjects;

public class Main {
    public static void main(String[] args) {
        final A a = new A();
        a.a1 = 10;
        a.a2 = 20;
        //reference variable declared using final keyword cannot be re-referenced later
//        a = new B(); //error
    }
}
