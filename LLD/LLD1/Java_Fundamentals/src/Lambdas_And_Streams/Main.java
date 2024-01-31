package Lambdas_And_Streams;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {
    public static void main(String args[]){
//        Thread t1 = new Thread(new Printer());
//        t1.start();
////        implementing run abstract method of Runnable interface using lambda exp
//        Thread t2 = new Thread(()->System.out.println("Hello world"+Thread.currentThread().getName()));
//        t2.start();
//        MathOperation addition = (a,b)->  a + b;
//        MathOperation subtraction = (a,b)-> a - b;
//        System.out.println(addition.operate(10,20));
//        System.out.println(subtraction.operate(40,20));
//
//        Function<Integer,Integer> add = (a)->a+5;
//        Function<Integer,Integer> sub = (a)->a-5;
//
//        System.out.println(Printer.calculate(10,add));
//        System.out.println(Printer.calculate(20,sub));
//
//        ArrayList<Integer> numbers =new ArrayList<>();
//        numbers.add(1);
//        numbers.add(2);
//        numbers.add(3);
//
//        for(int number:numbers){
//            System.out.println(number*number);
//        }
//
//        List<Integer> numbersList = new ArrayList<>();
//        numbersList.add(1);
//        numbersList.add(2);
//        numbersList.add(3);
//        numbersList.add(4);
//        numbersList.add(5);
//        numbersList.add(6);
//        numbersList.add(7);
//        numbersList.add(8);
//        numbersList.add(9);
//        numbersList.add(10);
//
//        Stream<Integer> stream = numbersList.stream();
//        stream.filter((number)-> {
//            System.out.println("Filtering:"+number);
//            return number % 2 == 0;
//        }).forEach((number)-> System.out.println("Printing:"+number));
//
//        System.out.println(">>>>>>>>>>>>>Sorting Filtered stream");
//        Stream<Integer> s3 = numbersList.stream();
//        s3.filter((number)->{
//            System.out.println("Filtering:"+number);
//            return number%2==0;
//        }).sorted((num1,num2)->{
//            System.out.println("Sorting:" + num1 + " " +num2);
//            if(num1 < num2)
//                return 1;
//            else if(num1 > num2)
//                return -1;
//            else
//                return 0;
//        }).forEach((number)->System.out.println("Prnting:" + number));

        Stream<Integer> s4 = Stream.of(1,2,3,4);
        int sum = s4.reduce(0,(num1,num2)->num1+num2);
        System.out.println(sum);

        Stream<Integer> s5 = Stream.of(1,2,3,4);
        List<String> list = s5.filter((num)->num%2==0).map((num)->num+"HI").collect(Collectors.toList());
        for(String num:list){
            System.out.println(num);
        }

        Stream<Integer> s6 = Stream.of(3,5,7,2,4);

        Optional<String> ans2 = s6.filter((elm)-> {
            System.out.println("filtering s4: " + elm);
            return elm % 2 == 0;
        }).map((elm)->  elm+ "HI").findFirst();

        if(ans2.isPresent()){
            System.out.println("Final Value:" +ans2.get());
        }
    }
}
