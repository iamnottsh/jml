import {JASTInput} from '../../JAST/JASTInput.ts'
import 矫正 from '../矫正.ts'

const 口诀: JASTInput = {
  title: '意愿维持口诀',
  elements: [
    {
      type: 'paragraph',
      props: {
        children: '一些认知会成为意愿障碍，它们会阻挠你施展意愿维持术。',
      },
    },
    {
      type: 'paragraph',
      props: {
        children: '愿意诊治这些认知，而非偏要克服它们，三句口诀即可做到：',
      },
    },
    {
      type: 'list',
      props: {
        children: [
          {
            type: 'paragraph',
            props: {
              children: '「能耐比忍耐有效」挑战那些会阻挠你尝试的认知、',
            },
          },
          {
            type: 'paragraph',
            props: {
              children: '「索取比夺取有效」挑战那些会阻挠你宣告的认知、',
            },
          },
          {
            type: 'paragraph',
            props: {
              children: '「坦言比婉言有效」挑战那些会阻挠你狠心的认知。',
            },
          },
        ],
      },
    },
  ],
  children: [
    {
      title: '能耐比忍耐有效',
      elements: [
        矫正(
          '我不配得到我想要或需要的东西',
          '我必须确定这个人会同意再提出请求',
          '别人的拒绝会击垮我',
        ),
      ],
    },
    {
      title: '索取比夺取有效',
    },
    {
      title: '坦言比婉言有效',
    },
  ],
}
export default 口诀
