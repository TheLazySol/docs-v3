'use server';

import { ActionError, actionClient } from '@/lib/safe-action';
import { NewsletterSchema } from '@/lib/validators';

const splitName = (name = '') => {
  const [firstName, ...lastName] = name.split(' ').filter(Boolean);
  return {
    firstName: firstName,
    lastName: lastName.join(' '),
  };
};

export const subscribe = actionClient
  .schema(NewsletterSchema)
  .action(async ({ parsedInput: { email } }) => {
    try {
      // For now, just return a success message without actually sending emails
      console.log('Newsletter subscription request for:', email);
      
      return {
        success: true,
        message: 'Thank you for subscribing! We\'ll be in touch soon.',
      };
    } catch (error) {
      console.error('Failed to subscribe:', error);
      if (error instanceof ActionError) throw error;
      throw new ActionError('Oops, something went wrong while subscribing.');
    }
  });
