import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['./js/phoenix_live_react.js'],
  bundle: true,
  minify: true,
  sourcemap: false,
  target: ['es2020'],
  outfile: '../priv/static/phoenix_live_react.js',
  external: ["react", "react-dom"]
})

await ctx.watch()
console.log('watching...')
