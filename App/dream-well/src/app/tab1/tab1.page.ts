import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartDataset } from 'chart.js/auto';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

  @ViewChild('sleepDuration') private sleepChart!: ElementRef;
  @ViewChild('qualityChart') private qualityChartRef!: ElementRef;

  constructor() {}
  
  ngAfterViewInit(): void {
    const myChart = new Chart(this.sleepChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Hours of Sleep',
          data: [7, 6, 8, 5, 7, 8, 6],
          backgroundColor: '#8977CE',
          borderRadius: 10,
        }]
      },
      options: {
        scales: {
          x:{
            ticks:{
              color: '#fff',
            },
            grid: {
              display: false,
            },
            border: {
              color: '#fff',
              width: 1,
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return value + 'h';
              },
              stepSize: 2, 
              color: '#fff'
            },
            border: {
              color: '#fff',
              width: 1,
            }
          },
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false,
          }
        },
        hover: {
          mode: 'nearest',
          intersect: false
        },
        
        
      }
    });
    const qualityChart = new Chart(this.qualityChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Sleep Quality',
            data: [80, 60, 90, 60, 75, 85, 65],
            backgroundColor: '#FFD700',
            borderRadius: 10,
          }]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#fff',
              },
              border: {
                color: '#fff',
                width: 1,
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value, index, values) {
                  return value + '%';
                },
                stepSize: 5,
                color: '#fff'
              },
              border: {
                color: '#fff'
              }
            },
          },
          plugins: {
            title: {
              display: false,
              text: 'Sleep Quality',
              color: '#fff'
            },
            legend: {
              display: false
            },
            tooltip: {
              enabled: false,
            }
          },
          hover: {
            mode: 'nearest',
            intersect: false
          },
        }

      });
  }

  selectedButton = 'days';

  selectButton(button: string) {
    this.selectedButton = button;
  }
}