import { Component } from "@angular/core"

@Component({
    selector: 'courses',
    template: `
           {{ text | summary:10 }} <br/>
        `
})
export class CoursesComponent {
    text = `vdsvsdv sdvsdvvdv dvdavdv adcvadvadva advadvadvadv advadvadvad vadvadvadvdav advadvad advadvadv advadvad vadvavav advadvadv advadvdavdav davaddavdav davadvadv adadadvadv vdavdavdavdvd advdvr bd fs bsfbsfbs zgash bfsbsfhd dv adsfhsfhsf adgsr hf hsfdsgad gad g dag dag adgg`;
}