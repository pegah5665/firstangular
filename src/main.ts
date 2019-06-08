import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



export class AppComponent {
  title = 'app';
  selectedFile = null;

  onFileSelected(event)
  {
    this.selectedFile = event.target.files[0];
  }

  onUpload()
  {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }
}