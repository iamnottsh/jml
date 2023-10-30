import {JASTBlockElement} from './JASTBlock.tsx'

export default interface JASTBase<T extends JASTBase<T>> {
  title: string
  elements?: JASTBlockElement[]
  children?: T[]
}
