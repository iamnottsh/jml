import {JASTInput} from '../../JAST/JASTInput.ts'
import 口诀 from './口诀'
import 招式 from './招式'
import 脚本 from './脚本.ts'

const 意愿维持术: JASTInput = {
  title: '意愿维持术',
  elements: [
    {
      type: 'paragraph',
      props: {
        children: '意愿是指你的意图或愿望，例如：',
      },
    },
    {
      type: 'list',
      props: {
        children: [
          {
            type: 'paragraph',
            props: {
              children: '让别人做某件事、',
            },
          },
          {
            type: 'paragraph',
            props: {
              children: '对别人做某件事、',
            },
          },
          {
            type: 'paragraph',
            props: {
              children: '某个权益受尊重、',
            },
          },
          {
            type: 'paragraph',
            props: {
              children: '某个观点受正视、',
            },
          },
          {
            type: 'paragraph',
            props: {
              children: '得到别人的承诺、',
            },
          },
          {
            type: 'paragraph',
            props: {
              children: '得到别人的体谅、',
            },
          },
          {
            type: 'paragraph',
            props: {
              children: '解决掉某种冲突、',
            },
          },
          {
            type: 'paragraph',
            props: {
              children: '改变掉某种处境……',
            },
          },
        ],
      },
    },
    {
      type: 'paragraph',
      props: {
        children: '意愿维持术是供你在互动中延续或增进意愿的技巧，这有赖你尽量澄清意愿的内容。',
      },
    },
    {
      type: 'paragraph',
      props: {
        children: '你越清楚你具体想要什么，就越清楚意愿能否被维持，就越容易发挥意愿维持术。',
      },
    },
  ],
  children: [
    口诀,
    招式,
    脚本,
  ],
}
export default 意愿维持术
