const path = require('path');
//const nodeExternals = require('webpack/node_externals');

module.exports = {
  target: 'node',
  entry: './src/server.ts',  // Substitua com o caminho correto para o ponto de entrada do seu aplicativo.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Substitua 'dist' pelo diretório de saída desejado.
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
            }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/, // Nova regra para arquivos HTML
        use: 'html-loader',
      },
      {
        test: /\.cs$/,
        use: 'ignore-loader',
      },
      {
        test: /\.cpp$/,
        use: 'ignore-loader',
      },
    ],
  },
  //externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts','.js'],
    alias: {
        crypto: 'node:crypto',
    },
  }
};
