import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
  	//let myLatLng1 = {lat: -25.363, lng: 131.044};
    let mapProp = {
      center: new google.maps.LatLng(-25.363, 131.044),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    //this.addMarker(myLatLng)

    
  }


  addMarker(somein){
  	var marker = new google.maps.Marker({
          position: somein,
          map: this.map,
          title: 'Hello World!'
        });

  }
}
