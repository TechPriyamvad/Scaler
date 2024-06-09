package Polymorphism.Run_time;

public class Main {
    public static void main(String[] args) {

//        Inheritance
//        child inherit kar raha h parent ke data member ar method ko
       /* Child c = new Child();
        System.out.println(c.p1);
        c.print();*/

//        run time polymorphism
//        parent reference can store multiple child reference
//        Parent p = new Child1()

//        Cases  to understand runtime polymorphism
        // Three golden rules to help solve problems related to runtime polymorphism
        // 1. Compiler solves LHS part i.e references
        // 2. JRE solves RHS part i.e instance
        // 3. In case of conflict JRE sees reference

        //Case 1 : parent storing parent instance

//        Parent p = new Parent();
//        System.out.println(p.p);
//        System.out.println(p.p1);
//        System.out.println(p.c1);
//        p.print();
//        p.print1();
//        p.print2();

        //Case 2: parent storing child instance

        Parent p = new Child();
        System.out.println(p.p);
        System.out.println(p.p1);
//        System.out.println(p.c1);
        p.print();
        p.print1();
//        p.print2();

        //Case 3: Child storing parent instance
        // Not allowed

        /*Child c = new Parent();
        System.out.println(c.p);
        System.out.println(c.p1);
        System.out.println(c.c1); // will throw runtime exception if allowed
        c.print();
        c.print1();
        c.print2();*/ // will throw runtime exception if allowed

        //Case 4: Child storing child instance

        /*Child c = new Child();
        System.out.println(c.p);
        System.out.println(c.p1);
        System.out.println(c.c1);
        c.print();
        c.print1();
        c.print2();*/
    }
}
