export const width = window.innerWidth < 800 ? window.innerWidth : 800;
export const height = window.innerHeight < 600 ? window.innerHeight : 600;

let fixedPoint = 0;
if (height >=320 && height <= 375) fixedPoint = -30;
export const floorH = height * 210 / 600 * 0.8 + fixedPoint;

export const yAxisFloor = height - floorH ;

export const playerX = Math.round(width / 3.5);
export const playerY = yAxisFloor + 20;

if (height >=320 && height <= 375) fixedPoint = -0.05;

export const playerScale = (Math.round(width * 3/10)/800) + fixedPoint;

export const itemWidth = Math.round((width * 80) / 800);
export const obstWidth = Math.round((width * 120) / 800);



export const yAxisObst = playerY - obstWidth + 10;

if (height >=320 && height <= 375) fixedPoint = 20;

export const yAxisItem = playerY - 150 - 2.4 * itemWidth + fixedPoint;