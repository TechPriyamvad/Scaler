package Design_Pattern.factory.components.button;

public class AndroidButton implements Button{
    @Override
    public void showButton() {
        System.out.println("show Android Button");
    }

    @Override
    public void clickButton() {
        System.out.println("click Android Button");
    }
}
