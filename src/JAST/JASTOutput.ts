import JASTBase from './JASTBase.ts'

export interface JASTOutput extends JASTBase<JASTOutput> {
  id: string
  level: number
}
