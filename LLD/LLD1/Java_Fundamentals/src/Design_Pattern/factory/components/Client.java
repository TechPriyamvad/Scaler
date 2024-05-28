package Design_Pattern.factory.components;

import Design_Pattern.factory.components.button.Button;
import Design_Pattern.factory.components.dropdown.Dropdown;
import Design_Pattern.factory.components.menu.Menu;

public class Client {
    public static void main(String[] args) {
        Flutter flutter = new Flutter();
        UIFactory uiFactory = flutter.getUIFactory(SupportedPlatforms.IOS);

        Button button = uiFactory.createButton();
        button.clickButton();
        button.showButton();

        Dropdown dropdown = uiFactory.createDropdown();
        dropdown.hideDropdown();
        dropdown.showDropdown();

        Menu menu = uiFactory.createMenu();
        menu.hideMenu();
        menu.showMenu();
    }
}
