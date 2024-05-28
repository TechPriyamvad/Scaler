package Design_Pattern.factory.components;

import Design_Pattern.factory.components.button.AndroidButton;
import Design_Pattern.factory.components.button.Button;
import Design_Pattern.factory.components.dropdown.AndroidDropdown;
import Design_Pattern.factory.components.dropdown.Dropdown;
import Design_Pattern.factory.components.menu.AndroidMenu;
import Design_Pattern.factory.components.menu.Menu;

public class AndroidUIFactory implements UIFactory{
    @Override
    public Button createButton() {
        return new AndroidButton();
    }

    @Override
    public Menu createMenu() {
        return new AndroidMenu();
    }

    @Override
    public Dropdown createDropdown() {
        return new AndroidDropdown();
    }
}
