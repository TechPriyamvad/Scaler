package Singleton_Design_Pattern;

//Singleton Design Pattern
//  *How to restrict class to have only one instance throughout lifetime of application
public class Singleton {
//    make constructor private
    private Singleton(){}
//    check if object is created or not
    private static Singleton dbInstance = null;
//    Create a static method to create object of class
    public static Singleton getInstance(){
        if(dbInstance==null)
            dbInstance = new Singleton();
        return dbInstance;
    }
}
