import nodemailer from 'nodemailer';

import { logger } from '@shared/utils/logger';

import { ISendMailDTO } from '../dtos/ISendMailDTO';
import { IMailProvider } from '../models/IMailProvider';

class HostGatorMailProvider implements IMailProvider {
  public async sendMail({ from, to, subject, html }: ISendMailDTO) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      name: 'no-reply@comejaca.org.br',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      const info = await transporter.sendMail({
        from,
        to,
        subject,
        html,
      });
      logger.debug(info);
    } catch (err) {
      logger.error('Sendgrid', err);
    }
  }
}

export { HostGatorMailProvider };
