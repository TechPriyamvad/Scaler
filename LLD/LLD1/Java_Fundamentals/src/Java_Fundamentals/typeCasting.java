package Java_Fundamentals;

public class typeCasting {
    public static void main(String[] args) {
        /*
        * Type Casting
        * Widening
        * Explicit
        */

//        Widening: converting type from smaller to larger
        int x= 1000;
        long y = x;

//        Explicit: storing larger container data into smaller container data
        int s1 = 1000000;
        byte s2 = (byte)s1;
        System.out.println(s2);
    }
}
