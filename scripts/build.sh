rm -rf ./dist
mkdir dist
npm run build -- --declaration true --declarationMap true --module esnext --outDir "./dist/es"
npm run build -- --declaration true --declarationMap true --module commonjs --outDir "./dist/commonjs"
