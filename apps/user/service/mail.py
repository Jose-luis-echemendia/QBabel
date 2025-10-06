from django.core.mail import EmailMessage, send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
import environ

env=environ.Env()

class MailService:
    def __init__(self, from_email=None):
        self.from_email = from_email or env('DEFAULT_FROM_EMAIL')

    def send_mail(self, subject, message, recipient_list, html_message=None, attachments=None):
        """
        Send an email to a list of recipients.

        :param subject: Subject of the email.
        :param message: Plain text message.
        :param recipient_list: List of recipient emails.
        :param html_message: Optional HTML version of the message.
        :param attachments: Optional list of (filename, content, mimetype).
        """
        email = EmailMessage(
            subject=subject,
            body=html_message or message,
            from_email=self.from_email,
            to=recipient_list
        )

        if html_message:
            email.content_subtype = "html"

        if attachments:
            for attachment in attachments:
                email.attach(*attachment)  # (filename, content, mimetype)

        email.send(fail_silently=False)

    def send_template_email(self, subject, template_name, context, recipient_list, attachments=None):
        """
        Render a Django template and send it as an HTML email.

        :param subject: Subject of the email.
        :param template_name: Template file (e.g., 'emails/welcome.html').
        :param context: Context dictionary for the template.
        :param recipient_list: List of recipient emails.
        :param attachments: Optional list of attachments.
        """
        html_content = render_to_string(template_name, context)
        plain_text = strip_tags(html_content)

        self.send_mail(
            subject=subject,
            message=plain_text,
            recipient_list=recipient_list,
            html_message=html_content,
            attachments=attachments
        )
