import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly log: Logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @MessagePattern({ action: 'processRequest' })
  async processRequest(@Payload() request: any): Promise<any> {
    this.log.log('Processing request ...', request);
    return { status: 'OK', request };
  }
}
