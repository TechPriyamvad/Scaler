package Design_Pattern.factory.components.dropdown;

public class AndroidDropdown implements Dropdown{
    @Override
    public void showDropdown() {
        System.out.println("Android dropdown is shown");
    }

    @Override
    public void hideDropdown() {
        System.out.println("Android dropdown is hidden");
    }
}
