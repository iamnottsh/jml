import JASTBlockCompare, {JASTBlockCompareElement} from './JASTBlockCompare.tsx'
import JASTBlockInput, {JASTBlockInputElement} from './JASTBlockInput.tsx'
import JASTBlockList, {JASTBlockListElement} from './JASTBlockList.tsx'
import JASTBlockParagraph, {JASTBlockParagraphElement} from './JASTBlockParagraph.tsx'

export type JASTBlockElement =
  JASTBlockParagraphElement |
  JASTBlockListElement |
  JASTBlockCompareElement |
  JASTBlockInputElement

export interface JASTBlockProps {
  children?: JASTBlockElement
}

export default function JASTBlock({children}: JASTBlockProps) {
  if (children === undefined) return null
  const {type, props} = children
  switch (type) {
    case 'paragraph':
      return <JASTBlockParagraph {...props}/>
    case 'list':
      return <JASTBlockList {...props}/>
    case 'compare':
      return <JASTBlockCompare {...props}/>
    case 'input':
      return <JASTBlockInput {...props}/>
  }
}

