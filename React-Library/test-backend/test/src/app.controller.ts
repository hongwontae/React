import { Body, Controller,  Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/editor/save')
  @UseInterceptors(FilesInterceptor('files', 10))
  async testEditor(
    @UploadedFiles() files : Express.Multer.File[],
    @Body() body 
  ){
    console.log('??????')
    console.log(body);
    console.log(files)
    return {okay : 'Success'}
  }

}
