package Design_Pattern.factory.components.button;

public class WindowsButton implements Button{
    @Override
    public void showButton() {
        System.out.println("show Windows Button");
    }

    @Override
    public void clickButton() {
        System.out.println("Windows Button Clicked");
    }
}
