import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LinkComponent } from './components/link/link.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, LinkComponent],
  exports: [CardComponent, LinkComponent],
})
export class SharedModule {}
