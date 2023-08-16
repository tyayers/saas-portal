cd ./client
npm run build
rm -r -f "../service/static"
mkdir "../service/static"
cp -r "dist/." "../service/static"

cd ..