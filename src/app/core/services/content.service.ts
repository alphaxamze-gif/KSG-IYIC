import { Injectable } from '@angular/core';
import { Program } from '../models/program.model';
import { Facility } from '../models/facility.model';
import { TeamMember } from '../models/team-member.model';
import { Partner } from '../models/partner.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private programs: Program[] = [
    {
      id: '1',
      title: 'Digital Graphic Design',
      category: 'Digital Skills & Technology',
      duration: '3 Month Program',
      rating: 5,
      image: 'assets/images/programs/graphic-design.jpg',
      location: 'KSG-IYIC Hub'
    },
    {
      id: '2',
      title: 'Software Development',
      category: 'Digital Skills & Technology',
      duration: '2 Month Program',
      rating: 5,
      image: 'assets/images/programs/software-dev.jpg',
      location: 'KSG-IYIC Hub'
    },
    {
      id: '3',
      title: 'Basic Computer Literacy',
      category: 'Digital Skills & Technology',
      duration: '1.5 Month Program',
      rating: 4,
      image: 'assets/images/programs/computer-literacy.jpg',
      location: 'KSG-IYIC Hub'
    },
    {
      id: '4',
      title: 'Modelling & Fashion',
      category: 'Fashion & Design',
      duration: '2 Month Program',
      rating: 5,
      image: 'assets/images/programs/modelling.jpg',
      location: 'KSG-IYIC Hub'
    },
    {
      id: '5',
      title: 'Red Tigers Taekwondo',
      category: 'Creative Arts',
      duration: '3 Month Program',
      rating: 5,
      image: 'assets/images/programs/taekwondo.jpg',
      location: 'KSG-IYIC Hub'
    },
    {
      id: '6',
      title: '011 Dance Club',
      category: 'Creative Arts',
      duration: '3 Month Program',
      rating: 4,
      image: 'assets/images/programs/dance.jpg',
      location: 'KSG-IYIC Hub'
    }
  ];

  private facilities: Facility[] = [
    {
      id: '1',
      title: 'Multi-purpose Hall Youth Space',
      description: 'A dynamic and versatile area designed to accommodate a wide range of events, trainings, workshops, and activities.',
      image: 'assets/images/spaces/multipurpose.jpg',
      location: 'Desert Trail Building, Isiolo'
    },
    {
      id: '2',
      title: 'Computer Lab Youth Space',
      description: 'State-of-the-art facility equipped with modern computers and software for hands-on training and digital skills development.',
      image: 'assets/images/spaces/computer-lab.jpg',
      location: 'Desert Trail Building, Isiolo'
    },
    {
      id: '3',
      title: 'Digital Innovation Lab Youth Space',
      description: 'An open space dedicated to empowering young innovators to share ideas, coding classes, and training sessions.',
      image: 'assets/images/spaces/innovation-lab.jpg',
      location: 'Desert Trail Building, Isiolo'
    },
    {
      id: '4',
      title: 'Cultural Artefacts and Arts Youth Space',
      description: 'A unique space where youth can learn and master traditional cultural crafts such as beadwork and artifact-making.',
      image: 'assets/images/spaces/cultural.jpg',
      location: 'Desert Trail Building, Isiolo'
    },
    {
      id: '5',
      title: 'Main Auditorium & Events Space',
      description: 'A versatile venue equipped with a podium and ample space for conferences, seminars, performances and exhibitions.',
      image: 'assets/images/spaces/auditorium.jpg',
      location: 'Desert Trail Building, Isiolo'
    }
  ];

  private team: TeamMember[] = [
    {
      id: '1',
      name: 'Saadia Tache',
      role: 'Communications Lead',
      image: 'assets/images/team/saadia.jpg'
    },
    {
      id: '2',
      name: 'Mathew Ngera',
      role: 'Graphic Design TM',
      image: 'assets/images/team/mathew.jpg'
    },
    {
      id: '3',
      name: 'Wilson Kabon Lokeny',
      role: 'Beadwork and Modelling Lead Instructor',
      image: 'assets/images/team/wilson.jpg'
    },
    {
      id: '4',
      name: 'Jamal Hassan',
      role: 'Software Development Lead TM',
      image: 'assets/images/team/jamal.jpg'
    }
  ];

  private partners: Partner[] = [
    { id: '1', name: 'ICT Authority', logo: 'assets/images/partners/ict.png' },
    { id: '2', name: 'Huawei', logo: 'assets/images/partners/huawei.png' },
    { id: '3', name: 'World Food Programme', logo: 'assets/images/partners/wfp.png' },
  ];

  getPrograms(): Program[] {
    return this.programs;
  }

  getProgramsByCategory(category: string): Program[] {
    if (category === 'All Programs') return this.programs;
    return this.programs.filter(p => p.category === category);
  }

  getFacilities(): Facility[] {
    return this.facilities;
  }

  getTeam(): TeamMember[] {
    return this.team;
  }

  getPartners(): Partner[] {
    return this.partners;
  }
}