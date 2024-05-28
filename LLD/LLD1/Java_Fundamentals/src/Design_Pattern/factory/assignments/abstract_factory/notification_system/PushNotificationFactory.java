package Design_Pattern.factory.assignments.abstract_factory.notification_system;

import Design_Pattern.factory.assignments.abstract_factory.notification_system.notification.Notification;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.notification.PushNotification;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.sender.NotificationSender;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.sender.PushNotificationSender;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.template.NotificationTemplate;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.template.PushNotificationTemplate;

public class PushNotificationFactory extends NotificationFactory{
    @Override
    public NotificationType notificationType() {
        return NotificationType.PUSH;
    }

    @Override
    public Notification createNotification(String recipient, String sender,NotificationTemplate template) {
        return new PushNotification(recipient,template);
    }

    @Override
    public NotificationSender createNotificationSender(Notification notification) {
        return new PushNotificationSender(notification);
    }

    @Override
    public NotificationTemplate createNotificationTemplate(String message) {
        return new PushNotificationTemplate(message);
    }
}
