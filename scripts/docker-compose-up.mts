import shell from 'shelljs';
import pc from 'picocolors';

const hasDockerCompose = !!shell.which('docker-compose');

if (!hasDockerCompose) {
  console.error(pc.red('❌ You should install docker-compose first.'));
  shell.exit(1);
}

const { code, stderr } = shell.exec('docker-compose up -d');

if (code === 0) {
  console.log(pc.cyan('🎉 The services have been started.'));
  shell.exit(0);
}

console.error(stderr);
console.error(pc.red('❌ Start services failed. Please fix errors.'));
