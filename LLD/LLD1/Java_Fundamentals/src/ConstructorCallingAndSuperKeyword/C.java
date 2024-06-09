package ConstructorCallingAndSuperKeyword;

public class C extends B{
    int c1;
    C(){
        this.c1 = 30;
    }
    C(int a1,int b1,int c1){
//        super(a1,b1);
        this.c1 = c1;
    }

    void fun(){
        System.out.println("C ka fun function");
        super.fun();
        System.out.println("b1: "+super.b1);
    }
}
