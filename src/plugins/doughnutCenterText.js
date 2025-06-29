export default function centerTextPlugin({ monthlySavings }) {
  return {
    id: 'centerTextPlugin',
    beforeDraw(chart) {
      const { width, height, ctx } = chart;
      ctx.restore();

      const title = 'Monthly Investment';
      const value = `₹${monthlySavings}`;

      const baseFontSize = 18;
      const valueFontSize = 24;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Draw dull-colored title
      ctx.font = `${baseFontSize}px sans-serif`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; // semi-transparent white
      ctx.fillText(title, width / 2, height / 2 - 15);

      // Draw bold value
      ctx.font = `${valueFontSize}px sans-serif`;
      ctx.fillStyle = '#ffffff'; // pure white
      ctx.fillText(value, width / 2, height / 2 + 15);

      ctx.save();
    },
  };
}