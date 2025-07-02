import { Component } from '@angular/core';
import { NgMoringaTableComponent } from '../../../ng-moringa-table/src/public-api';




@Component({
  selector: 'app-root',
  imports: [NgMoringaTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css']

})
export class AppComponent {
 statusMap = {
  scheduled: 'success',
  inprogress: 'info',
  converted: 'success',
  pending: 'warning',
  confirmed: 'info',
  completed: 'success',
  failed: 'danger',
  archived: 'muted',
  cancelled: 'danger',
  lost: 'danger',
  backlog: 'light',
  active: 'success',
  inactive: 'default',
  deleted: 'danger',
  rejected: 'danger',
  new: 'primary',
  closed: 'secondary'
};

data = [
// START OF 50 DUMMY LEADS
{
  mediaTile: 'assets/dp1.jpg',
  name: 'Brandon Mcgee',
  source: 'Website',
  email: 'joshuacollins@hotmail.com',
  phone: '001-189-115-9038x67576',
  organization: 'BrightFuture',
  status: 'archived',
  assign: 'Emma',
  tags: 'Support, App Dev',
  date: '2025-02-12'
  
},
  {
    mediaTile: 'assets/dp2.jpg',
    name: 'Nicole Bond',
    source: 'LinkedIn',
    email: 'kelly80@hotmail.com',
    phone: '302.875.6860x7837',
    organization: 'EcoSolutions',
    status: 'archived',
    assign: 'Michael',
    tags: 'CRM, Development',
    date: '2025-01-02'
  },
  {
    mediaTile: 'assets/dp3.jpg',
    name: 'Darryl Moran',
    source: 'Website',
    email: 'mary78@yahoo.com',
    phone: '1757237165',
    organization: 'InnoHub',
    status: 'active',
    assign: 'Emma',
    tags: 'App Dev, Marketing',
    date: '2025-02-08'
  },
  {
    mediaTile: 'assets/dp4.jpg',
    name: 'Ronald Roth',
    source: 'Website',
    email: 'bwalters@hotmail.com',
    phone: '001-633-626-1002x496',
    organization: 'NextGen',
    status: 'lost',
    assign: 'Lily',
    tags: 'Development, SMM',
    date: '2025-02-05'
  },
  {
    mediaTile: 'assets/dp5.jpg',
    name: 'Robert Harris',
    source: 'Instagram',
    email: 'antoniomoss@wilson.org',
    phone: '6957607961',
    organization: 'NextGen',
    status: 'active',
    assign: 'John',
    tags: 'UI/UX, Support',
    date: '2025-02-09'
  },
  {
    mediaTile: 'assets/dp6.jpg',
    name: 'Sara Lin',
    source: 'Referral',
    email: 'saralin@mail.com',
    phone: '790-234-8899',
    organization: 'TechNova',
    status: 'pending',
    assign: 'Ali',
    tags: 'Web Design, CRM',
    date: '2025-01-16'
  },
  {
    mediaTile: 'assets/dp7.jpg',
    name: 'James Lee',
    source: 'Facebook Ads',
    email: 'jameslee@domain.com',
    phone: '234-980-1234',
    organization: 'MedTech',
    status: 'active',
    assign: 'Emma',
    tags: 'SEO, QA',
    date: '2025-02-07'
  },
  {
    mediaTile: 'assets/dp8.jpg',
    name: 'Emily Clark',
    source: 'Instagram',
    email: 'emilyc@example.com',
    phone: '845-772-1111',
    organization: 'InnoHub',
    status: 'archived',
    assign: 'Michael',
    tags: 'App Dev, Support',
    date: '2025-01-21'
  },
  {
    mediaTile: 'assets/dp9.jpg',
    name: 'Daniel Ray',
    source: 'LinkedIn',
    email: 'danielray@company.org',
    phone: '765-390-8899',
    organization: 'NextGen',
    status: 'lost',
    assign: 'Sara',
    tags: 'CRM, Development',
    date: '2025-02-04'
  },
  {
    mediaTile: 'assets/dp10.jpg',
    name: 'Monica Jain',
    source: 'Website',
    email: 'monicaj@webmail.net',
    phone: '540-209-7765',
    organization: 'BrightFuture',
    status: 'pending',
    assign: 'Lily',
    tags: 'UI/UX, QA',
    date: '2025-01-12'
  }
];
}
