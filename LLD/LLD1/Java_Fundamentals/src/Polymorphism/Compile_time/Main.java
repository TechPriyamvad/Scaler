package Polymorphism.Compile_time;

public class Main {
    public static void main(String[] args){
        fun(1,2); // fun function jo 2 integer le raha h voh call ho jayega
        fun("priyam"); //fun function jo 1 integer le raha h voh call ho jayega
        fun(); //fun funciton jo kch bhi accept nahi ka raha h voh call ho jayega
    }

//    Method overloading/compile time polymorphism:
//    Methods jinka naam same h lekin signature different h
//    yaha pe fun function h jiske alag alag avatar h
//    signature kya hota h: parameters ke datatype
    static void fun(int x,int y){
        System.out.println("function with two parameters called");
    }

//    Below definition of fun function is not allowed
//    int fun(int x,int y){
//        return x + y;
//    }

    static int fun(String x){
        System.out.println("function with one paramater called");
       return 1;
    }

    static void fun(){
        System.out.println("function without parameter is called");
    }

}
