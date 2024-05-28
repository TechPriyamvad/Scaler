package Design_Pattern.factory.components;

public class UIFactoryHelper {
    public static UIFactory getUIFactoryForPlatform(SupportedPlatforms platforms){
        if(platforms.equals(SupportedPlatforms.ANDROID)){
            return new AndroidUIFactory();
}else if(platforms.equals(SupportedPlatforms.IOS)){
return new IosUIFactory();
        } else if (platforms.equals(SupportedPlatforms.WINDOWS)){
            return new WindowsUIFactory();
        } else {
            return null;

        }
    }

}
