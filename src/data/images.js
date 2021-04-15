import localramaTempCover from './../img/localrama/localrama1.jpg';
import blueneonTempCover from './../img/blueneon/blueneon1.jpg';

function importAll(r) {
  return r.keys().map(r);
}

// Passeparout
const passepartoutScreenshots = importAll(
  require.context(
    './../img/passepartout/screenshots',
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const passepartoutDesign = importAll(
  require.context('./../img/passepartout/design', false, /\.(png|jpe?g|svg)$/)
);

// Srtendaggi
const srtendaggiScreenshots = importAll(
  require.context(
    './../img/srtendaggi/screenshots',
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const srtendaggiDesign = importAll(
  require.context('./../img/srtendaggi/design', false, /\.(png|jpe?g|svg)$/)
);

// Hivenue
const hivenueScreenshots = importAll(
  require.context('./../img/hivenue/screenshots', false, /\.(png|jpe?g|svg)$/)
);
const hivenueDesign = importAll(
  require.context('./../img/hivenue/design', false, /\.(png|jpe?g|svg)$/)
);

// Portfolio
const portfolioScreenshots = importAll(
  require.context('./../img/portfolio/screenshots', false, /\.(png|jpe?g|svg)$/)
);
const portfolioDesign = importAll(
  require.context('./../img/portfolio/design', false, /\.(png|jpe?g|svg)$/)
);

export const imgs = [
  {
    name: 'passepartout',
    cover: passepartoutDesign[3].default,
    screenshots: passepartoutScreenshots,
    design: passepartoutDesign,
  },
  {
    name: 'srtendaggi',
    cover: srtendaggiDesign[4].default,
    screenshots: srtendaggiScreenshots,
    design: srtendaggiDesign,
  },
  {
    name: 'hivenue',
    cover: hivenueScreenshots[0].default,
    screenshots: hivenueScreenshots,
    design: hivenueDesign,
  },
  {
    name: 'portfolio',
    cover: portfolioScreenshots[0].default,
    screenshots: portfolioScreenshots,
    design: portfolioDesign,
  },
  {
    name: 'blueneon',
    cover: blueneonTempCover,
    screenshots: [],
    design: [],
  },
  {
    name: 'localrama',
    cover: localramaTempCover,
    screenshots: [],
    design: [],
  },
];
