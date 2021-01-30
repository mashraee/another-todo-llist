import {GrBriefcase, GrHome} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'

export  const relevanceHandler =(relevance) => {
    switch (relevance) {
      case 'home':
        return <GrHome />;
      case 'personal':
        return <BsPerson /> ;
      case 'work':
        return <GrBriefcase />;
      default:
        break;
    }
}