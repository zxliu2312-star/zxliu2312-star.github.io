export const experienceData = {
  timeline: [
    {
      id: 1,
      year: '2027 - 2028',
      title: '研究生支教团',
      role: '志愿者',
      organization: '南京大学研究生支教团',
      period: '2027.09 - 2028.07',
      type: 'volunteer',
      description: '将参与南京大学研究生支教团，赴西部地区开展为期一年的志愿服务。',
      highlights: [
        '已入选，待出发',
      ],
      tags: ['Volunteer', 'Education']
    },
    {
      id: 2,
      year: '2027 - 2031',
      title: '硕士研究生',
      role: '研究生',
      organization: '南京大学',
      period: '2028.09 - 2031.06',
      type: 'education',
      description: '支教结束后继续在南京大学攻读软件工程硕士学位。',
      highlights: [
        '专业方向：软件工程',
      ],
      tags: ['Software Engineering', 'Research']
    },
    {
      id: 3,
      year: '2023 - 2027',
      title: '软件工程本科',
      role: '本科生',
      organization: '南京大学',
      period: '2023.09 - 2027.06',
      type: 'education',
      description: '南京大学软件工程专业本科在读，系统学习计算机科学与软件工程知识。',
      highlights: [
        '专业课程学习',
        '独立与团队项目开发',
        '开源项目实践',
      ],
      tags: ['Software Engineering', 'Full-stack', 'Computer Science']
    },
  ],

  // 成就部分待补充，目前没有确认的奖项/荣誉，暂不展示
  achievements: [] as Array<{ title: string; items: string[] }>,
};
