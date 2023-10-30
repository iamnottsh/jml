import BananaSlug from 'github-slugger'
import {JASTInput} from './JASTInput.ts'
import {JASTOutput} from './JASTOutput.ts'

export default function JASTCompile({title, elements, children}: JASTInput, slugger: BananaSlug, level = 0): JASTOutput {
  return {title, elements, children: children?.map(value => JASTCompile(value, slugger, level + 1)), id: slugger.slug(title), level}
}
