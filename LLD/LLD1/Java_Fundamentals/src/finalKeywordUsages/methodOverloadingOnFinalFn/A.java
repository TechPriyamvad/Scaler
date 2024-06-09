package finalKeywordUsages.methodOverloadingOnFinalFn;

public class A {
    int a1;

    final void fun(){
        System.out.println("Fun function of A class called");
    }

    void fun(int x){
        System.out.println("Parameterised Fun function of A class called");
    }
}
