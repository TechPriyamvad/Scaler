package Design_Pattern.factory.assignments.abstract_factory.notification_system;

import Design_Pattern.factory.assignments.abstract_factory.notification_system.notification.Notification;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.sender.NotificationSender;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.template.NotificationTemplate;

public abstract class NotificationFactory {
    public abstract NotificationType notificationType();
    public abstract Notification createNotification(String recipient, String sender,NotificationTemplate template);
    public abstract NotificationSender createNotificationSender(Notification notification);

    public abstract NotificationTemplate createNotificationTemplate(String message);
}
