package Design_Pattern.factory.components;

public class Flutter {

//    non factory methods
    public void showFlutter() {
        System.out.println("Flutter is shown");
    }

    public void hideFlutter() {
        System.out.println("Flutter is hidden");
    }

//    factory methods
    public UIFactory getUIFactory(SupportedPlatforms platforms) {
        return UIFactoryHelper.getUIFactoryForPlatform(platforms);
    }
}
