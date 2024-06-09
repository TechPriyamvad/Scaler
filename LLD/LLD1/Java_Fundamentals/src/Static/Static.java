package Static;

public class Static {
    int x;
    int y;
    static int z;

    void fun(){
        z = 10;
        System.out.println(z);
    }

    static int sFun(){
        return z;
    }
}
