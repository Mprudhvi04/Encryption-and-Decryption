import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust the path if needed
 // If you need to bootstrap HomeComponent instead

// If you are using AppComponent, use this
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));

// If you want to bootstrap HomeComponent instead, do this
// bootstrapApplication(HomeComponent)
//   .catch(err => console.error(err));
