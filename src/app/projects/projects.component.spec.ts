import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProjectsComponent } from "./projects.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ProjectsComponent", () => {

  let fixture: ComponentFixture<ProjectsComponent>;
  let component: ProjectsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ProjectsComponent]
    });

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
