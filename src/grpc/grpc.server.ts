import { Controller, Get } from '@nestjs/common';

@Controller("grpc")
export class AppController {

  @Get()
  getHello(): string {
    return "";
  }
}
