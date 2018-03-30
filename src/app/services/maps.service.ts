import { Injectable } from '@angular/core';

//Interface
import { Marker } from './../interfaces/marker.interface';


@Injectable()
export class MapsService {

  markers: Marker[] = [];


  constructor() {

    let newMarker: Marker = {
      lat: 37.420939,
      lng: -5.893712,
      title: `Sevilla'ss Airport`,
      draggable: true
    }

    this.markers.push(newMarker);
  }

  insertMarker( marker:Marker) {
    this.markers.push(marker);
    this.saveMarkers();
  }

  deleteMarker(i: number) {
    this.markers.splice(i, 1);
    this.saveMarkers();
  }

  saveMarkers() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  loadMarkers() {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    } else {
      this.markers = [];
    }
  }


}
