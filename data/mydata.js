const data = [
    { enterococciResults: 50, date: '2022-04-01' },
    { enterococciResults: 200, date: '2022-04-02' },
    { enterococciResults: 800, date: '2022-04-03' },
    { enterococciResults: 1200, date: '2022-04-04' },
    { enterococciResults: 70, date: '2022-04-05' },
  ];
  
  //data.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  const chart = document.getElementById('chart');
  
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
  