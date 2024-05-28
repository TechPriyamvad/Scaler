package Design_Pattern.factory.components;

import Design_Pattern.factory.components.button.Button;
import Design_Pattern.factory.components.button.IosButton;
import Design_Pattern.factory.components.dropdown.Dropdown;
import Design_Pattern.factory.components.dropdown.IosDropdown;
import Design_Pattern.factory.components.menu.IosMenu;
import Design_Pattern.factory.components.menu.Menu;

public class IosUIFactory implements UIFactory{
    @Override
    public Button createButton() {
        return new IosButton();
    }

    @Override
    public Menu createMenu() {
        return new IosMenu();
    }

    @Override
    public Dropdown createDropdown() {
        return new IosDropdown();
    }
}
