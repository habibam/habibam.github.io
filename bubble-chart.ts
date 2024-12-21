import * as d3 from 'd3';


export function createBubbleChart() {
    const data = [
        { name: 'BentoML', link: 'https://bentoml.slack.com/team/U02MBFM7P7Y', radius: 30 },
        { name: 'MLOps', link: 'https://mlops-community.slack.com/team/U038CKDA738', radius: 30 },
        { name: 'Write Speak Code', link: 'https://wsccommunity.slack.com/team/UGZA7NPEK', radius: 30 },
        { name: 'RLS', link: 'https://rands-leadership.slack.com/team/U07AKCMSJUT', radius: 30 },
    ];

    const width = 400;
    const height = 200;

    const svg = d3.select('#bubble-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const simulation = d3.forceSimulation(data)
        .force('charge', d3.forceManyBody().strength(5))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.radius + 5));

    const nodes = svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('r', d => d.radius)
        .attr('cx', width / 2)
        .attr('cy', height / 2)
        .style('fill', d => d3.schemeCategory10[Math.floor(Math.random() * 10)])
        .on('mouseover', function (event, d) {
            simulation.alphaTarget(0.5).restart();
            d.vx = (Math.random() - 0.5) * 20;
            d.vy = (Math.random() - 0.5) * 20;
        })
        .on('mouseout', function (event, d) {
            // Reduce the alpha back to normal
            simulation.alphaTarget(0);
        })
        .on('click', (event, d) => {
            window.open(d.link, '_blank');
        });

    const labels = svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text(d => d.name)
        .attr('font-size', '12px')
        .attr('text-anchor', 'middle')
        .attr('dy', '.35em');

    simulation.on('tick', () => {
        nodes
            .attr('cx', d => d.x!)
            .attr('cy', d => d.y!);

        labels
            .attr('x', d => d.x!)
            .attr('y', d => d.y!);
    });
};
