package Design_Pattern.factory.components.dropdown;

public class WindowsDropdown implements Dropdown{
    @Override
    public void showDropdown() {
        System.out.println("WindowsDropdown is shown");
    }

    @Override
    public void hideDropdown() {
        System.out.println("WindowsDropdown is hidden");
    }
}
