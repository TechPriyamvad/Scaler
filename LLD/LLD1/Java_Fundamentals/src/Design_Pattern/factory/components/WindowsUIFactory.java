package Design_Pattern.factory.components;

import Design_Pattern.factory.components.button.Button;
import Design_Pattern.factory.components.button.WindowsButton;
import Design_Pattern.factory.components.dropdown.Dropdown;
import Design_Pattern.factory.components.dropdown.WindowsDropdown;
import Design_Pattern.factory.components.menu.Menu;
import Design_Pattern.factory.components.menu.WindowsMenu;

public class WindowsUIFactory implements UIFactory{
    @Override
    public Button createButton() {
        return new WindowsButton();
    }

    @Override
    public Menu createMenu() {
        return new WindowsMenu();
    }

    @Override
    public Dropdown createDropdown() {
        return new WindowsDropdown();
    }
}
