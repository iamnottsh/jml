import {JASTBlockElement} from '../JAST/JASTBlock.tsx'

const 挑战: JASTBlockElement = {
  type: 'paragraph',
  props: {
    children: [`挑战：${'_'.repeat(48)}！`],
  },
}

export default function 矫正(...认知: string[]): JASTBlockElement {
  return {
    type: 'list',
    props: {
      children: 认知.map(value => ({
        type: 'compare',
        props: {
          children: [
            {
              type: 'paragraph',
              props: {
                children: `认知：${value}？`,
              },
            },
            挑战,
          ],
        },
      })),
    },
  }
}
