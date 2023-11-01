import {JASTBlockElement} from '../JAST/JASTBlock.tsx'

const 戳破: JASTBlockElement = {
  type: 'input',
  props: {
    children: {
      type: 'paragraph',
      props: {
        children: '戳破：',
      },
    },
  },
}

export default function 诊治(...谎言: string[]): JASTBlockElement {
  return {
    type: 'list',
    props: {
      children: 谎言.map<JASTBlockElement>(value => ({
        type: 'compare',
        props: {
          children: [
            {
              type: 'input',
              props: {
                children: {
                  type: 'paragraph',
                  props: {
                    children: '谎言：',
                  },
                },
                value,
                disabled: true,
              },
            },
            戳破,
          ],
        },
      })).concat({
        type: 'compare',
        props: {
          children: [
            {
              type: 'input',
              props: {
                children: {
                  type: 'paragraph',
                  props: {
                    children: '谎言：',
                  },
                },
              },
            },
            戳破,
          ],
        },
      }),
    },
  }
}
