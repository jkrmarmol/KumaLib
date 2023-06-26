import type { ITeamMember } from '../typings/interfaces';
import KurtImage from '../assets/images/jkrmarmol.jpg';
import DorothyImage from '../assets/images/dorothy.jpg';
import AaronImage from '../assets/images/aaron.jpg';


const teamMember: Array<ITeamMember> = [
  {
    image: KurtImage,
    name: 'Kurt Russelle Marmol',
    position: 'FOUNDER & CTO',
    course: 'BS Computer Engineering'
  },
  {
    image: DorothyImage,
    name: 'Dorothy Carza Antonio',
    position: 'CO-FOUNDER & CEO',
    course: 'TVL - Home Economics'
  },
  {
    image: AaronImage,
    name: 'Aaron Aludo',
    position: 'CO-FOUNDER & COO',
    course: 'Associate Computer Technology (ACT)'
  }
]

export default teamMember;