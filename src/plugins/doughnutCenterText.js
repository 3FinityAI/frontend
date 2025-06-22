// plugins/doughnutCenterText.js

const centerTextPlugin = {
  id: 'centerTextPlugin',
  beforeDraw(chart) {
    const { width, height, ctx } = chart;
    const text = 'Monthly Investment\n40,000';
    ctx.restore();

    const fontSize = (height / 100).toFixed(2);
    ctx.font = `$16px sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#333';

    const lines = text.split('\n');
    lines.forEach((line, i) => {
      ctx.fillText(line, width / 2, height / 2 + i * 20);
    });

    ctx.save();
  },
};

export default centerTextPlugin;