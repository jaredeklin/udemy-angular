import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServersService) {}

  ngOnInit() {
    // this.getServers()
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onGetServers() {
    // const servers = this.serverService.getServers();
    // console.log(servers)
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }

  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        },
        (error) => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
