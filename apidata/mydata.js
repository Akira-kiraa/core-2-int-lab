const data = [
	{ beach: 'Beach 1', 'date':11, 'Enterococci Results': 10 },
	{ beach: 'Beach 2', 'date':12, 'Enterococci Results': 30 },
	{ beach: 'Beach 3', 'date':13, 'Enterococci Results': 20 },
	{ beach: 'Beach 4', 'date':14, 'Enterococci Results': 0 },
	{ beach: 'Beach 5', 'date':15, 'Enterococci Results': 0 },
    { beach: 'Beach 6', 'date':16, 'Enterococci Results': 9.9 },
    { beach: 'Beach 7', 'date':17, 'Enterococci Results': 90 },
    { beach: 'Beach 8', 'date':18, 'Enterococci Results': 150 },
    { beach: 'Beach 9', 'date':19, 'Enterococci Results': 200 },
];

const canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {  
  ctx.beginPath();
  ctx.arc(x, y, size * 5, 0, 2 * Math.PI);
  ctx.fillStyle = 'greenyellow';
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.stroke();

}

data.forEach((beach, index) => {
  const x = beach['date'] * 5 + (index * 100);
  const y = 500 - beach['Enterococci Results'] * 2 ;
  const size = beach['Enterococci Results'] === 0 ? 0 :
  beach['Enterococci Results'] <= 100 ? 10 :
  beach['Enterococci Results'] <= 1000 ? 20 :
  30;

  drawCircle(x, y, size);
});
