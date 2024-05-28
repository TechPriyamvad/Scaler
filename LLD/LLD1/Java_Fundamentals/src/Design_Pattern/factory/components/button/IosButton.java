package Design_Pattern.factory.components.button;

public class IosButton implements Button{
    @Override
    public void showButton() {
        System.out.println("show Ios Button");
    }

    @Override
    public void clickButton() {
        System.out.println("click Ios Button");
    }
}
