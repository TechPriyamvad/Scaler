package ConstructorCallingAndSuperKeyword;

public class B extends A{
    int b1;
    B(){
        this.b1 =20;
    }
    B(int a1,int b1){
        super(a1);
        this.b1 = b1;
    }

    void fun(){
        System.out.println("B ka fun function");
        super.fun();
        System.out.println("a1: "+super.a1);
    }
}
