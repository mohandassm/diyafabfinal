
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/diyafeb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/diyafeb/home",
    "route": "/diyafeb"
  },
  {
    "renderMode": 2,
    "route": "/diyafeb/home"
  },
  {
    "renderMode": 2,
    "route": "/diyafeb/aboutus"
  },
  {
    "renderMode": 2,
    "route": "/diyafeb/projects"
  },
  {
    "renderMode": 2,
    "route": "/diyafeb/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6111, hash: '844df03293dc82723a95520d1cef5678258a56305efb9860dc99c58967085b36', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1064, hash: '0d31c01cb39d0fbac2501e4485292a42801fd615d037b0bbe5c0014a155bbd12', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20887, hash: '3efbb1436c0f6d3717f00e0f06a462de7227cef82eec944df6e66cfab49f878a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 14506, hash: '8f8d30c4907198cd322c2d2293312973d039bfa045adbde3d1604c8c1ebbb2d0', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 25769, hash: 'c673bf01a8dde172791f4cff02afba93fa5d0ace3a93e56ef327143174806fef', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16035, hash: '6aa57cccbf5615d979267dc7854ba82d55f6151e7f5fcbeaa1f2673d26024b44', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-PYBY444H.css': {size: 309695, hash: 'PpOV3BQybnM', text: () => import('./assets-chunks/styles-PYBY444H_css.mjs').then(m => m.default)}
  },
};
