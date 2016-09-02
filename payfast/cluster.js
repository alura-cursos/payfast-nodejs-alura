var cluster = require('cluster');

console.log('executando thread');

if(cluster.isMaster){
  console.log('thread master');
  cluster.fork();
} else {
  console.log('thread slave');
  cluster.fork();
}
