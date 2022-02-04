import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  styles: [`
    .p-carousel-next {
      background: url({{nextCaroulselPage}})
    }
    .p-carousel-prev {
      background: url({{prevCaroulselPage}})
    }
  `]
})
export class HomeComponent implements OnInit {
  items: any;
  channels: any;

  activeCaroulselPage: any;
  nextCaroulselPage: any;
  prevCaroulselPage: any;

  carouselInterval: number = 300;

  constructor(private elRef: ElementRef) { 
    this.items = [
      {
        image: '../assets/carousel/image1.png', 
        overlay: '../assets/carousel/overlay1.png', 
        overlayStyle: "",
        subtitle: 'Novo capítulo toda quarta'
      },
      {
        image: '../assets/carousel/image2.jpg', 
        overlay: '../assets/carousel/overlay2.png', 
        overlayStyle: "inset: 0px; width: 100%; transform: translateX(-60px);",
        subtitle: ''
      },
      {
        image: '../assets/carousel/image3.jpg', 
        overlay: '../assets/carousel/overlay3.png', 
        overlayStyle: "transform: translateX(0px);",
        subtitle: 'Temporada 2 já disponível'
      },
      {
        image: '../assets/carousel/image4.jpg', 
        overlay: '../assets/carousel/overlay4.png', 
        overlayStyle: "inset: 0px; width: 100%; transform: translateX(-70px);",
        subtitle: ''
      },
      {
        image: '../assets/carousel/image5.jpg', 
        overlay: '../assets/carousel/overlay5.png',
        overlayStyle: "inset: 0px; width: 100%; transform: translateX(-60px);", 
        subtitle: ''
      }
    ];
    

    this.channels = [
      {
        image: '../assets/channels/image1.png', 
        video: '../assets/channels/video1.mp4'
      },
      {
        image: '../assets/channels/image2.png', 
        video: '../assets/channels/video2.mp4'
      },
      {
        image: '../assets/channels/image3.png', 
        video: '../assets/channels/video3.mp4'
      },
      {
        image: '../assets/channels/image4.png', 
        video: '../assets/channels/video4.mp4'
      },
      {
        image: '../assets/channels/image5.png', 
        video: '../assets/channels/video5.mp4'
      },
    ];

    this.activeCaroulselPage = this.items[0].image;
    this.nextCaroulselPage = this.items[1].image;
    this.prevCaroulselPage = this.items[this.items.length-1].image;

    this.elRef.nativeElement.style.setProperty('--prev-carousel-image', 'url('+this.prevCaroulselPage+')')
    this.elRef.nativeElement.style.setProperty('--next-carousel-image', 'url('+this.nextCaroulselPage+')');
  }

  ngOnInit(): void {
  }

  private chkPrevPageNumber(page:number){
    var res = true

    if(page === 0){
      res = false
    }
    return res
  }

  private chkNextPageNumber(page:number){
    var res = true

    if(page === this.items.length-1){
      res = false
    }

    return res
  }

  changePage(page:any){
    const pageNumber = page.page

    this.activeCaroulselPage = this.items[pageNumber].image
    this.prevCaroulselPage = this.chkPrevPageNumber(pageNumber) ? this.items[pageNumber-1].image : this.items[this.items.length-1].image
    this.nextCaroulselPage = this.chkNextPageNumber(pageNumber) ? this.items[pageNumber+1].image : this.items[0].image

    this.elRef.nativeElement.style.setProperty('--prev-carousel-image', 'url('+this.prevCaroulselPage+')')

    this.elRef.nativeElement.style.setProperty('--next-carousel-image', 'url('+this.nextCaroulselPage+')')
  }

  teste2(item:any){
    console.log(item)
  }

}
