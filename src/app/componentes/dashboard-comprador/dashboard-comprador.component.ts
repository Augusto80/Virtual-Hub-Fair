import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-comprador',
  templateUrl: './dashboard-comprador.component.html',
  styleUrls: ['./dashboard-comprador.component.css']
})
export class DashboardCompradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
    var hamburger = document.querySelector(".hamburger");
    var wrapper = document.querySelector(".wrapper");
    var backdrop = document.querySelector(".backdrop")



    var btn_employee = document.querySelector(".employee_btn");
    var show_employee = document.querySelector(".employee_show");

    var btn_task = document.querySelector(".task_btn");
    var show_task = document.querySelector(".task_show");

    var icon_storage = document.querySelector(".first");
    var icon_employee = document.querySelector(".second");
    var icon_task = document.querySelector(".third");


    hamburger.addEventListener("click", function () {
      wrapper.classList.add("active");
    })

    backdrop.addEventListener("click", function () {
      wrapper.classList.remove("active");
    })

    /*$(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });*/


  }

  

  

}

