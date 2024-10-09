import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPagesComponent } from './podcast-pages.component';

describe('PodcastPagesComponent', () => {
  let component: PodcastPagesComponent;
  let fixture: ComponentFixture<PodcastPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
