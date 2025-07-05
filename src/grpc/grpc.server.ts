import { Controller, Get } from '@nestjs/common';

@Controller("grpc")
export class AppController {

  @Get()
  getHello(): string {
    return "";
  }

  @Get()
  getHello1(): string {
    return "";
  }

  @Get()
  getHello3(): string {
    return "ddd";
  }
}
