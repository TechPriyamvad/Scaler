package Static.methodOverloadingOnStaticFn;

//static function can be overloaded as overloading happens during compile time
public class Main {
    void sfun(){
        System.out.println("sFun function without parameters of Main class called");
    }

    static void sfun(int x){
        System.out.println("sFun function with parameter of Main class called");
    }

    public static void main(String[] args) {
        Main m = new Main();
        m.sfun(10);
    }
}
