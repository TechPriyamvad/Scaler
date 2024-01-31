package Generics;

import java.util.concurrent.Callable;

public class Main {
    public static void main(String[] args) {
//        pair<Double,Integer> p = new pair<>();
//        System.out.println("generics");
//        pair.staticMethod('a',true);
//        p.doSomething(10,true);
//        pair p1 = new pair<>();
//        p1.setX(10);
//        p1.setY('a');
//        pair.addition(5,2);
        Assignment_coding_question1 a = new Assignment_coding_question1(10,20);
        pair<String,String> b = new pair<>();
        System.out.println(a.equals(b));
        System.out.println(a.hashCode());
    }
}
