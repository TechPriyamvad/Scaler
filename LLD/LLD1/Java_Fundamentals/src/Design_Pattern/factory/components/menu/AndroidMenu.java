package Design_Pattern.factory.components.menu;

public class AndroidMenu implements Menu{
    @Override
    public void showMenu() {
        System.out.println("Android menu is shown");
    }

    @Override
    public void hideMenu() {
        System.out.println("Android menu is hidden");
    }
}
