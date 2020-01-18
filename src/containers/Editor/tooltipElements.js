import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import Divider from '@material-ui/core/Divider';
import {  
  ALIGN_LEFT,
  ALIGN_RIGHT,
  ALIGN_CENTER,
  HIGHLIGHT} from "containers/Editor/editorStyles";


const tooltipElements = [
  {icon:FormatAlignLeftIcon,type:ALIGN_LEFT},
  {icon:FormatAlignCenterIcon,type:ALIGN_CENTER},
  {icon:FormatAlignRightIcon,type:ALIGN_RIGHT},
  {divider:Divider},
  {icon:FormatBoldIcon,style:'BOLD'},
  {icon:FormatItalicIcon,style: 'ITALIC'},
  {icon:FormatUnderlinedIcon,style: HIGHLIGHT},
]

export default tooltipElements;
