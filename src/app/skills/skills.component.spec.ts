import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SkillsComponent } from "./skills.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SkillsComponent", () => {

  let fixture: ComponentFixture<SkillsComponent>;
  let component: SkillsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SkillsComponent]
    });

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
