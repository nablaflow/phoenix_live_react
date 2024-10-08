import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['./js/phoenix_live_react.js'],
  bundle: true,
  minify: true,
  sourcemap: false,
  format: "esm",
  target: ['es2020'],
  outfile: '../priv/static/phoenix_live_react.js',
  external: ["react", "react-dom/client"],
})
