import {JASTOutput} from './JASTOutput.ts'

export default function JASTRecompile({title, elements, children, id, level}: JASTOutput, prefix: string): JASTOutput {
  return {title, elements, children: children?.map(value => JASTRecompile(value, prefix)), id: `${prefix}-${id}`, level}
}
