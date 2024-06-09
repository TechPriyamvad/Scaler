package Static.methodOverridingOnStaticFn;

//method overriding doesn't happen on static functions as they are attached to class not instance
//method overriding happens at instance level
public class B extends A{
    // static function cannot be overridden
    /*void sFun(){
        System.out.println("sFun function of B class called");
    }*/
}
