package ConstructorCallingAndSuperKeyword;

public class Main {
    public static void main(String[] args) {
        //Constructor chaining via default constructor
        //Default constructors are automatically called
        //Below is the order of invocation of constructors
        // C -> B -> A
        // Below is the order of execution of code present in constructor
        // A code -> B code -> C code
        C c = new C();

        // How constructor chaining works in Parameterised constructor
        // In parameterised constructor we need to manually call parent constructor from child constructor
        // parent constructor will now be automatically called
        C pc = new C(10,20,30);

        // super keyword usages
        // It is used to call parent class constructor,data members and methods from child class
        c.fun();
    }
}
