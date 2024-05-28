package Design_Pattern.factory.components.dropdown;

public class IosDropdown implements Dropdown{
    @Override
    public void showDropdown() {
        System.out.println("IosDropdown is shown");
    }

    @Override
    public void hideDropdown() {
        System.out.println("IosDropdown is hidden");
    }
}
