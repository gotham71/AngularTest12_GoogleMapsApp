import { Component } from '@angular/core';

//Services
import { MapsService } from './services/maps.service';

//Interfaces
import { Marker } from './interfaces/marker.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = 37.424300;
  lng: number = -5.893100;
  zoom: number = 16;

  markerSelected:any = null;
  draggable: string = "1";


  constructor( public _mapsService: MapsService) {
    this._mapsService.loadMarkers();
  }

  clickOnMap( event ){
    let newMarker:Marker = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      title: 'No title',
      draggable: true
    }

    this._mapsService.insertMarker(newMarker);
  }

  changeDraggable(){
    if (this.draggable == "1") {
      this.markerSelected.draggable = true;
    } else {
      this.markerSelected.draggable = false;
    }
  }

  clickOnMarker( marker:Marker, i:number) {
    this.markerSelected = marker;

    if (this.markerSelected.draggable) {
      this.draggable = "1";
    } else {
      this.draggable = "0";
    }
  }

  dragEndMarker( marker: Marker, event) {
    marker.lat = event.coords.lat;
    marker.lng = event.coords.lng;

    this._mapsService.saveMarkers();
  }

  deleteMarker(i: number) {
    this._mapsService.markers.splice(i, 1);
    this._mapsService.saveMarkers();
  }
}

