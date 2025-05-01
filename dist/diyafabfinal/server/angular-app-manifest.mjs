
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/diyafabfinal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/diyafabfinal/home",
    "route": "/diyafabfinal"
  },
  {
    "renderMode": 2,
    "route": "/diyafabfinal/home"
  },
  {
    "renderMode": 2,
    "route": "/diyafabfinal/aboutus"
  },
  {
    "renderMode": 2,
    "route": "/diyafabfinal/projects"
  },
  {
    "renderMode": 2,
    "route": "/diyafabfinal/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6121, hash: '2e12ff928b893b00946f7d0fa120d60b57e6a192fd538373faacdca3325dc583', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: 'ce11b7b5c2d7aa8ac4e253a41bf186bc172856af5bab768c6a6e72e77fd2163c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 14536, hash: 'bba3f80f8d87ce3e7993a16769cbef526cc53fae3f31fc2504470c9d26de990c', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20922, hash: '4f97098988c29018e2d444d87ec683f38478108cd857deef73f9ad08fb1eb103', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16065, hash: '6f82babe883f806a36d012ad3f6b5715d480afd7948688c63b9077c4179e7799', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 25799, hash: '8fa53b35e38db137d832ed3eb29ff26aa00715340bc942f4a040e5c3e535ffb3', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-PYBY444H.css': {size: 309695, hash: 'PpOV3BQybnM', text: () => import('./assets-chunks/styles-PYBY444H_css.mjs').then(m => m.default)}
  },
};
