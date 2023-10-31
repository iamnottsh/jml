import JASTBlock, {JASTBlockElement} from './JASTBlock.tsx'
import JASTElement from './JASTElement.ts'

export interface JASTBlockListProps {
  children?: JASTBlockElement[]
}

export type JASTBlockListElement = JASTElement<'list', JASTBlockListProps>

export default function JASTBlockList({children}: JASTBlockListProps) {
  return (
    <ol>
      {children?.map((value, index) =>
        <li key={index}>
          <JASTBlock>{value}</JASTBlock>
        </li>)}
    </ol>
  )
}
