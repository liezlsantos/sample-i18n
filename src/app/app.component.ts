import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  charCount = 0;
  projectTitle = 'Build a Website';
  projectStatusCode = 'o';

  updateCharCount(inputText: string): void {
    this.charCount = inputText.length;
  }

  updateProjectStatus(statusCode: string): void {
    this.projectStatusCode = statusCode;
  }
}
