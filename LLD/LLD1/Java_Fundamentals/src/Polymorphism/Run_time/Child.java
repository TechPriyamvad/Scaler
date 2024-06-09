package Polymorphism.Run_time;

public class Child extends Parent{

    int p = 20;
    int c1 = 30;

//    method overriding
    void print(){
        System.out.println("Child print called!!! from child");
    }

    void print2(){
        System.out.println("function print2 called from child");
    }
}
