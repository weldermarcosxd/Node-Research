var base = 0;

for(i = 2; i < process.argv.length; i++){
  base = base + Number(process.argv[i]);
};

console.log(base);
