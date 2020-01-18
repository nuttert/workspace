import {ReactComponent as rating} from 'assets/img/skillsAndAbilities/rating.svg';
import {ReactComponent as employment} from 'assets/img/skillsAndAbilities/employment.svg';
import {ReactComponent as averageOrder} from 'assets/img/skillsAndAbilities/average-order.svg';
import {ReactComponent as classification} from 'assets/img/skillsAndAbilities/classification.svg';
import {ReactComponent as complitedTasks} from 'assets/img/skillsAndAbilities/complited-tasks.svg';

import {WorkspaceAbilitiesCard,TasksCard,SkillsCard} from "components/Cards/cards";

const workspaceAbilitiesInfo = {
  rating:{
    icon:rating,
    name:"Rating",
    size:6,
    card:WorkspaceAbilitiesCard
  },
  employment:{
    icon:employment,
    name:"Employment",
    size:6,
    card:WorkspaceAbilitiesCard
  },
  averageOrder:{
    icon:averageOrder,
    name:"Average order",
    size:6,
    card:WorkspaceAbilitiesCard
  },
  classification:{
    icon:classification,
    name:"Classification",
    size:6,
    card:WorkspaceAbilitiesCard
  },
  complitedTasks:{
    icon:complitedTasks,
    name:"Complited tasks",
    size:12,
    card:TasksCard
  },
};


const skillsInfos = {
    backend:{
      languages:{
        title:"Languages",
        card:SkillsCard
      },
      databases:{
        title:"Databases",
        card:SkillsCard
      },
      libsAndFrameworks:{
        title:"Libs and Frameworks",
        card:SkillsCard
      },
}
}

export  {workspaceAbilitiesInfo,skillsInfos};
