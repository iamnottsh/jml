import {JASTInput} from '../../JAST/JASTInput.ts'
import 诊治 from '../诊治.ts'

const 口诀: JASTInput = {
  title: '意愿维持口诀',
  elements: [
    {
      type: 'paragraph',
      props: {
        children: '一些认知会阻挠你发挥好意愿维持术，它们是意愿的障碍。',
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
          '我愿意牺牲自己满足对方。',
          '是我太敏感了，还是不要给对方添麻烦了。',
          '得不到想要的也没事，我一点都不在意。',
        ),
      ],
    },
    {
      title: '索取比夺取有效',
      elements: [
        诊治(
          '社交还得查攻略的我真没用。',
          '求人代表我是个软弱的人。',
          '在开口询问之前，我必须确定对方会同意。',
          '如果没法搞定对方，我会觉得自己无能。',
        ),
      ],
    },
    {
      title: '坦言比婉言有效',
      elements: [
        诊治(
          '被人拒绝会让我崩溃。',
          '我不想惹对方生气。',
          '要是我说得太直接，会伤别人的心。',
          '提什么要求，我不应该这么自私。',
        ),
      ],
    },
  ],
}
export default 口诀
