
export const links = [
  {
    name: 'Home',
    url: '/',
    submenu: false
  },
  {
    name: 'Proyectos',
    url: '/#projects',
    submenu: true,
    sublinks: [
      { name: '001_Catálogo de Domesticidad', link: 'projects/001_catalogo_domesticidad' },
      { name: '002_Experiment City', link: 'projects/002_experiment_city' },
      { name: '003_Z-House', link: 'projects/003_z_house' },
      { name: '004_Bacarnal', link: 'projects/004_bacarnal' },
      { name: '005_Cortijo San Isidro', link: 'projects/005_cortijo_de_san_isidro' }
    ]
  },
  {
    name: 'Crossover',
    url: '/#crossover',
    submenu: true,
    sublinks: [
      { name: '006_Yogijen Poketto', link: 'projects/006_yogijen_poketto' },
      { name: '007_Casa Citrohan', link: 'projects/007_casa_citrohan' }
    ]
  },
  {
    name: 'Gallery',
    url: '/gallery',
    submenu: false
  }
]
