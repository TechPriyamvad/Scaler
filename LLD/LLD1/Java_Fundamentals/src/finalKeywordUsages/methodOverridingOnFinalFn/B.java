package finalKeywordUsages.methodOverridingOnFinalFn;

public class B extends A{
    void fun(){
        System.out.println("Fun function of B class called");
    }

    //final fn cannot be overriden
    //fun1 function is declared using final keyword in A class
   /* void fun1(){
        System.out.println("Fun1 function of B class called");
    }*/
}
