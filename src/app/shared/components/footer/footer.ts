import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { primaryNav } from '../../../core/navigation';

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly links = primaryNav;
  protected readonly year = new Date().getFullYear();
  protected readonly partners = ['ICT Authority', 'Huawei', 'World Food Programme'];
}
