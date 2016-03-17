import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    styleUrls: ["styles1.css", "styles2.css"],
    template: `
<StackLayout orientation="vertical">
    <Label [text]="message" class="title" (tap)="message = 'OHAI'"></Label>
</StackLayout>
`,
})
export class AppComponent {
    public message: string = "Hello, Angular!";
}
