import { HostListener, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-containerbody',
  templateUrl: './containerbody.component.html',
  styleUrls: ['./containerbody.component.css'],
})
export class ContainerbodyComponent implements OnInit {
  li: any;
  lis = [];
  page = 2;
  bottomState = false;
  search = '';
  constructor(public httpClient: HttpClient) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.httpClient.get('https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json').subscribe((res) => {
        this.li = res;
        this.lis = this.li;
      });
    }, 0);
  }
  trackByFn(index, station) {
    return station.id;
  }
  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    const bottomScroll = document.body.scrollHeight - 1000;
    if (window.pageYOffset > bottomScroll && this.bottomState === false) {
      this.bottomState = true;
      this.httpClient
        .get(`https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?page=${this.page}`)
        .subscribe((res) => {
          this.li = res;
          if (this.li.length > 0) {
            this.lis = [...this.lis.concat(this.li)];
            this.bottomState = false;
            this.page = this.page + 1;
          } else {
            document.getElementById('loaderItems').style.opacity = '0';
          }
        });
    }
  }

  addInput() {
    console.log('hola');
  }
}
