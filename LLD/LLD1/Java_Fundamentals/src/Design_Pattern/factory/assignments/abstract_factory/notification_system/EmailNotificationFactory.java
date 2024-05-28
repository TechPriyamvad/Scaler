package Design_Pattern.factory.assignments.abstract_factory.notification_system;

import Design_Pattern.factory.assignments.abstract_factory.notification_system.notification.EmailNotification;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.notification.Notification;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.sender.EmailNotificationSender;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.sender.NotificationSender;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.template.EmailNotificationTemplate;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.template.NotificationTemplate;

public class EmailNotificationFactory extends NotificationFactory{
    @Override
    public NotificationType notificationType() {
        return NotificationType.EMAIL;
    }

    @Override
    public Notification createNotification(String recipient, String sender,NotificationTemplate template) {
        return new EmailNotification(recipient,sender,template);
    }

    @Override
    public NotificationSender createNotificationSender(Notification notification) {
        return new EmailNotificationSender(notification);
    }

    @Override
    public NotificationTemplate createNotificationTemplate(String message) {
        return new EmailNotificationTemplate(message);
    }
}
