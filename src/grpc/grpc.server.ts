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
  getHello2(): string {
    const age = 8;
    return "";
  }
}
