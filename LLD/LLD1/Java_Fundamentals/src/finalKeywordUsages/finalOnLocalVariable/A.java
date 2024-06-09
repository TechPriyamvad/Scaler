package finalKeywordUsages.finalOnLocalVariable;

public class A {
    void print(){
        final int x;
        //final local variable cannot be re-initialised
//        x = 20; //error
    }
    public static void main(String[] args) {

    }
}
