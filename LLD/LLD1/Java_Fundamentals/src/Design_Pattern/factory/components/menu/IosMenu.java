package Design_Pattern.factory.components.menu;

public class IosMenu implements Menu{
    @Override
    public void showMenu() {
        System.out.println("Ios menu is shown");
    }

    @Override
    public void hideMenu() {
        System.out.println("Ios menu is hidden");
    }
}
