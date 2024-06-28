import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { MyFirstService } from './services/my-first-service.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),MyFirstService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
