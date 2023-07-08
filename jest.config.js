module.exports = {
  transform: { '^.+\\.(t|j)sx?$': '@swc/jest' }, // Pagina para usar jest en swc: https://swc.rs/docs/usage/jest
  testPathIgnorePatterns: ['/node_modules/', '/src/component/css/.*\\.css$'],

  // Para que jest no me lea los archivos CSS como archivos JS
  // Crear archicos __mocks__/styleMock.js en la raiz del projecto
  // agreagar estas lienas

  // module.exports = {};
  // module.exports = 'test-file-stub';
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  }
}
