package Generics;

import java.util.ArrayDeque;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Stack;

public class pair<Vs,Vy> {
    Vs x;
    Vy y;

    public void setX(Vs x){
        this.x = x;
        System.out.println(x.getClass().getName());
    }

    public void setY(Vy y){
        this.y = y;
        System.out.println(y.getClass().getName());
    }

    public static <s1,s2> void staticMethod(s1 a,s2 b){
        System.out.println(a.getClass().getName());
        System.out.println(b.getClass().getName());
    }

    public <Vs,Vy> void doSomething(Vs a,Vy b){
        System.out.println("a" + a.getClass().getName());
        System.out.println("b" + b.getClass().getName());
    }


    public static <T extends Number> void addition(T v1,T v2){
        System.out.println(v1.intValue() + v2.intValue());
    }
}
