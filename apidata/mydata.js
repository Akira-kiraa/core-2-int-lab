// 这里是样本数据，您需要根据您的实际数据来修改
const data = [
    { enterococciResults: 50, date: '2022-04-01' },
    { enterococciResults: 200, date: '2022-04-02' },
    { enterococciResults: 800, date: '2022-04-03' },
    { enterococciResults: 1200, date: '2022-04-04' },
    { enterococciResults: 70, date: '2022-04-05' },
  ];
  
  // 将数据按照日期从小到大排序
  data.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  // 获取图表容器
  const chart = document.getElementById('chart');
  
  // 计算每个圆形的位置和颜色
  data.forEach((item, index) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    if (item.enterococciResults <= 100) {
      circle.classList.add('green');
    } else if (item.enterococciResults > 100 && item.enterococciResults <= 1000) {
      circle.classList.add('yellow');
    } else {
      circle.classList.add('red');
    }
    const top = - item.enterococciResults * 0.4 + 500;
    const left = 600 - (data.length - index) * 120;
    circle.style.top = `${top}px`;
    circle.style.left = `${left}px`;
    chart.appendChild(circle);
  });
  