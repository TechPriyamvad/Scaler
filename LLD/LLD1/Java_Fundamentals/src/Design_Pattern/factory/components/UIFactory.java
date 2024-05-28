package Design_Pattern.factory.components;

import Design_Pattern.factory.components.button.Button;
import Design_Pattern.factory.components.dropdown.Dropdown;
import Design_Pattern.factory.components.menu.Menu;

public interface UIFactory {
    Button createButton();
    Menu createMenu();
    Dropdown createDropdown();
}
