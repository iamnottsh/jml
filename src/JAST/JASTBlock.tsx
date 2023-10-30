import JASTBlockList, {JASTBlockListElement, JASTBlockListType} from './JASTBlockList.tsx'
import JASTBlockParagraph, {JASTBlockParagraphElement, JASTBlockParagraphType} from './JASTBlockParagraph.tsx'

export type JASTBlockElement =
  JASTBlockParagraphElement |
  JASTBlockListElement

export interface JASTBlockProps {
  children?: JASTBlockElement
}

export default function JASTBlock({children}: JASTBlockProps) {
  if (children === undefined) return null
  const {type, props} = children
  switch (type) {
    case JASTBlockParagraphType:
      return <JASTBlockParagraph {...props}/>
    case JASTBlockListType:
      return <JASTBlockList {...props}/>
  }
}

