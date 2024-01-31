package Lambdas_And_Streams;

import java.util.function.Function;

public class Printer implements Runnable {
    public void run(){
        System.out.println("Hello World" + Thread.currentThread().getName());
    }
    public static int calculate(int a, Function<Integer,Integer> mathOperation){
        return mathOperation.apply(a);
    }
}
