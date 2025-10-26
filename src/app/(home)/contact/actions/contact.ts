'use server';

import { ActionError, actionClient } from '@/lib/safe-action';
import { ContactSchema } from '@/lib/validators/contact';

export const contact = actionClient
  .schema(ContactSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    try {
      // For now, just log the contact form submission
      console.log('Contact form submission:', { name, email, message });
      
      return {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      };
    } catch (error) {
      console.error('Contact form error:', error);
      if (error instanceof ActionError) throw error;
      throw new ActionError(
        'Failed to send your message. Please try again later.',
      );
    }
  });
