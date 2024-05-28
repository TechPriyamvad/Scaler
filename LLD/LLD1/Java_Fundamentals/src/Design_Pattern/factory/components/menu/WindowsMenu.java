package Design_Pattern.factory.components.menu;

public class WindowsMenu implements Menu{
    @Override
    public void showMenu() {
        System.out.println("Windows menu is shown");
    }

    @Override
    public void hideMenu() {
        System.out.println("Windows menu is hidden");
    }
}
