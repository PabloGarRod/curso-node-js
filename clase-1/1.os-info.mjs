import {
  platform,
  release,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime,
} from "node:os";

console.log(`Información del sistema operativo`);
console.log(`-----------------------------------`);
console.log(`Nombre del Sistema Operativo: ${platform()}`);
console.log(`Versión del Sistema Operativo: ${release()}`);
console.log(`Arquitectura: ${arch()}`);
console.log(`CPUs:`, cpus()); // <------- Vamos a poder escalar procesos en Node
console.log(`Memoria libre: ${freemem() / 1024 / 1024 / 1024} gigas`);
console.log(`Memoria total: ${totalmem() / 1024 / 1024 / 1024} gigas`);
console.log(`uptime: ${uptime() / 60 / 60 / 24} dias`);
