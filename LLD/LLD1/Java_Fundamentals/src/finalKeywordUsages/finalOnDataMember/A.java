package finalKeywordUsages.finalOnDataMember;

public class A {

    //final data member should be initialised either during declaration or in constructor
    //final data member cannot be re-initialised
    final int a1;

    A(){
        a1 = 20;
    }

}
