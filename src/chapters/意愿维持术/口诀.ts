import {JASTInput} from '../../JAST/JASTInput.ts'
import 诊治 from '../诊治.ts'

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
        诊治(
          '这么好的东西给我也是浪费。',
          '我愿意牺牲自己满足别人。',
          '是我太敏感了，还是不要给别人添麻烦了。',
          '得不到想要的也没事，我一点都不在意。',
        ),
      ],
    },
    {
      title: '索取比夺取有效',
      elements: [
        诊治(
          '',
        ),
      ],
    },
    {
      title: '坦言比婉言有效',
      elements: [
        诊治(
          '',
        ),
      ],
    },
  ],
}
export default 口诀
