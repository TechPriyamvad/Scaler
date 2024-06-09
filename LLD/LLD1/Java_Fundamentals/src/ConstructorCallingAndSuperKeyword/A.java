package ConstructorCallingAndSuperKeyword;

public class A {
    int a1;
    A(){
        this.a1 = 10;
    }

    A(int a1){
        this.a1 = a1;
    }

    void fun(){
        System.out.println("A ka fun function");
    }
}
